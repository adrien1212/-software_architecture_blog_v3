---
title: "Abstraction vs Indirection"
sidebar_position: 7
displayed_sidebar: conceptsFondamentauxSidebar
---

:::ressources
- [Indirection Vs. Abstraction](https://friendgineers.rosenshein.org/posts/2025/08/15/)
- [That's Not an Abstraction, That's Just a Layer of Indirection](https://fhur.me/posts/2024/thats-not-an-abstraction)
:::

> Consider dependency injection. It’s an indirection. The goal is to let the developer not care which thing got injected.

> The problem with layers of indirection is that they add cognitive overhead. They’re often justified under the guise of flexibility or modularity, but in practice, they rarely end up delivering those benefits. [^id]

Si l’on prend l’exemple du principe d’inversion des dépendances (Dependency Inversion Principle), le simple fait d’introduire une interface ne crée pas nécessairement une abstraction ; cela peut uniquement introduire un niveau d’indirection supplémentaire.

```java
public interface UserService {
    User getById(Long id);
}

public class UserServiceImpl implements UserService {
  public User getById(Long id) {
        return repository.findById(id).map(UserDto::from).orElseThrow();
    }
}
```
Dans cet exemple :
- il n’existe qu’une seule implémentation ;
- aucune variabilité métier n’est encapsulée ;
- aucune complexité significative n’est masquée ;
- l’interface ne définit pas réellement une frontière conceptuelle stable.

L’interface `UserService` n’apporte donc pas nécessairement une abstraction métier supplémentaire ; elle agit principalement comme un mécanisme d’indirection.

Cela ne signifie pas pour autant qu’il faille systématiquement supprimer ce type de structure. Une certaine indirection peut être pertinente pour améliorer le découplage, les tests ou l’évolution future du système. Toutefois, chaque niveau d’abstraction ou d’indirection possède un coût cognitif qui doit être justifié par un bénéfice réel.

## Exemple d’abstraction utile

```java
public interface PaymentService {
    PaymentResult pay(Order order);
}

public class StripePaymentService implements PaymentService {

    @Override
    public PaymentResult pay(Order order) {
        // Appels Stripe
        // Retry
        // Gestion des erreurs
        // Logging
        // Transactions
    }
}
```

Ici :
- le code appelant manipule un concept métier : pay(order) ;
- il ignore les détails techniques ;
- la complexité est encapsulée.

L’interface introduit à la fois :
- de l’indirection ;
- mais aussi une abstraction pertinente.

## Anti-pattern Sinkhole

Le Sinkhole Antipattern est un antipattern fréquent dans les architectures en couches. Il apparaît lorsque plusieurs couches intermédiaires se contentent de déléguer les appels sans apporter de réelle valeur métier ou technique.

Dans ce cas :
- chaque couche ajoute un niveau de navigation supplémentaire ;
- aucune complexité n’est réellement encapsulée ;
- aucun nouveau niveau d’abstraction n’est introduit ;
- aucune variabilité n’est isolée.

Ces couches créent donc principalement de l’indirection, mais peu ou pas d’abstraction.

## Compromis à trouver ! 
Un système contenant trop peu d’abstractions devient fortement couplé et difficile à faire évoluer. À l’inverse, un système comportant trop de couches d’indirection inutiles devient difficile à naviguer, à comprendre et à maintenir.

| Indirection                       | Abstraction                  |
| --------------------------------- | ---------------------------- |
| Ajoute une étape intermédiaire    | Réduit la complexité visible |
| Augmente le parcours d’exécution  | Simplifie le modèle mental   |
| N’apporte pas forcément de valeur | Cache des détails inutiles   |

Une abstraction introduit souvent de l’indirection, mais toute indirection ne constitue pas une abstraction utile (cf l'exemple du dessus `PaymentService`)

[^id]: [That's Not an Abstraction, That's Just a Layer of Indirection](https://fhur.me/posts/2024/thats-not-an-abstraction)