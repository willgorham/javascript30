> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 20 - Speech Recognition

### [View demo](https://willgorham.github.io/javascript30/20%20-%20Speech%20Recognition/index.html)

This was a crazy lesson. The task was to enable the webcam interface and apply various effects and filters to the video feed.

### What did this project involve?

- HTML5 Canvas
- Using the `navigator` object, and camera device input
- Manipulating canvas pixels via `context.getImageData()`
- Converting canvas data to base64-encoded images

### What did I learn?

Well, besides the basic concepts, pretty much everything here was new information.

- `navigator.mediaDevices.getUserMedia(...)` prompts the user for permission to collect media input data.
- You can set `video.srcObject` to the promise returned from `getUserMedia()` and play the webcam video in a `<video>` element.
- You can draw an image to the canvas context directly from a video element.
- `context.getImageData()` and `context.putImageData()` can be used to manipulate the canvas image.
- `canvas.toDataURL('image/jpeg')` created a base64 encoded URL of the current canvas that can be passed to an image element, saved, etc.

### Additional things:

This was all new and subjective work, so basically a follow-along video, but interesting nonetheless.
