---
layout: page
title: Recherche
permalink: /fr/projects/
lang: fr
alternate_url: /projects/
description: Axes de ma recherche doctorale sur la gestion des ressources radio et les jumeaux numériques sans fil.
nav: true
nav_order: 3
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    <div class="col">
      <a href="{{ '/fr/projects/1_project/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/pillar1_digital_twin.png" sizes="250px" alt="Jumeaux numériques pour les communications sans fil des réseaux électriques intelligents" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Jumeaux numériques pour les communications sans fil des réseaux électriques intelligents</h2>
            <p class="card-text">Détection des pannes et planification de la couverture avec l’appui de drones pour des communications IIoT résilientes.</p>
          </div>
        </div>
      </a>
    </div>
    <div class="col">
      <a href="{{ '/fr/projects/2_project/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/pillar2_nbiot_rrm.png" sizes="250px" alt="Gestion des ressources radio pour le NB-IoT et l’Internet industriel des objets" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Gestion des ressources radio pour le NB-IoT et l’Internet industriel des objets</h2>
            <p class="card-text">Optimisation conjointe de la puissance, de l’ordonnancement des sous-porteuses et du rayon des cellules dans les réseaux de microréseaux électriques à grande échelle.</p>
          </div>
        </div>
      </a>
    </div>
    <div class="col">
      <a href="{{ '/fr/projects/3_project/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/pillar3_uav_haps.png" sizes="250px" alt="Allocation des ressources tenant compte des risques dans les réseaux non terrestres de drones et de plateformes de haute altitude" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Allocation des ressources tenant compte des risques dans les réseaux non terrestres UAV/HAPS</h2>
            <p class="card-text">Gestion des interférences OFDMA et suivi des utilisateurs par filtre de Kalman lorsque leur position est incertaine.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
