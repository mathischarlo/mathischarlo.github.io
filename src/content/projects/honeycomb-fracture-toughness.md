---
title: Fracture toughness of a honeycomb lattice
slug: honeycomb-fracture-toughness
summary: Fracture toughness of a brittle honeycomb lattice from a MATLAB fuse-network model and a Williams series fit of the crack-tip field.
category: Structures & Materials
tools: ["MATLAB", "Fracture mechanics", "Williams series", "Fuse network"]
team: Project with a classmate
period: ESILV coursework # TODO Mathis: replace with the real period
order: 8
cover: ../../assets/projects/honeycomb-fracture-toughness/frac_kc.png
coverAlt: Plot of the fracture toughness Kc against crack-tip position, flat at about 1.56 MPa√m
stats:
  - value: "1.56 MPa√m"
    label: "Fracture toughness Kc, constant during propagation"
  - value: "96 × 48"
    label: "Honeycomb lattice under CT loading"
  - value: "n ≥ 9"
    label: "Williams terms needed for Kc to converge"
  - value: "d < 0.01"
    label: "Convergence criterion on the crack-tip position"
gallery:
  - src: ../../assets/projects/honeycomb-fracture-toughness/frac_field.png
    alt: 3D scatter plot of the displacement field around the crack in the honeycomb lattice, with the two crack faces opening in opposite directions
    caption: Displacement field around the crack, extracted from the lattice model.
  - src: ../../assets/projects/honeycomb-fracture-toughness/frac_kc.png
    alt: Two plots of Kc against crack-tip position, the left one flat at about 1.56 MPa√m, the right one zoomed in to show small oscillations between 1.5575 and 1.5625
    caption: Kc along the crack path (left) and zoomed in (right). The small oscillations come from the discrete bonds.
---

## Context & goal

Is fracture toughness really a material property when the material is a lattice of discrete bonds? With a classmate, I modelled crack propagation in a brittle honeycomb lattice and measured Kc along the crack path.

## Method

- **Model.** Electrical fuse-network analogy for a perfectly brittle solid: a 96 × 48 honeycomb lattice under compact tension (CT) loading, coded in MATLAB.
- **Extracting K.** The displacement field around the crack is fitted with the Williams series, including a super-singular term.
- **Crack-tip position.** The tip position is corrected iteratively until the correction d falls below 0.01.

## Results

- **Kc ≈ 1.56 MPa√m**, constant throughout propagation, which confirms that it behaves as an intrinsic property of the material.
- Kc converges once the fit uses **n ≥ 9 Williams terms**.
- The small oscillations in Kc come from the discrete nature of the bonds.

## Key takeaway

Correcting the crack-tip position, instead of assuming it, was the step that made Kc stable. In a fitting problem, the unknowns you fix by hand often matter as much as the ones you solve for.
