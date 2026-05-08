---
layout: page
title: Radio Resource Management for NB-IoT and Industrial-IoT
description: Joint power control, sub-carrier scheduling, and cell-radius planning for massive-device microgrid networks
img: assets/img/pillar2_nbiot_rrm.png
importance: 2
category: research
related_publications: true
---

Designing scalable **radio-resource-management algorithms** for next-generation NB-IoT and industrial-IoT networks supporting smart-grid devices. The challenge: distributed energy resources (DERs) and grid-edge devices place asymmetric, bursty traffic on coverage-constrained networks. Coverage enhancement is a defining feature of NB-IoT — but using it well at scale is non-trivial.

**Key contributions:**

- A **three-step optimization framework** for joint power control, sub-carrier scheduling, and coverage-enhancement-radius planning
- **Difference-of-convex (DC) decomposition** to address the highly non-convex power control subproblem
- **Distributed multi-armed-bandit-based** algorithms for cell-radius optimization across base stations
- **Mixed-integer nonlinear programming** for network compression and scheduling coordination
- Performance demonstrated against genetic algorithm baselines and pure MINLP solutions on massive-microgrid scenarios

**Selected publications:**

- *Joint Optimization of Radio Resources and Coverage Enhancement in Massive Microgrid Networks* — IEEE Transactions on Network and Service Management, 2023
- *On the Convergence of Transmission Power Control in Multi-Microgrid Systems* — IWCMC 2025

This pillar of my thesis directly addresses one of the open challenges in scaling smart-grid wireless networks beyond pilot deployments — how to coordinate massive numbers of energy-resource devices on coverage-limited spectrum without breaking real-time service guarantees.
