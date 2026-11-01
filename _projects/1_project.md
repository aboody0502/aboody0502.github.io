---
lang: en
alternate_url: /fr/projects/1_project/
layout: page
title: Digital-Twin Frameworks for Wireless Smart Grids
description: Outage detection and UAV-assisted coverage planning for resilient IIoT smart-grid communications
img: assets/img/pillar1_digital_twin.png
importance: 1
category: research
related_publications: true
---

Coupling **ray-traced channel models** with **resource-allocation logic** to detect outages and plan UAV-assisted uplink coverage for disaster-response wireless networks. The digital twin acts as a real-time virtual representation of the physical network, allowing proactive identification of coverage gaps and orchestration of recovery operations before user-side service degrades.

**What the work covers:**

- Real-time monitoring and abstraction of wireless smart-grid network state
- Channel modeling and ray-traced propagation simulation for accurate digital-twin prediction
- Outage detection algorithms operating on twin-side state estimates
- UAV-assisted recovery: trajectory and resource allocation planning when terrestrial outages occur
- Resource allocation interplay between physical and twin layers

## Digital-twin synchronization after a disaster

Disaster damage can make the twin's channel map stale. This work jointly schedules **selective twin updates, user–base station association, and uplink power control** to maximize the worst user's time-averaged rate under update budgets and radio-resource limits. Shared spatial memory reuses refreshed cell information across user visits during a fixed post-disaster horizon.

An alternating solution uses successive convex approximation for resource allocation. One update policy uses user trajectories; the other also uses post-disaster channel knowledge. Evaluation with ray-traced channels examines the effect of positioning uncertainty on spatial cell size. The [Symposium 3i poster](#symposium-3i) presents this synchronization work in the context of field-report connectivity for grid recovery.

**Selected publications from this work:**

- [_Joint Digital Twin Synchronization Scheduling and Resource Allocation for Post-Disaster Wireless Networks_](https://doi.org/10.1109/TNSM.2026.3714917) — IEEE Transactions on Network and Service Management, 2026
- [_Digital-Twin-Enabled Outage Detection and Uplink Availability Optimization With UAV Assistance_](https://doi.org/10.1109/LCOMM.2026.3669035) — IEEE Communications Letters, 2026
- [_Digital Twinning in Smart Grid Networks: Interplay, Resource Allocation and Use Cases_](https://doi.org/10.1109/MCOM.001.2200823) — IEEE Communications Magazine, 2023

This was the central contribution of my Ph.D. thesis, _"Digital-Twin-Enabled and Risk-Aware Radio Resource Management for Resilient IIoT Smart Grid Communications,"_ which received Mention Excellent at ÉTS in 2026.

<h2 id="symposium-3i">Presentation at Symposium 3i</h2>

I presented the poster _"Supporting Grid Recovery Through Resilient Wireless Connectivity"_ at **Hydro-Québec’s Symposium 3i**, held at IREQ in Varennes on **October 7–8, 2026**.

<p>
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/symposium-3i-2026-poster.pdf' | relative_url }}" target="_blank" rel="noopener">Download poster (PDF)</a>
</p>

<div class="row justify-content-center my-4">
  <div class="col-12 col-md-8">
    {% include figure.liquid path="assets/img/symposium-3i-2026.webp" alt="A person beside the research poster on resilient wireless connectivity at Symposium 3i" caption="Symposium 3i — IREQ, Varennes, October 7–8, 2026." class="img-fluid rounded z-depth-1" width="1122" height="1402" zoomable=true avoid_scaling=true %}
  </div>
</div>
