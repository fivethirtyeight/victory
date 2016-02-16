# VictoryLine Changelog

## 4.0.0 (2016-01-30)

- Supports data accessor functions!
[more detail](https://github.com/FormidableLabs/victory/issues/84)
- Application dependencies like `radium` and `lodash` now live in components, not in the Builder archetype. This is a breaking change. https://github.com/FormidableLabs/victory/issues/176

## 3.0.0 (2016-01-26)

- Upgrade to Radium 0.16.2. This is a breaking change if you're using media queries or keyframes in your components. Please review upgrade guide at https://github.com/FormidableLabs/radium/blob/master/docs/guides/upgrade-v0.16.x.md

## 2.2.0 (2016-1-21)

- Extracted shared code into `victory-util`
- Increased unit test coverage to ~75%

## 2.1.3 (2015-12-30)

- update archetype

## 2.1.2 (2015-12-30)

- Fixed a bug in `victory-bar` that was causing the cumulative max on stacked bar charts to be overestimated
- Fixed a bug related to date formatting in Firefox

## 2.1.1 Alpha (2015-12-18)

Functional styles and functional props (where appropriate) for child components

using `d3-modules` instead of all of `d3`

Basic code coverage.

We make no promises about any code prior to this release.
