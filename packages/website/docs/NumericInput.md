# Best Practices

Use a numeric input to allow users to make **small and precise incremental changes**.

A numeric input is especially appropriate when users must select a value within a short range. If your range has no limit, or if the limit is arbitrary, consider removing the incremental stepper.

A numeric input should be wide enough to display the maximum number of digits a value can have.

# Labeling

Keep labels short, preferably **under three words**.

Provide a descriptive title without action verbs. For example, write "Price" rather than "Enter a price".

# Help Text and Instructions

If the required value must be within a range, consider indicating the minimum and maximum values, or only one of them, in a help text (e.g., "Maximum of 20").

# Feedback and Validation

Ideally, the value to enter in a numerical input should be an integer. If you expect users to frequently enter decimals, **show the decimal point** in the default value (e.g.:, "20.0") to indicate the accepted format.

Display a validation message when users enter a value outside of the expected range. This message should include the maximal and minimal values accepted.

Determine the stepper increment relative to the range. An increment of 10% is generally acceptable. For instance, if the range is 1-10, the increments should be of 1. If the range is 1-5000, increments of 500 would be acceptable.

---

# Related Components

[Slider](https://plasma.coveo.com/form/Slider) - When value precision is unimportant.
