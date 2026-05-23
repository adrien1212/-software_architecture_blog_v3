---
title: "Niveaux architecturaux"
sidebar_position: 30
displayed_sidebar: architectureLogicielleSidebar
---


:::ressources
- [Architecture Styles VS Architecture Patterns - Mark Richards](https://youtu.be/I-yBv72RCeA?t=30)  
- [Architectural Styles vs. Architectural Patterns vs. Design Patterns](https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/)
- [Chapter 3: Architectural Patterns and Styles (Microsoft)](https://learn.microsoft.com/en-us/previous-versions/msp-n-p/ee658117(v=pandp.10))
:::

Tout est question de champ d'application :

- Un [style architectural](./architectural_styles) est la conception de l'application au niveau d'abstraction le plus élevé ;
- Un [patron architectural](./architectural_patterns) est un moyen d'implémenter un style architectural ;
- Un [patron de conception](./design_patterns) est un moyen de résoudre un problème localisé.

Dans l'ensemble de ce cours nous nous concentrerons sur les [styles architecturaux](./architectural_styles) tout en évoquant très brièvement les [patrons architecturaux](./architectural_patterns) mais nous ne reviendrons pas sur les [patrons de conception](./design_patterns). Nous reviendrons seulement sur certains concepts fondamentaux nécessaire pour comprendre les niveaux supérieurs.

## Styles vs Patterns
> How does microservices differ from CQRS ?

Nous reprenons les dires de Mark Richards 
|                                         Styles Architecturaux                                          |                                               Patrons Architecturaux                                                |
| :----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|                        Forment l’architecture globale de l’ensemble du Système                         | Peut-être utilisé à avec n’importe quel style  architectural; ils permettent de résoudre un problème en particulier |
| Va influencer des aspects de la structure du Système (e.g. la communication, granularité des services) |                                Ne va pas influencer la structure globale du Système                                 |  |

![styles vs patterns](./images/styles_vs_patterns.png)

Par exemple la patron *circuit breaker* peut être mis en oeuvre avec n'importe quel style architectural
