> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 02 - JS and CSS Clock

### [View demo](https://willgorham.github.io/javascript30/02%20-%20JS%20and%20CSS%20Clock/index.html)

A pretty simple JS clock. The most complicated part here was probable working through the CSS positioning of each hand and how to get the rotation to look correct.


### What did this project involve?

- CSS transforms and transitions
- Use of `setinterval`
- Setting CSS properties with JS
- Use of `Object.keys`

### What did I learn?

- The CSS property `transition-timing-function`. I had always included this in the shorthand `transition` property, but never knew the individual property name.
- How to use `transform-origin` to adjust an element's point of rotation.

### Additional things:

I added a fix for the transition jump from 359 to 0 degrees by setting the transition duration to 0s before changing the rotation angle, then setting the duration back on future transitions. Also reworked some of the CSS to make the JS easier (eliminating the initial 90deg positioning), and made the hands different lengths.
