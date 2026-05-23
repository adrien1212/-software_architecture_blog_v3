---
title: "Modularité"
sidebar_position: 40
displayed_sidebar: conceptsFondamentauxSidebar
---


:::ressources
- [Java Application Architecture: Modularity Patterns with Examples Using OSGi](https://www.oreilly.com/library/view/java-application-architecture/9780132874779/)
- 18 Modularity Patterns (pdf)
:::

Les notions de _module_ et de _modularité_ viennent compléter les concepts 
- [Low coupling, High Cohesion](../couplage_and_cohesion); Si les modules sont fortement couplés, la modification de l'un d'entre eux entraîne la modification des autres. Cela va à l'encontre de la raison d'être des modules. Un faible couplage permet de préserver la structure modulaire, ce qui facilite la maintenance et l'extension du système.
- [Single Responsibility Principle](../solid/single_responsibility); En suivant le SRP, vous obtenez naturellement une forte cohésion : chaque module est étroitement axé sur une seule préoccupation, ce qui les rend plus faciles à gérer.


De plus, dans ce chapitre nous nous appuierons sur plusieurs ouvrages :
- Chapitre 9 - *Modularity* du livre *Modern Software Engineering: Doing What Works to Build Better Software Faster*
- Chapitre 4 - *Modules Should Be Deep* du livre *A Philosophy of Software Design, 2nd Edition*
