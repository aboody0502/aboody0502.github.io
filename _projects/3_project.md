---
lang: en
alternate_url: /fr/projects/3_project/
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

This is the third pillar of my Ph.D. thesis.

**Related published work:**

- UAV-assisted outage recovery: [_Digital-Twin-Enabled Outage Detection and Uplink Availability Optimization With UAV Assistance_](https://doi.org/10.1109/LCOMM.2026.3669035) — IEEE Communications Letters, 2026.
- Synchronization and resource allocation in post-disaster wireless networks: [_Joint Digital Twin Synchronization Scheduling and Resource Allocation for Post-Disaster Wireless Networks_](https://doi.org/10.1109/TNSM.2026.3714917) — IEEE Transactions on Network and Service Management, 2026. See the [digital-twin research page]({{ '/projects/1_project/' | relative_url }}) for this work.
