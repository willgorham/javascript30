> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 15 - LocalStorage and Event Delegation

### [View demo](https://willgorham.github.io/javascript30/15%20-%20LocalStorage%20and%20Event%20Delegation/index.html)

Ahhh, back to things with a little complexity 🙂. The task here was to create a dynamic (user-generated) list of checkboxes and store the list's state using localStorage and event delegation.

### What did this project involve?

- As the self-explanatory title suggests... LocalStorage and event delegation!
- Managing client-side data, converting that data to HTML using `Array.prototype.map`, and a few other fun little things.

### What did I learn?

- My initial instict here was to use `document.createElement` when the form was submitted, but seeing how Wes stores all data in an array and then repopulates the HTML from that array makes a lot of sense. There's a nice separation between managing/storing data and the actual HTML output, instead of storing data directly in the HTML as DOM elements/nodes.
- `somethingPotentiallyFalsy || []` as an assignment pattern. Good reminder as I haven't used this in a while.
- Again, mapping an array of data objects to an HTML list using ES6 interploated strings is a repeated pattern. Good to grease the groove on that one.

### Additional things:

I added new buttons to bulk check/uncheck/delete all 'tapas' items in the list. This was pretty straightforward: grab each element by ID and set up event listeners/handlers. For check/uncheck a simple `forEach` setting the item's `done` property to `true` or `false` was sufficient. I also learned that the simplest way to clear an array is `arr.length = 0` (though I'm unsure if this is best practice because it feels a little icky).
