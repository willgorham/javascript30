> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 17 - Sorting Band Names Without Articles

### [View demo](https://willgorham.github.io/javascript30/17%20-%20Sort%20Without%20Articles/index.html)

Working with arrays again [😄][😛][🤪][🙁][😘]

### What did this project involve?

- Array sorting
- Creating a RegEx string from an array

### What did I learn?

- I always feel like `Array.prototype.sort()` should return the argument that should be higher (or lower) in the list. Instead, return -1, 0, or 1, otherwise you'll be wondering why the hell your sort isn't working correctly.
- Creating a RegEx object on the fly from an array of articles was a fun little task. I don't feel super comfortable with regular expressions, so it's always good to get a little practice (and also get some `Array.prototype.reduce` practice while I was at it).

### Additional things:

Instead of hard-coding my regex, I built it up from an array, which felt like it would be more appropriate and reusable. Otherwise a pretty straightforward problem here.
