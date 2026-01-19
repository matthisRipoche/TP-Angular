# 📘 Projet — Pokédex Web (Angular)

## 🎯 Objectif du projet

Créer une **interface web type Pokédex** permettant :

* d’afficher **la liste complète des Pokémon**
* de consulter **les détails de chaque Pokémon**
* le tout avec **Angular**, dans une logique propre et maintenable

👉 Le vrai but : **apprendre Angular correctement**, pas juste “faire marcher un truc”.

---

## 🧠 Philosophie du projet

Projet **100 % pédagogique**.

Règles du jeu :

* ❌ pas d’IA pour générer du code final
* ✅ l’IA peut servir à :

  * comprendre des concepts
  * voir des exemples simples
* ✅ chaque choix doit être compréhensible et justifiable

Objectif final :

> être capable d’expliquer l’architecture et le flow de données sans tricher

---

## 🧱 Architecture choisie — **Feature First**

Le projet adopte une **architecture feature-first**.

👉 On organise le code **par fonctionnalité**, pas par type de fichier.
👉 Chaque feature est autonome, lisible, et évolutive.

---

## 📁 Structure globale du projet

```
src/
 ├─ app/
 │   ├─ pokemon/
 │   │   ├─ pages/
 │   │   │   ├─ pokemon-list/
 │   │   │   └─ pokemon-detail/
 │   │   ├─ services/
 │   │   │   └─ pokemon.service.ts
 │   │   ├─ models/
 │   │   │   └─ pokemon.model.ts
 │   │   └─ pokemon-routing.module.ts
 │   │
 │   ├─ core/
 │   │   ├─ services/
 │   │   └─ interceptors/
 │   │
 │   ├─ shared/
 │   │   ├─ components/
 │   │   └─ pipes/
 │   │
 │   └─ app-routing.module.ts
```

---

## 🧩 Détail des dossiers

### 🟢 `pokemon/` (feature principale)

Contient **tout ce qui concerne les Pokémon** :

* pages
* services
* modèles
* routing

👉 La feature peut évoluer ou être déplacée sans casser le reste de l’app.

---

### 📄 `pages/`

Pages liées au routing :

* `pokemon-list` → listing paginé
* `pokemon-detail` → détail d’un Pokémon

👉 Une page = une vue routée.

---

### 🔧 `services/`

* communication avec la PokeAPI
* logique métier liée aux Pokémon
* centralisation des appels HTTP

---

### 🧱 `models/`

* interfaces TypeScript
* typage des données API

👉 permet de comprendre et sécuriser les données manipulées.

---

### 🔵 `core/`

Code **global à l’application** :

* services globaux
* interceptors HTTP
* logique transversale

👉 chargé **une seule fois**.

---

### 🟣 `shared/`

Éléments réutilisables :

* composants UI
* pipes
* helpers

👉 aucune logique métier spécifique Pokémon ici.

---

## 🌐 API utilisée

* **PokeAPI**
* Base URL : `https://pokeapi.co/api/v2`

### Endpoints utilisés

* Liste paginée :

  ```
  GET /pokemon?offset=0&limit=20
  ```
* Détail :

  ```
  GET /pokemon/{id}
  ```

---

## 🔀 Navigation

Routes principales :

* `/pokemon` → liste
* `/pokemon/:id` → détail

Routing géré **par feature** (`pokemon-routing.module.ts`).

---

## 📚 Concepts Angular travaillés

Ce projet permet de pratiquer :

* architecture feature-first
* modules et routing
* composants
* services & injection de dépendances
* HttpClient
* observables (bases)
* séparation responsabilités UI / logique

---

## 🚧 Hors scope volontaire

Pour rester focus apprentissage :

* pas d’authentification
* pas de backend custom
* pas de state management avancé
* pas d’optimisation prématurée

---

## 🏁 Résultat attendu

À la fin du projet, tu dois :

* comprendre **pourquoi** l’architecture est organisée ainsi
* savoir où ajouter une nouvelle feature
* être à l’aise avec le flow :
  **API → service → page → template**
* pouvoir défendre le choix *feature-first*

---

## 🧠 Conclusion

Ce Pokédex est un **projet d’apprentissage structurant** :

* architecture moderne
* bonnes pratiques Angular
* compréhension avant rapidité

🔥 C’est exactement le genre de projet qui fait passer un dev
de “je code” à **“je construis proprement”**.
