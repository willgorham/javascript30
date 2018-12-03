> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 13 - Slide In on Scroll

### [View demo](https://willgorham.github.io/javascript30/13%20-%20Slide%20In%20on%20Scroll/index.html)

A long time ago I used an animation library to create scroll effects on a client's site. It created huge performance issues and was basically unusable. Here we do it a different and simpler way.

### What did this project involve?

- 'Debounce'-ing scroll event callbacks.
- Calculating element position in the viewport window.

### What did I learn?

- Wes uses `element.offsetY` to determine the element's vertical position. This works only by accident, because `.offsetY` typically returns the element's offset from its containing positioned element. In the example, this containing element is `body`, so you end up with the vertical position on the page by accident. It looks like the more appropriate way to do this would be to use `el.getBoundingClientRect()` which returns the element's size and position relative to the viewport, and then add this to the `window.scrollY` position.

### Additional things:

I think re-animating objects when scrolling up that have already been animated in to position is hokey, so I left that part out. Once an element is animated into place it should stay there.
