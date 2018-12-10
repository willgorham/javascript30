> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 16 - Mouse Move Shadow

### [View demo](https://willgorham.github.io/javascript30/16%20-%20Mouse%20Move%20Shadow/index.html)

Mostly a math problem here, and figuring out which mouse event properties to use to calculate x/y positions and percentages.

### What did this project involve?

- Handling mouse events
- Calculating mouse event position relative to the screen (client)
- Setting multiple CSS text shadows

### What did I learn?

- A lot about calculating mouse / element position! This seems like an unnecessarily complicated API - there are so many position properties.
- `el.getBoundingClientRect()` returns an object with properties for the top, left, right, and bottom position of the element relative to the client (browser), and element height/width values.
- `el.offsetHeight` and `el.offsetWidth` return the element height/width directly.
- `event.clientX` and `event.clientY` return the (X/Y) position of the event relative to the client (browser).
- `event.pageX` and `event.pageY` are relative to the entire page, so they take into account any scrolling (horizontal and/or vertical).
- `event.offsetX` and `event.offsetY` return the event position relative to the closest positioned element.

### Additional things:

Wes uses `e.offsetX` and `e.offsetY` again to calculate his event position, and then uses an `if` statement to update the value if the cursor is over the text or not. This seems fragile and incorrect to me. Instead, using the correct properties relative to the client make the calculations work no matter what HTML markup you're using, and rely on appropriate properties. My math was different because of this, but I feel better about doing it my way.
