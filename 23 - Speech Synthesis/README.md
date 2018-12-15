> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 23 - Speech Synthesis

### [View demo](https://willgorham.github.io/javascript30/23%20-%20Speech%20Synthesis/index.html)

VOICEINATOR 5000!

The number of experimental browser APIs and the crazy things available continue to amaze me. Here, we use the SpeechSimulator API to geterate some interesting text-to-voice responses.

### What did this project involve?

- Using `window.speechSynthesis` and `SpeechSynthesisUtterance` to generate voice audio playback.
- Retrieving input values to pass into the speech utterance object as playback settings.

### What did I learn?

- How to pass arguments to a named callback function: `el.addEventListener('eventname', func.bind(this, arguments))` (or use an arrow function).

### Additional things:
