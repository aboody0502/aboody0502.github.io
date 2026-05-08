---
layout: page
title: Risk-Aware Resource Allocation in UAV / HAPS Non-Terrestrial Networks
description: OFDMA interference management with Kalman-filter-based user tracking under position uncertainty
img: assets/img/pillar3_uav_haps.png
importance: 3
category: research
related_publications: true
---

Designing **OFDMA interference-management** schemes for UAV and high-altitude-platform (HAPS) networks where users are mobile and their positions are estimated under uncertainty. Combined with **energy-efficient UAV trajectory and power control** that meets SINR targets even under heavy impulsive interference.

**Why this matters:**

Non-terrestrial networks (UAVs, HAPS) are central to 6G coverage extension — but the link from a flying base station to ground users is harder to manage than terrestrial cellular: high path-loss variability, strong impulsive noise from industrial sources, and only probabilistic estimates of where the user actually is at any moment. Conventional interference management built for terrestrial cellular doesn't account for these.

**Key contributions:**

- **Kalman-filter-based user tracking** layer integrated with OFDMA scheduler, keeping co-channel interference safely below link thresholds even under position-uncertainty bounds
- **Energy-efficient UAV trajectory + power controller** combining robust user tracking with data-driven interference margins
- **Risk-aware (CVaR-based) margins** for power allocation under heavy impulsive interference
- Designed for both standalone UAV deployments and UAV+HAPS hybrid backhaul scenarios

This is the third pillar of my Ph.D. thesis. Several papers from this work are currently under review at IEEE journals (TNSM, Comm. Letters, Wireless Comm. Letters, TVT) — links will be added once published.
