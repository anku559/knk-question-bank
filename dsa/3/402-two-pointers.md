# Two Pointers

### Reverse Array

* *Write a an algorithm to reverse an array using two pointer method?*

```jsx
let left = arr[0];
let right = arr[arr.length - 1];

while (left < right) {
  // use temp var
  left+=1; right -=1;
}
```
