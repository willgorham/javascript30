> ## JavaScript30
> A vanilla JS practice course written by Wes Bos (https://javascript30.com/)
>
> No frameworks. No compliers. No libraries. No boilerplate.

# 18 - Adding Times with Reduce

### [View demo](https://willgorham.github.io/javascript30/18%20-%20Adding%20Times%20with%20Reduce/index.html)

Whew, holy calculations. This one was a struggle to do, not because of the logic, but because calculating the time from a string was a piece of work.

### What did this project involve?

- Array map, reduce
- Destructuring with default values

### What did I learn?

- Some good practice working with array data here. Wes used an extra `.map` step, while I opted to do a bunch of the array mutation in a sinlge step. I'm unsure if there's a benefit between the two options (potentially performance from running through the array only once) although breaking the tasks into multiple steps may be more readable.
- I learned about default values with destructuring variables, pretty cool!
- Don't use parseInt on number values, save it for strings.

### Additional things:

I added handling for hours in the time values, which added some additional complexity. Obviously it wasn't necessary in this case, but nice for extensibility and it was interesting to work through that problem.
