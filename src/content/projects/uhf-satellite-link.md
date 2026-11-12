---
title: UHF LoRa link for a PocketQube satellite
slug: uhf-satellite-link
summary: Communication subsystem of a 5 cm PocketQube in LEO, from technology trade-off to link budget, Doppler and pointing simulations.
category: Space
tools: ["MATLAB", "Link budget", "LoRa / UHF 868 MHz", "Gpredict", "OpenSCAD"]
context: Satellite Subsystems project, ESILV × École Polytechnique
team: Team of 5
period: Sep 2025 – May 2026
order: 9
cover: ../../assets/projects/uhf-satellite-link/pocketqube_cad.png
coverAlt: OpenSCAD model of the 5 cm PocketQube satellite with its UHF antenna deployed above the cube
stats:
  - value: "+22.7 dB"
    label: "Link margin at nadir (400 km slant range)"
  - value: "+8.8 dB"
    label: "Margin still positive near the horizon (2,000 km)"
  - value: "37°"
    label: "Ground antenna mispointing tolerated while keeping +20 dB"
  - value: "±22 kHz"
    label: "Maximum Doppler shift, which rules out the 125 kHz LoRa bandwidth"
charts:
  - title: Link margin vs slant range
    caption: "Simulated link margin for the nominal configuration (+22 dBm transmit power, 12 dBi ground Yagi, no mispointing). The design objective is +20 dB; reception remains possible down to 0 dB."
    unit: dB
    series: ["Link margin"]
    data:
      - label: 400 km (nadir)
        values: [22.7]
      - label: 1,000 km
        values: [14.8]
      - label: 2,000 km (≈5°)
        values: [8.8]
gallery:
  - src: ../../assets/projects/uhf-satellite-link/pocketqube_cad.png
    alt: OpenSCAD model of the 1P PocketQube, a 5 cm cube with solar panels on top and the 8.6 cm UHF antenna deployed vertically
    caption: OpenSCAD model of the 1P PocketQube (5 × 5 × 5 cm) with the 8.6 cm UHF antenna deployed. For launch, the antenna folds into a groove on the side of the cube.
  - src: ../../assets/projects/uhf-satellite-link/link_budget_distance.png
    alt: Two plots against slant range from 250 to 2,000 km, received power on the left and link margin on the right, for three ground antenna and spreading factor configurations, all decreasing with distance
    caption: Dynamic link budget. Received power and link margin against slant range for three ground antenna / spreading factor configurations (labels in French).
  - src: ../../assets/projects/uhf-satellite-link/margin_elevation.png
    alt: Link margin against elevation angle from 5 to 90 degrees for three configurations; the 15 dBi Yagi with SF12 crosses the +20 dB objective at about 25 degrees, SF9 stays below it
    caption: Link margin against elevation angle. With a 15 dBi Yagi and SF12, the margin exceeds the +20 dB objective from about 25° elevation; SF9 never reaches it.
  - src: ../../assets/projects/uhf-satellite-link/doppler_bw250.png
    alt: Doppler shift against elevation angle across a pass, reaching about 22 kHz at low elevation, inside the ±25 kHz tolerance band of the 250 kHz bandwidth
    caption: Doppler shift across a pass for the 250 kHz LoRa bandwidth. At 10° elevation the shift (−21.86 kHz) stays inside the ±25 kHz tolerance.
  - src: ../../assets/projects/uhf-satellite-link/mispointing_400km.png
    alt: Interactive MATLAB app with sliders; left plot shows link margin against antenna mispointing at 400 km, staying above +20 dB up to 37 degrees; right plot shows margin against distance for four mispointing angles
    caption: Interactive MATLAB tool. Margin against ground antenna mispointing at 400 km (left) and against distance for four mispointing angles (right); sliders set range, mispointing, transmit power and ground gain.
---

## Context & goal

This project was a collaboration between ESILV and École Polytechnique on a **1P PocketQube**: a 5 × 5 × 5 cm satellite (AlbaOrbital standard) aimed at a low Earth orbit of about 400 km. École Polytechnique handled propulsion and system architecture; ESILV handled the on-board computer and the communication subsystem.

Our team of five was responsible for the **communication subsystem**: a reliable two-way radio link between the satellite and a single ground station at ESILV, within the very tight volume, mass and power limits of a 1P platform.

## Method

**1. Technology trade-off.** We compared five ways to bridge a 400 km LEO link against the constraints of the platform. Optical links need pointing far beyond what a 1P attitude control can do, and a relay modem draws more current than the battery allows:

| Technology | Limiting factor | Decision |
| --- | --- | --- |
| Optical (Li-Fi) | Needs < 0.1° pointing | No |
| Relay (Iridium) | 1.5 A peak current | No |
| VHF, 145 MHz | ≈50 cm antenna to stow | Maybe |
| S-band, 2.4 GHz | +15 dB path loss, narrow beam | Maybe |
| **UHF, 868 MHz** | **8.6 cm antenna, balanced budget** | **Selected** |

**2. Modulation and hardware.** LoRa (chirp spread spectrum) beat FSK: it can decode signals below the noise floor and tolerates Doppler shift, at the cost of a lower data rate. We selected the **EBYTE E22-900M22S** module (Semtech SX1262): +22 dBm output, 14 × 20 mm, small enough for the 42 × 42 mm PCB of the structure.

**3. Mechanical integration.** An OpenSCAD model checks that everything fits: the 8.6 cm quarter-wave antenna folds into a groove on the side of the cube during launch.

**4. Static link budget**, at a worst-case slant range of 600 km (about 40° elevation):

| Term | Value |
| --- | ---: |
| Transmit power (E22, SX1262) | +22 dBm |
| Satellite antenna gain (quarter-wave, conservative) | 0 dBi |
| Ground antenna gain (Yagi at ESILV) | +12 dBi |
| Free-space path loss (600 km, 868 MHz) | −146.8 dB |
| Miscellaneous losses (cables, connectors, polarisation) | −5 dB |
| **Received power** | **−117.8 dBm** |
| Receiver sensitivity (SF12, 125 kHz) | −137 dBm |
| **Link margin** | **+19.2 dB** |

**5. Simulations.** We built an interactive MATLAB tool to explore the link over a full pass: margin against slant range and elevation, Doppler shift for three LoRa bandwidths, ground antenna mispointing, and the effect of transmit power and ground antenna gain. We then cross-checked the path-loss model with the Gpredict orbital tracking software.

## Results

**Margin across a pass** (nominal configuration: +22 dBm, 12 dBi Yagi, no mispointing):

| Slant range | Path loss | Received power | Margin |
| ---: | ---: | ---: | ---: |
| 400 km (nadir) | 143.3 dB | −114.3 dBm | +22.7 dB |
| 1,000 km | 151.2 dB | −122.2 dBm | +14.8 dB |
| 2,000 km (≈5° elevation) | 157.2 dB | −128.2 dBm | +8.8 dB |

The link stays positive over the whole pass, and meets the +20 dB design objective near the top of the pass.

- **Doppler.** At 7.67 km/s, the shift reaches about ±22 kHz. The 125 kHz LoRa bandwidth (±12.5 kHz tolerance) loses the signal at low elevation; **250 kHz is the recommended compromise**, within tolerance from 10° elevation; 500 kHz covers every elevation.
- **Pointing.** At 400 km, the ground Yagi can be off by up to **37°** while keeping +20 dB of margin, which makes manual tracking realistic.
- **Power and antenna.** With an omnidirectional 2 dBi ground antenna and a reduced 16 dBm transmit power, the margin falls to +7.9 dB even at 350 km; with the 12 dBi Yagi at the same power, +17.9 dB. Both the full +22 dBm and a Yagi of at least 12 dBi are needed to meet the objective.
- **Cross-validation.** Gpredict gave the live geometry of a comparable satellite (AeroCube 6B) at 1,248 km slant range. Rescaled to 868 MHz, its path loss is 152.9 dB, consistent with our model (151.2 dB at 1,000 km).

## Key takeaway

A link budget at a single distance hides most of the story: across one pass the margin moves by about 14 dB, and the horizon is where the link is fragile. Simulating the whole pass also showed that the narrowest LoRa bandwidth fails because of Doppler, not because of power, which no static budget would have revealed.
