---
title: "Abstraction/Encapsulation"
sidebar_position: 5
displayed_sidebar: conceptsFondamentauxSidebar
---


:::ressources
- [Edward V. Berard - Abstraction, Encapsulation, and Information Hiding](https://web.archive.org/web/20071214085409/http://www.itmweb.com/essay550.htm)
- [Abstraction VS Information Hiding VS Encapsulation](https://stackoverflow.com/questions/24626/abstraction-vs-information-hiding-vs-encapsulation)
:::

> **Abstraction and encapsulation are complementary** concepts: abstraction focuses on the observable behavior of an object... encapsulation focuses upon the implementation that gives rise to this behavior... **encapsulation is most often achieved through information hiding**, which is the process of hiding all of the secrets of object that do not contribute to its essential characteristics.

> Abstraction, information hiding, and encapsulation are very different, but highly-related, concepts. One could argue that **abstraction is a technique that help us identify which specific information should be visible**, and which information should be hidden. **Encapsulation is then the technique for packaging the information** in such a way as to hide what should be hidden, and make visible what is intended to be visible.

D'après les deux citations précédentes nous pouvons dire :
- L'abstraction permet à l'utilisateur de se concentrer sur ce que fait l'objet (par exemple, ajouter des chaînes de caractères, effacer le contenu).
- L'encapsulation cache la manière dont l'objet procède (par exemple, gestion de la mémoire tampon interne, redimensionnement en cas de besoin).
  - Le masquage d'informations est réalisé via l'encapsulation

Par exemple, en utilisant les classes (POO), nous mettons en œuvre simultanément les trois concepts : Abstraction, Masquage de l'information et Encapsulation :
- abstraction : permet de travailler sur un concept sans s'occuper des détails de son implémentation interne.
- masquage : cache les données (e.g. `private` et `public` mot-clés)
- encapsulation : regroupe à un même endroit toutes les données (attributs) et les comportements (méthodes) associés
