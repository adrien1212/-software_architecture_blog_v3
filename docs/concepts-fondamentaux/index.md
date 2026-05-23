---
title: "Introduction"
sidebar_position: 1
displayed_sidebar: conceptsFondamentauxSidebar
slug: /concepts-fondamentaux
---

Ce chapitre pose les bases de conception qui reviennent partout en architecture logicielle.
L'objectif n'est pas seulement de donner des définitions, mais de comprendre en quoi ces notions nous aident à construire des logiciels plus simples à faire évoluer.
Ces concepts sont également intemporels : ils restent pertinents quels que soient le langage, le framework ou le style d'architecture utilisé.
Les outils évoluent vite, mais les problèmes de complexité, de couplage et de compréhension restent les mêmes.

Nous allons distinguer deux grandes familles de concepts :

- les **attributs** d'un système de qualité, comme la [Modularité](/docs/concepts-fondamentaux/modularity/) et le couple [Faible Couplage / Forte Cohésion](/docs/concepts-fondamentaux/couplage_and_cohesion/)
- les **techniques de conception** qui permettent d'obtenir ces attributs, comme [Abstraction / Information Hiding](/docs/concepts-fondamentaux/aei/) et [Separation of Concerns](/docs/concepts-fondamentaux/separation_of_concern/)

Autrement dit :

- la modularité, le couplage et la cohésion décrivent plutôt **le résultat recherché**
- l'abstraction et la séparation des responsabilités décrivent plutôt **les moyens d'y parvenir**

## Ce que vous allez apprendre

À la fin de cette partie, vous devriez être capable de :

- expliquer pourquoi certains systèmes sont faciles à modifier alors que d'autres deviennent rapidement fragiles
- identifier les principales causes de complexité dans un code ou une architecture
- relier des notions parfois étudiées séparément mais qui poursuivent en réalité le même objectif
- mieux justifier des décisions de conception avec un vocabulaire commun

## Pourquoi ces concepts ?

Ces concepts sont fondamentaux car ils permettent de réduire le couplage dans notre système et donc sa [complexité](/docs/concepts-fondamentaux/complexity/).

Quand le couplage est trop fort :

- un petit changement oblige à modifier plusieurs endroits
- comprendre une fonctionnalité demande de naviguer dans tout le système
- une évolution locale peut casser un comportement ailleurs

À l'inverse, quand un système est bien découpé, il devient plus simple à comprendre, à tester, à faire évoluer et à maintenir dans le temps. Cette réduction de complexité a un impact direct sur la vitesse et l'efficacité avec lesquelles une équipe peut progresser, mais aussi sur la fiabilité et l'évolutivité du logiciel.

> The real reason why attributes of our systems like modularity and cohesion and
techniques like abstraction and separation of concerns matter is because they
help us to reduce the coupling in our systems. This reduction has a direct impact
on the speed and efficiency with which we can make progress and on the
scalability and reliability of both our software and our organizations.

En résumé, ce chapitre répond à deux questions :

- **Pourquoi** certains choix de conception améliorent durablement la qualité d'un système
- **Comment** utiliser ces concepts pour construire un logiciel plus lisible, plus robuste et plus facile à faire évoluer
