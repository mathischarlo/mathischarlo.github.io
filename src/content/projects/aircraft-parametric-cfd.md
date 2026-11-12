---
title: Flow over an aircraft, parametric CFD study
slug: aircraft-parametric-cfd
summary: Sixteen compressible RANS runs to rank the effect of Mach number, altitude, incidence and turbulence model on lift and drag.
category: CFD
tools: ["ANSYS Fluent", "Spalart-Allmaras", "k-ω SST", "Compressible flow"]
team: Individual
period: 2025–2026
order: 2
cover: ../../assets/projects/aircraft-parametric-cfd/air_vectors.png
coverAlt: Velocity vectors coloured by Mach number around an aircraft half-model
stats:
  - value: "16"
    label: "Steady compressible simulations (8 cases × 2 turbulence models)"
  - value: "+79.6 %"
    label: "Lift coefficient increase from Mach 0.41 to 0.65"
  - value: "< 0.5 %"
    label: "Lift difference between turbulence models"
  - value: "21 %"
    label: "Drag difference between turbulence models"
charts:
  - title: Change in Cl and Cd for each parameter
    caption: Relative change of the lift and drag coefficients when each parameter moves from its baseline value (Mach 0.41, 20,000 ft, 0°) to its second value.
    unit: "%"
    series: ["Cl", "Cd"]
    data:
      - label: Mach 0.41 → 0.65
        values: [79.6, 87.5]
      - label: 20k → 30k ft
        values: [4.4, 3.6]
      - label: Incidence 0° → 5°
        values: [1.7, 0.2]
gallery:
  - src: ../../assets/projects/aircraft-parametric-cfd/air_vectors.png
    alt: Velocity vectors around the aircraft half-model, coloured by Mach number from about 0.30 to 0.45
    caption: Velocity vectors coloured by Mach number.
  - src: ../../assets/projects/aircraft-parametric-cfd/air_pressure.png
    alt: Static pressure contour on the aircraft half-model, with the highest pressure at the nose
    caption: Static pressure on the aircraft surface.
  - src: ../../assets/projects/aircraft-parametric-cfd/air_mesh.png
    alt: Cross-section of the spherical enclosure mesh, with cells refined towards the aircraft at the centre
    caption: Mesh of the spherical enclosure, refined around the aircraft (496,000 elements).
---

## Context & goal

How much does each flight parameter actually change the aerodynamic coefficients of an aircraft, and how much does the answer depend on the turbulence model? I set up a small design of experiments to answer both questions with the same mesh.

## Method

- **Design of experiments.** Mach 0.41 and 0.65, incidence 0° and 5°, altitude 20,000 and 30,000 ft: 8 cases, each run with two turbulence models (Spalart-Allmaras and k-ω SST), so **16 steady, compressible simulations** with air as an ideal gas.
- **Mesh.** Half-model with a symmetry plane in a spherical enclosure, 496,000 elements, sized to stay under the student licence limit.

## Results

Change in the coefficients relative to the baseline case:

| Parameter change | ΔCl | ΔCd |
| --- | ---: | ---: |
| Mach 0.41 → 0.65 | +79.6 % | +87.5 % |
| Altitude 20,000 → 30,000 ft | +4.4 % | +3.6 % |
| Incidence 0° → 5° | +1.7 % | +0.2 % |

- **Mach number** dominates. The increase in both coefficients shows that compressibility matters more and more as the aircraft speeds up.
- **Altitude** has a secondary but measurable effect.
- **Incidence** has a surprisingly small effect. I did not take this at face value: I examined it critically in terms of the quasi-linear range of incidence, the geometry and the mesh.

**Turbulence models.** Lift differs by less than 0.5 % between Spalart-Allmaras and k-ω SST, but drag differs by 21 % (37.0 N against 29.3 N).

## Key takeaway

Lift is robust to the choice of turbulence model; drag is not, because it depends heavily on how the flow near the wall is treated. When drag matters, the turbulence model and near-wall resolution have to be justified, not picked by default.
