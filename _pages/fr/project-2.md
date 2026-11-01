---
layout: page
title: Gestion des ressources radio pour le NB-IoT et l’Internet industriel des objets
permalink: /fr/projects/2_project/
lang: fr
alternate_url: /projects/2_project/
description: Optimisation conjointe de la puissance, de l’ordonnancement des sous-porteuses et du rayon des cellules pour les réseaux de microréseaux électriques comptant un grand nombre d’appareils.
img: assets/img/pillar2_nbiot_rrm.png
related_publications: true
---

Ces travaux visent à concevoir des **algorithmes de gestion des ressources radio capables de passer à l’échelle** pour les réseaux NB-IoT et d’Internet industriel des objets de prochaine génération, au service des réseaux électriques intelligents. Les ressources énergétiques distribuées (DER) et les équipements en périphérie du réseau produisent un trafic asymétrique et irrégulier dans des réseaux à couverture limitée. L’amélioration de la couverture est une caractéristique essentielle du NB-IoT, mais son exploitation à grande échelle pose des défis importants.

**Principales contributions :**

- Un **cadre d’optimisation en trois étapes** pour le contrôle conjoint de la puissance, l’ordonnancement des sous-porteuses et la planification du rayon d’amélioration de la couverture.
- Une **décomposition en différence de fonctions convexes (DC)** pour résoudre le sous-problème fortement non convexe du contrôle de puissance.
- Des **algorithmes distribués fondés sur les bandits à plusieurs bras** pour optimiser le rayon des cellules entre les stations de base.
- La **programmation non linéaire en nombres entiers mixtes (MINLP)** pour la compression du réseau et la coordination de l’ordonnancement.
- Une évaluation des performances par rapport à des algorithmes génétiques de référence et à des solutions exclusivement fondées sur la MINLP, dans des scénarios de microréseaux électriques à grande échelle.

**Quelques publications :**

- [<span lang="en">_Joint Optimization of Radio Resources and Coverage Enhancement in Massive Microgrid Networks_</span>](https://doi.org/10.1109/TNSM.2023.3320517) — <span lang="en">IEEE Transactions on Network and Service Management</span>, 2024.
- [<span lang="en">_On the Convergence of Transmission Power Control in Multi-Microgrid Systems_</span>](https://doi.org/10.1109/IWCMC65282.2025.11059449) — IWCMC 2025.

Cet axe de ma thèse répond directement à un défi du déploiement à grande échelle des communications sans fil pour les réseaux électriques intelligents : coordonner un très grand nombre d’équipements énergétiques sur un spectre offrant une couverture limitée, tout en respectant les garanties de service en temps réel.
