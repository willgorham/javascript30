> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 14 - JavaScript References VS Copying

### [View demo](https://willgorham.github.io/javascript30/14%20-%20JavaScript%20References%20VS%20Copying/index.html)

Another series of quick exercises, this time regarding array/object copying. Nothing visual to see here 👀

### What did this project involve?

- Various methods of cloning/copying arrays and objects.

### What did I learn?

Good ways to copy an array:

- `arr.slice()`
- `[].concat(arr)`
- `[...arr]`
- `Array.from(arr)`

For objects:

- `Object.assign({}, arr)`

- *NOTE* These are both only shallow copies.

### Additional things:

