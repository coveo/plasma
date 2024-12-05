# Best Practices

A slider is appropriate when providing **an exact value is not important**. Sliders typically allow users to adjust the intensity of an effect, such as a percentage of opacity, or when an approximate value is sufficient, for example when choosing a flight departure time. It helps visualize a range of allowed values. Consider the following:

- Use a slider when page real estate is not an issue and when visualizing the range helps users make more informed choices.
- The slider should have a range of up to 100 values.
- If the range is short (i.e., 5 values or less) or large (i.e., over 50 values), consider using a [numeric input](https://plasma.coveo.com/form/NumericInput) instead.

Use sliders carefully, as they can be difficult to control on smaller devices or when the range is very large but the space is limited.

## Labeling

Keep marker labels short (i.e., ideally a single word).

Provide a short, descriptive title without action verbs. For example, write "Thumbnail size" rather than "Select the size of the thumbnail".

## Track and Markers

The track represents the value range. It should be divided into equal steps using markers.

When exposing a numeric value is unimportant, name markers using adjectives. For instance, use “small” and “big” when making users choose the size of a thumbnail.

When using numeric values to label markers, display the unit to provide context. For instance, show "90%" when making users select a percentage.

Use plus and minus signs when the range allows negative values.

## Feedback and Validation

A slider always has a default value. Consider showing the most frequently selected value as the default. If no value particularly stands out, consider using a neutral value or the median. Ideally, the default value should correspond to a marker.

If users can select a numeric value between two markers, display this value above the handle or next to the slider. This allows users to refer to what they selected.

---

## Related Components

[Numeric input](https://plasma.coveo.com/form/NumericInput) - When setting a precise value.
