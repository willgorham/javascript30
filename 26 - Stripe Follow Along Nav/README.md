> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 26 - Stripe Follow Along Nav

### [View demo](https://willgorham.github.io/javascript30/26%20-%20Stripe%20Follow%20Along%20Nav/index.html)

A continuation of Day 22, this project was to build out a transforming dropdown nav menu.

### What did this project involve?

- `mouseenter` and `mouseleave` event listeners
- Staggered addition/removal of classes to ensure proper transitioning
- Element on-page positioning using `.getBoundingClientRect()`

### What did I learn?

- You can't transition the `display` property. One option to overcome this is to use both `display: none` and `opactiy: 0` on a hidden element. When transitioning to visible, immediately set `display` to the desired value, and then a short while later (e.g. using `setTimeout`) set `opacity`, so any CSS transitions can work correctly.

### Additional things:
