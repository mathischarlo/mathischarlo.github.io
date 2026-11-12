---
title: "S355 steel: tensile test and fracture simulation"
slug: s355-tensile-fracture
summary: Lab tensile test of S355 steel turned into an Abaqus/Explicit ductile damage model, with a mesh study on fracture prediction.
category: Structures & Materials
tools: ["Abaqus/Explicit", "Tensile testing", "Ductile damage", "Element deletion"]
context: Materials & Behaviour course
team: Course project # TODO Mathis: give the team size (e.g. "Team of 3")
period: ESILV coursework # TODO Mathis: replace with the real period
order: 5
cover: ../../assets/projects/s355-tensile-fracture/s355_broken.png
coverAlt: Von Mises stress on the broken S355 tensile specimen in Abaqus, after fracture in the necked region
stats:
  - value: "375 MPa"
    label: "Yield strength (0.2 % offset), above the 355 MPa nominal"
  - value: "528 MPa"
    label: "True ultimate tensile strength"
  - value: "0.40"
    label: "Strain at fracture captured with a 1 mm mesh"
  - value: "1 mm"
    label: "Element size needed to predict fracture"
gallery:
  - src: ../../assets/projects/s355-tensile-fracture/s355_curve.png
    alt: True stress-strain curve of the S355 specimen with the elastic slope, the 0.2 % offset line and the elastic recovery at fracture
    caption: True stress-strain curve used for the simulation, with the 0.2 % offset construction.
  - src: ../../assets/projects/s355-tensile-fracture/s355_sketch.jpg
    alt: Hand-drawn sketch of the tensile specimen before and after testing, with dimensions and cross-sections showing the reduced diameter after necking
    caption: Specimen before and after the test, with measured dimensions.
  - src: ../../assets/projects/s355-tensile-fracture/s355_broken.png
    alt: Abaqus/Explicit model of the specimen split in two, coloured by Von Mises stress after fracture
    caption: Von Mises stress after fracture (Abaqus/Explicit).
  - src: ../../assets/projects/s355-tensile-fracture/s355_fracture.png
    alt: Close-up of the necked region in the Abaqus model, with deleted elements forming the crack and Von Mises stress up to about 455 MPa
    caption: Crack forming in the necking zone through element deletion.
---

## Context & goal

Starting from a real tensile test on an S355 steel specimen, the aim was to build a finite-element model able to reproduce the test up to fracture, and to find out what the model needs to predict fracture reliably.

## Method

**Lab test.** I converted the force-displacement data to true stress and true strain. Results: **yield strength 375 MPa** (0.2 % offset method, above the 355 MPa nominal value), **true UTS 528 MPa**, and an elongation at fracture of about 17.6 mm, a clearly ductile behaviour.

**A measurement I chose not to trust.** The measured Young's modulus came out at **13.6 GPa**, far from the expected 210 GPa. Without an extensometer, the machine's own compliance was distorting the measurement. I used the theoretical value in the model instead of the measured one.

**Simulation (Abaqus/Explicit).**

- Material: elastic law, tabulated plasticity, and ductile damage with damage evolution and element deletion.
- Boundary conditions: one end clamped, displacement imposed on the other through a reference point.
- Parametric studies on loading amplitude, step time and element size.

## Results

Element size controls the fracture prediction:

| Element size | Strain at fracture | Behaviour |
| ---: | ---: | --- |
| 3 mm | 0.22 | Fractures too early |
| 2 mm | 0.22 | Fractures too early |
| 1 mm | 0.40 | Captures necking, consistent with S355 |

**Recommendation:** a 3 mm mesh is enough for elastic sizing; a 1 mm mesh is needed to predict fracture.

## Key takeaway

A test result is only as good as the measurement chain. Spotting that the modulus was a machine artefact, and not a material property, kept a wrong number out of the model. The mesh study then showed that "converged" depends on the question: stiffness and fracture do not need the same mesh.
