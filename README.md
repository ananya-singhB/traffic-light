# traffic-light

This small React code implements a traffic light simulation that cycles through red, yellow, and green signals. The traffic light state is managed using the useState hook, with an initial configuration for each light's duration and the next light in the sequence.

**Key Features**:
**Automatic Cycling:** The traffic light changes automatically based on preset timers (5 seconds for red and green, 2 seconds for yellow) using the useEffect hook to set an interval.
**Custom Signal Setting:** Users can manually change the active signal and its timer using a dropdown menu and input field, allowing for dynamic adjustments to the traffic light behavior.
**Visual Representation:** The active light is highlighted while inactive lights are displayed in gray.

The user interface consists of:

> A display of the current traffic lights.

> A selector to choose a new signal and set a custom timer.

This interactive component effectively simulates traffic light functionality with an option for customization.
