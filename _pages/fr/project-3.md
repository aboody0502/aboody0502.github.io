---
layout: page
title: Allocation des ressources tenant compte des risques dans les réseaux non terrestres UAV/HAPS
permalink: /fr/projects/3_project/
lang: fr
alternate_url: /projects/3_project/
description: Gestion des interférences OFDMA et suivi des utilisateurs par filtre de Kalman en présence d’incertitudes sur leur position.
img: assets/img/pillar3_uav_haps.png
related_publications: true
---

Ces travaux portent sur la conception de **mécanismes de gestion des interférences OFDMA** pour les réseaux de drones (UAV) et de plateformes de haute altitude (HAPS), dans lesquels les utilisateurs sont mobiles et leur position est estimée avec une certaine incertitude. Ils comprennent également une **optimisation écoénergétique des trajectoires et de la puissance des drones**, qui respecte les objectifs de rapport signal sur interférences et bruit (SINR), même en présence de fortes interférences impulsionnelles.

**Enjeux :**

Les réseaux non terrestres, notamment les drones et les HAPS, jouent un rôle central dans l’extension de la couverture de la 6G. Toutefois, la liaison entre une station de base aérienne et les utilisateurs au sol est plus difficile à gérer que dans un réseau cellulaire terrestre : pertes de propagation très variables, bruit impulsionnel important d’origine industrielle et connaissance seulement probabiliste de la position des utilisateurs. Les mécanismes classiques de gestion des interférences conçus pour les réseaux terrestres ne prennent pas en compte l’ensemble de ces contraintes.

**Principales contributions :**

- Une couche de **suivi des utilisateurs par filtre de Kalman**, intégrée à l’ordonnanceur OFDMA, qui maintient les interférences co-canal sous les seuils des liaisons, même lorsque la position des utilisateurs est soumise à des bornes d’incertitude.
- Un **contrôleur écoénergétique de trajectoire et de puissance des drones**, associant un suivi robuste des utilisateurs à des marges d’interférence établies à partir des données.
- Des **marges tenant compte des risques, fondées sur la CVaR**, pour l’allocation de puissance en présence de fortes interférences impulsionnelles.
- Une conception adaptée aux déploiements autonomes de drones comme aux architectures hybrides UAV/HAPS pour le réseau de collecte.

Il s’agit du troisième axe de ma thèse de doctorat.

**Travaux publiés connexes :**

- Rétablissement avec l’appui de drones : [<span lang="en">_Digital-Twin-Enabled Outage Detection and Uplink Availability Optimization With UAV Assistance_</span>](https://doi.org/10.1109/LCOMM.2026.3669035) — <span lang="en">IEEE Communications Letters</span>, 2026.
- Synchronisation et allocation des ressources dans les réseaux sans fil après une catastrophe : [<span lang="en">_Joint Digital Twin Synchronization Scheduling and Resource Allocation for Post-Disaster Wireless Networks_</span>](https://doi.org/10.1109/TNSM.2026.3714917) — <span lang="en">IEEE Transactions on Network and Service Management</span>, 2026. Voir la [page de recherche sur les jumeaux numériques]({{ '/fr/projects/1_project/' | relative_url }}) pour ces travaux.
