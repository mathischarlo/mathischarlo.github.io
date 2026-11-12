---
title: Flow past a cylinder, CFD validation
slug: cylinder-cfd-validation
summary: Laminar flow past a cylinder validated against theory and experiment, from Re = 0.1 to the von Kármán vortex street.
category: CFD
tools: ["ANSYS Fluent", "Laminar flow", "Transient", "Sensitivity study"]
team: Case study with a classmate
period: ESILV coursework # TODO Mathis: replace with the real period (e.g. 2024–2025)
order: 7
cover: ../../assets/projects/cylinder-cfd-validation/cyl_vortex.png
coverAlt: Velocity contour of the von Kármán vortex street forming behind a cylinder
stats:
  - value: "St = 0.2"
    label: "Strouhal number from the lift oscillation, matching experiments"
  - value: "0.05 %"
    label: "Lowest drag error vs. theory (Re = 20)"
  - value: "4 / 5"
    label: "Cases under 1 % error, all within the 5 % target"
  - value: "10,082"
    label: "Elements in the optimal mesh"
gallery:
  - src: ../../assets/projects/cylinder-cfd-validation/cyl_vortex.png
    alt: Velocity contour behind a cylinder showing alternating vortices shed downstream, the von Kármán vortex street
    caption: Unsteady flow, von Kármán vortex street behind the cylinder.
  - src: ../../assets/projects/cylinder-cfd-validation/cyl_pressure.png
    alt: Static pressure contour around the cylinder in steady flow, high pressure at the front stagnation point and low pressure on the sides
    caption: Static pressure around the cylinder, steady regime.
---

## Context & goal

Before trusting a solver on a complex geometry, it should reproduce a case whose answer is known. This study, done with a classmate, validates ANSYS Fluent on laminar flow past a cylinder, a classic benchmark with well-documented theory and experimental data.

## Method

- **Steady flow at Re = 40**, then **unsteady flow** with vortex shedding (von Kármán street).
- **Sensitivity studies** on the mesh and the domain size, each with 3 runs before and 3 after the optimum. They gave an optimal mesh of **10,082 elements** and an optimal domain size of **200 m**.
- **Parametric study** of the drag coefficient for Reynolds numbers from 0.1 to 20, compared with theoretical values.

## Results

In the unsteady regime, the **Strouhal number St = 0.2**, taken from the lift oscillation, matches experimental data.

| Re | Cd simulated | Cd theoretical | Error |
| ---: | ---: | ---: | ---: |
| 0.1 | 61.82 | 59.0 | 4.7 % |
| 5 | 3.93 | 3.90 | 0.8 % |
| 9 | 2.90 | 2.90 | 0.1 % |
| 14 | 2.35 | 2.33 | 0.7 % |
| 20 | 2.00 | 2.00 | 0.05 % |

All cases are within the 5 % target, and four out of five are under 1 %.

## Key takeaway

A validation case is only convincing if the mesh and domain are shown not to drive the result. Doing the sensitivity studies first made the comparison with theory meaningful.
