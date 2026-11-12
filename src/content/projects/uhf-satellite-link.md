---
title: UHF link between a satellite and a ground station
slug: uhf-satellite-link
summary: Design and sizing of a UHF satellite-to-ground link, with a full link budget and MATLAB simulations.
category: Space
tools: ["MATLAB", "Link budget", "UHF", "Satellite subsystems"]
context: Satellite Subsystems project with École Polytechnique
team: Course project # TODO Mathis: give the team size
period: Sep 2025 – May 2026
order: 9
cover: ../../assets/projects/uhf-satellite-link/uhf_link.svg
coverAlt: Schematic of a satellite in orbit linked to a ground station by a UHF beam
stats: [] # TODO Mathis: add 3–4 key figures from the link budget (e.g. frequency, free-space loss, link margin)
gallery: [] # TODO Mathis: add a MATLAB figure (e.g. margin vs. elevation) in src/assets/projects/uhf-satellite-link/
---

## Context & goal

As part of the Satellite Subsystems project run with École Polytechnique, I worked on the design of a UHF radio link between a satellite and a ground station. The goal was to size the link so that the ground station receives the signal with enough margin.

## Method

- **Link budget.** A full budget from transmitter to receiver: transmitted power, antenna gains, free-space and atmospheric losses, and the resulting margin.
- **MATLAB simulations** to size the link and test how the budget responds to the design choices.

<!-- TODO Mathis: describe the orbit / geometry assumptions and the main design choices (antennas, frequency, data rate). -->

## Results

<!-- TODO Mathis: add the link budget table (one row per term, in dB) and the final margin. Example Markdown table:

| Term | Value |
| --- | ---: |
| Transmitted power | … dBW |
| Free-space loss | … dB |
| Link margin | … dB |
-->

The link budget and the MATLAB sizing results will be published here.

## Key takeaway

<!-- TODO Mathis: one or two sentences on what you learned (e.g. which term dominates the budget). -->

A link budget turns a whole chain of subsystems into one number, the margin, which makes the trade-offs between power, antennas and losses explicit.
