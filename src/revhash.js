const crypto = require('node:crypto');

// Minimal deterministic encoder: text + secret -> 8-character base62 token.
// - Not reversible (8 chars can't uniquely represent arbitrary text).
// - Deterministic: same text + secret -> same token.
// - Use for obfuscation / short IDs, not for secure encryption.

const ALPHABET =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const BASE = BigInt(ALPHABET.length); // 62
const WIDTH = 8; // output length
const M = BASE ** BigInt(WIDTH);

function hashToBigInt(buf) {
  let v = 0n;
  for (const b of buf) v = (v << 8n) + BigInt(b);
  return v;
}

function toBase62Fixed(v, width) {
  let n = v;
  const parts = [];
  for (let i = 0; i < width; i++) {
    const rem = n % BASE;
    parts.push(ALPHABET[Number(rem)]);
    n = n / BASE;
  }
  parts.reverse();
  return parts.join('');
}

function encode(text, secret = '') {
  if (typeof text !== 'string') text = String(text);
  // Use HMAC(secret, text) -> 32 bytes. Map to integer and mod M.
  const hmac = crypto
    .createHmac('sha256', String(secret))
    .update(text)
    .digest();
  const v = hashToBigInt(hmac);
  const idx = v % M;
  return toBase62Fixed(idx, WIDTH);
}

module.exports = { encode, WIDTH };
