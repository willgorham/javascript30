> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 10 - Hold Shift to Check Multiple Checkboxes

### [View demo](https://willgorham.github.io/javascript30/10%20-%20Hold%20Shift%20to%20Check%20Multiple%20Checkboxes/index.html)

Similar to selecting multiple items in a directory or multiple emails in a client, the challenge here was to check all checkboxes between two clicks if holding the Shift key.

### What did this project involve?

- Listening for input change events as well as Shift key presses
- Iterating through the inputs using a flag to indicate when you are between the last and current checked boxes

### What did I learn?

Not a lot new here, just rehashing some already covered topics with a bit more complexity. I completed the project without the video first, and then watched the video and refactored a bit.

- I used the 'change' event, but Wes used the 'click' event to listen for input changes. He mentioned that 'click' also fires on keyboard usage but 'change' seemed to make more sense to me. One caveat of this was that the 'change' event does not have a `.shiftKey` propery (though 'click' does), so I needed a couple more listeners on keyup/keydown to check for Shift holding unlike in Wes's example where he simply used `event.shiftKey`.

### Additional things:

I thought it made sense to unset the 'last checked' box when a box is unchecked (in case the user then presses shift and checks a new box). I implemented this because it seemed like more expected behavior to me, but was not included in the example.
