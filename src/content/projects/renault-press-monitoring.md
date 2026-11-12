---
title: Press force monitoring dashboard
slug: renault-press-monitoring
summary: A real-time tool to spot production drift and tool-wear risk on stamping presses, built from scratch during my Renault Group internship.
category: Industry
tools: ["Python", "FastAPI", "React", "Random Forest", "XGBoost"]
context: Internship, Renault Group, Tangier plant (stamping)
team: Individual
period: Apr – Jul 2026
order: 3
confidential: true
cover: ../../assets/projects/renault-press-monitoring/renault_plant.jpeg
coverAlt: Aerial view of the Renault Group Tangier plant with the "Renault Group, Usine de Tanger" lettering on a hillside
coverIsPhoto: true
# logo: ../../assets/projects/renault-press-monitoring/renault-group-logo.svg  # TODO Mathis: add the official logo file, then uncomment
# logoAlt: Renault Group
stats:
  - value: "6"
    label: "Presses simulated in parallel with realistic signals"
  - value: "2"
    label: "ML models studied for predictive maintenance"
  - value: "1"
    label: "Production line equipped, with documentation"
gallery:
  - src: ../../assets/projects/renault-press-monitoring/renault_plant.jpeg
    alt: Aerial view of the Renault Group Tangier plant, with rows of finished cars and the plant name written on a hillside
    caption: The Renault Group plant in Tangier, Morocco, where I spent my internship in the stamping department.
---

## Context & goal

In the stamping department of the Renault Group plant in Tangier, press forces are a direct signal of production drift and tool wear. My mission was to build, from scratch and with no prior web development experience, a real-time tool that makes those risks visible to the engineers on the line.

<p class="note">The tool and its data are confidential: this page describes the approach, without screenshots or production figures.</p>

## Method

- **Stack.** Python FastAPI backend and React frontend.
- **Features.** Colour-coded overview of the presses, real-time forces per sensor, alarms per tool and per operation sequence, an intervention log, and data export.
- **Data strategy.** Some sensors were faulty and access to production data was restricted, so I generated realistic simulated signals for 6 presses in parallel to build and test the tool.
- **Predictive maintenance.** I studied Random Forest and XGBoost for tool-wear detection and failure prediction, including the constraints of integrating them with the plant's industrial controllers.

## Results

The tool was tested by the plant engineers and delivered, with its documentation, for one production line.

## Key takeaway

When real data is missing, a credible simulated signal lets you build and test the whole chain before the sensors are fixed. Learning a web stack from zero was the means; giving engineers a tool they actually use was the goal.
