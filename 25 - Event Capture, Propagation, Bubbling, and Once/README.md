> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 25 - Event Capture, Propagation, Bubbling, and Once

### [View demo](https://willgorham.github.io/javascript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling,%20and%20Once/index.html)

This was more of a lesson / review of event propagation, capture -> target -> bubble, and the additional options available to `addEventListener`

### What did this project involve?

- Reviewing `addEventListener` and its optional parameters

### What did I learn?

- `addEventListener` can take a third (`boolean`) parameter called `useCapture` that determines whether the event should be dispatched during the capturing phase (event propagation from the DOM root to the event target), or the bubbling phase (event propagation from the event target up to the DOM root).
- `addEventListener` can also take an `object` as its third parameter called `options`. This object can contain a `capture` key, determining the same as the `useCapture` option noted above. It can also have a `once` key (`boolean` value). If `once` is set to `true`, the event handler will immediately be removed after the first time it is invoked. (This may or may not be when it is invoked on the event target, depending on the capturing mode).

### Additional things:
