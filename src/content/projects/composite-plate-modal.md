---
title: Composite plate modal analysis for piezoelectric sensor placement
slug: composite-plate-modal
summary: Natural frequencies and mode shapes of a glass/polyester plate for 5 fibre orientations and 4 boundary conditions, to place a PZT sensor.
category: Structures & Materials
tools: ["Abaqus/Standard", "Modal analysis", "S4R shells", "Composites"]
team: Team of 4
period: ESILV coursework # TODO Mathis: replace with the real period
order: 6
cover: ../../assets/projects/composite-plate-modal/plate_modes.png
coverAlt: Grid of the first six mode shapes of the composite plate for three fibre orientations
stats:
  - value: "20"
    label: "Configurations: 5 fibre orientations × 4 boundary conditions"
  - value: "6"
    label: "Natural frequencies and mode shapes per configuration"
  - value: "41 Hz"
    label: "Highest fundamental frequency, 0/90° fibres, simply supported"
  - value: "73 Hz"
    label: "Same plate, clamped edges"
gallery:
  - src: ../../assets/projects/composite-plate-modal/plate_modes.png
    alt: Table of mode shape contours, modes 1 to 6 in columns and fibre orientations 0/90°, 30/60° and 45° in rows; nodal lines turn diagonal at 45°
    caption: First six mode shapes for each fibre orientation. At 45° the nodal lines become diagonal.
  - src: ../../assets/projects/composite-plate-modal/plate_table.png
    alt: Table comparing the natural frequencies of modes 1 to 6 from this study with Samyal et al. (2021) for the three fibre orientations
    caption: Natural frequencies (Hz) from this study compared with the reference, Samyal et al. (2021).
---

## Context & goal

A piezoelectric (PZT) sensor on a vibrating plate picks up almost nothing if it sits on a nodal line. With a team of four, I computed the natural frequencies and mode shapes of a composite plate to find where a sensor should go, following the study by Samyal et al. (2021), *Materials Research Express*.

## Method

- **Model.** Glass fibre / polyester plate, 300 × 300 × 1 mm, meshed with S4R shell elements (12 × 12 mesh) in Abaqus/Standard.
- **Design of the study.** 5 fibre orientations (0°, 30°, 45°, 60°, 90°) × 4 boundary conditions (simply supported, clamped, free-free, cantilever).
- **Outputs.** The first 6 natural frequencies and mode shapes for each case, used to place the sensor away from nodal lines.

## Results

- **0/90° fibres** give the highest fundamental frequency: **41 Hz** simply supported and **73 Hz** clamped.
- **45° fibres** give the lowest frequency, and the nodal lines become diagonal.
- 0/90° and 30/60° behave the same way, because the plate is square.

Natural frequencies in Hz, compared with the reference:

| Fibre orientation | Mode 1 | Mode 2 | Mode 3 | Mode 4 | Mode 5 | Mode 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 0° & 90°, this study | 41.03 | 87.99 | 115.74 | 167.00 | 168.25 | 251.04 |
| 30° & 60°, this study | 38.49 | 90.13 | 108.89 | 151.45 | 193.44 | 231.69 |
| 45°, this study | 37.62 | 92.26 | 105.49 | 147.97 | 210.71 | 216.49 |
| 0° & 90°, Samyal et al. | 32.94 | 72.22 | 101.46 | 134.05 | 146.28 | 200.47 |
| 30° & 60°, Samyal et al. | 34.86 | 78.56 | 96.33 | 136.01 | 163.84 | 202.18 |
| 45°, Samyal et al. | 35.53 | 81.00 | 94.35 | 136.88 | 177.67 | 186.30 |

The trends match the literature. The 20 to 30 % gaps come from the element formulation and the way the boundary conditions are implemented.

## Key takeaway

Matching trends matters more than matching numbers when the models differ in formulation. Explaining the gap, rather than tuning it away, is what makes the comparison with the reference useful.
