---
layout: page
title: Jumeaux numériques pour les communications sans fil des réseaux électriques intelligents
permalink: /fr/projects/1_project/
lang: fr
alternate_url: /projects/1_project/
description: Détection des pannes et planification de la couverture avec l’appui de drones pour des communications IIoT résilientes dans les réseaux électriques intelligents.
img: assets/img/pillar1_digital_twin.png
related_publications: true
---

Ces travaux associent des **modèles de canaux fondés sur le lancer de rayons** à des **mécanismes d’allocation des ressources** pour détecter les pannes et planifier la couverture de la liaison montante avec l’appui de drones dans les réseaux sans fil d’intervention en cas de catastrophe. Le jumeau numérique constitue une représentation virtuelle du réseau physique en temps réel. Il permet de repérer les lacunes de couverture et de coordonner les opérations de rétablissement avant que le service ne se dégrade pour les utilisateurs.

**Ces travaux couvrent :**

- Le suivi en temps réel et la représentation de l’état des communications sans fil dans les réseaux électriques intelligents.
- La modélisation des canaux et la simulation de la propagation par lancer de rayons pour améliorer la précision des prédictions du jumeau numérique.
- Des algorithmes de détection des pannes exploitant les estimations d’état du jumeau numérique.
- Le rétablissement avec l’appui de drones : planification des trajectoires et allocation des ressources lors de pannes du réseau terrestre.
- Les interactions entre l’allocation des ressources dans le réseau physique et dans son jumeau numérique.

## Synchronisation du jumeau numérique après une catastrophe

Les dommages peuvent rendre obsolète la carte des canaux du jumeau numérique. Ces travaux optimisent conjointement les **mises à jour sélectives du jumeau, l’association des utilisateurs aux stations de base et la puissance en liaison montante** pour maximiser le débit moyen du moins bien servi des utilisateurs, sous contraintes de budget de mise à jour et de ressources radio. Une mémoire spatiale partagée réutilise les informations actualisées d’une cellule lors de visites ultérieures, sur un horizon post-catastrophe fixe.

La solution alterne les sous-problèmes et utilise l’approximation convexe successive pour l’allocation des ressources. Une politique de mise à jour s’appuie sur les trajectoires des utilisateurs ; l’autre exploite aussi la connaissance des canaux après la catastrophe. L’évaluation par lancer de rayons examine l’effet de l’incertitude de localisation sur la taille des cellules spatiales. L’[affiche du Symposium 3i](#symposium-3i) présente ces travaux dans le contexte des communications des équipes de terrain pour le rétablissement du réseau électrique.

**Quelques publications issues de ces travaux :**

- [<span lang="en">_Joint Digital Twin Synchronization Scheduling and Resource Allocation for Post-Disaster Wireless Networks_</span>](https://doi.org/10.1109/TNSM.2026.3714917) — <span lang="en">IEEE Transactions on Network and Service Management</span>, 2026.
- [<span lang="en">_Digital-Twin-Enabled Outage Detection and Uplink Availability Optimization With UAV Assistance_</span>](https://doi.org/10.1109/LCOMM.2026.3669035) — <span lang="en">IEEE Communications Letters</span>, 2026.
- [<span lang="en">_Digital Twinning in Smart Grid Networks: Interplay, Resource Allocation and Use Cases_</span>](https://doi.org/10.1109/MCOM.001.2200823) — <span lang="en">IEEE Communications Magazine</span>, 2023.

Il s’agit de la contribution centrale de ma thèse de doctorat, _« <span lang="en">Digital-Twin-Enabled and Risk-Aware Radio Resource Management for Resilient IIoT Smart Grid Communications</span> »_, qui a obtenu la mention « Excellent » à l’ÉTS en 2026.

<h2 id="symposium-3i">Présentation au Symposium 3i</h2>

J’ai présenté l’affiche _« <span lang="en">Supporting Grid Recovery Through Resilient Wireless Connectivity</span> »_ au **Symposium 3i d’Hydro-Québec**, tenu à l’IREQ, à Varennes, les **7 et 8 octobre 2026**.

<p>
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/symposium-3i-2026-poster.pdf' | relative_url }}" target="_blank" rel="noopener">Télécharger l’affiche (PDF)</a>
</p>

<div class="row justify-content-center my-4">
  <div class="col-12 col-md-8">
    {% include figure.liquid path="assets/img/symposium-3i-2026.webp" alt="Une personne à côté de l’affiche de recherche sur la connectivité sans fil résiliente au Symposium 3i" caption="Symposium 3i — IREQ, Varennes, les 7 et 8 octobre 2026." class="img-fluid rounded z-depth-1" width="1122" height="1402" zoomable=true avoid_scaling=true %}
  </div>
</div>
