---
title: Formula SAE car aerodynamics
slug: fsae-aerodynamics
summary: Downforce and drag of a simplified Formula SAE car from 20 to 80 m/s, with a component-by-component breakdown in ANSYS Fluent.
category: CFD
tools: ["ANSYS Fluent", "RANS", "k-ω SST", "Poly-hexcore mesh"]
team: Group project
period: 2025–2026
order: 1
cover: ../../assets/projects/fsae-aerodynamics/fsae_stream.jpeg
coverAlt: Velocity-coloured pathlines over the Formula SAE car, with slower air in the wake of the rear wing
stats:
  - value: "−1.18"
    label: "Lift coefficient Cl at 20 m/s (downforce)"
  - value: "145 N"
    label: "Downforce at 20 m/s, for 110 N of drag"
  - value: "2.3 kN"
    label: "Downforce at 80 m/s, forces ×16.5 as V² predicts"
  - value: "454k"
    label: "Poly-hexcore cells, 1.1 million nodes"
charts:
  - title: Downforce by element at 20 m/s
    caption: Downforce computed on each element at 20 m/s. The full-car value is the net total on the whole vehicle, not the sum of the wings.
    unit: N
    series: ["Downforce"]
    data:
      - label: Rear wing
        values: [133]
      - label: Front wing
        values: [46]
      - label: Full car
        values: [145]
gallery:
  - src: ../../assets/projects/fsae-aerodynamics/fsae_stream.jpeg
    alt: Velocity magnitude pathlines around the Formula SAE car, from 0 to 34 m/s, showing flow over the wings and the low-speed wake behind the car
    caption: Velocity pathlines around the car. The wake behind the rear wing and wheels is clearly visible.
  - src: ../../assets/projects/fsae-aerodynamics/fsae_pressure.jpeg
    alt: Static pressure contour on the Formula SAE car at 20 m/s, with high pressure on the front wing and nose and low pressure on the wing undersides
    caption: Static pressure on the car surface at 20 m/s.
  - src: ../../assets/projects/fsae-aerodynamics/fsae_tke.jpeg
    alt: Pathlines coloured by turbulent kinetic energy, low upstream and rising in the wake of the wheels and rear wing
    caption: Turbulent kinetic energy along pathlines. Turbulence develops in the wake of the wheels and the rear wing.
---

## Context & goal

The goal was to quantify the downforce and drag of a simplified Formula SAE car (front and rear wings, chassis, wheels and suspension) at 20, 60 and 80 m/s, and to understand which element produces what.

## Method

- **Mesh.** Poly-hexcore mesh of 454,000 cells and 1.1 million nodes, with two Bodies of Influence (one around the car, one in the wake) and 5 inflation layers, the maximum the student licence allows.
- **Physics.** Pressure-based solver, steady RANS, k-ω SST turbulence model. Mach stays below 0.25, so the air is treated as incompressible.
- **Boundary conditions.** Moving ground at the flow speed and rotating wheels, to represent a car on track rather than in a fixed wind tunnel.
- **Checks.** Residuals, Cd and Cl monitors stable after about 100 iterations, and y+ in the logarithmic region, as the wall functions require.

## Results

At 20 m/s the car produces **Cl = −1.18** (downforce) and **Cd = 0.89**, an efficiency L/D of **1.32**. That is about **145 N of downforce and 110 N of drag**.

- The **rear wing** does most of the work: Cl = −1.08, more than 90 % of the downforce produced by the wings. It is also the main source of drag (Cd = 0.40).
- The **front wing** produces about 46 N of downforce.
- At **80 m/s**, the car produces about **2.3 kN of downforce and 1.8 kN of drag**. Forces grow by a factor of 16.5, as the V² law predicts, while Cd and Cl change by only 3 % and 0.8 %. That consistency is a good sign of a robust simulation.

The flow shows the expected physics: a Venturi effect between the front-wing flap and the ground, upwash behind the rear wing, and a turbulent wake. The centre of pressure sits at 2.4 m, towards the rear, which keeps the car stable.

## Key takeaway

Coefficients that barely move across a fourfold change in speed gave me confidence in the set-up. The breakdown by element also shows where to work next: the rear wing gives most of the grip but also most of the drag, so it is the first target for any efficiency gain.
