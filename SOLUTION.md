### Problème #1: Navigation incorrecte  
La nature du problème :  
Le lien `<a>` recharge complètement la page au lieu d’effectuer une navigation sans rechargement. Cela empêche de profiter du fonctionnement en Single Page Application (SPA) d’Angular.

Solution technique :  
Utiliser la directive `routerLink` fournie par Angular sur le tag `<a>` pour permettre une navigation interne sans rechargement complet de la page.

Concepts Angular utilisés :  
`routerLink` : directive Angular permettant de naviguer entre les routes définies dans le RouterModule sans rechargement de la page.

---

### Problème #2: Besoin de formatage de texte  
La nature du problème :  
Le texte affiché via `{{title}}` n’est pas formaté correctement : il peut contenir des underscores à la place des espaces, et les mots peuvent être en majuscules ou minuscules de manière incohérente.

Solution technique :  
Créer un pipe personnalisé qui remplace les underscores `_` par des espaces, met la première lettre de chaque mot en majuscule et les autres en minuscules.

Concepts Angular utilisés :  
Pipe personnalisé : permet de transformer une donnée avant affichage dans le template.


### Problème #3: Structure HTML incomplète  

idem que le problème 1


### Problème #4: Pages non affichées  
La nature du problème :  
Les pages ne s’affichaient pas dans l'application standalone car le système de routing était mal configuré.

Solution technique :  
Configurer correctement le routing :
- Importer `RouterOutlet` dans `AppComponent`
- Utiliser `provideRouter(routes)` dans `main.ts`
- Vérifier que les composants routés sont bien standalone

Concepts Angular utilisés :  
- Routing avec Angular standalone  
- `RouterOutlet` pour l'affichage dynamique  
- `provideRouter()` pour initialiser le routing sans AppModule  
- Composants standalone

### Problème #5: Route manquante pour le détail d’un livre  
La nature du problème :  
Il manquait une route permettant d’accéder à la page de détail d’un livre lorsqu’on clique dessus dans la liste.

Solution technique :  
J’ai ajouté une route dynamique dans `app.routes.ts` :  

{ path: 'books/:id', component: BookDetailComponent }

Concepts Angular utilisés :  
- Route dynamique avec paramètre :id
- Système de routing Angular

### Problème #6 et #7: Formulaire incomplet pour l’ajout de livre

La nature du problème :  
Le composant `AddBookComponent` ne contenait pas de formulaire, ni les champs nécessaires pour ajouter un nouveau livre.

Solution technique :  
J’ai utilisé le `FormBuilder` pour créer un `FormGroup` avec les champs `title`, `author`, `description` et `category`.  
J’ai également ajouté des validations `Validators.required` pour rendre chaque champ obligatoire.

Code ajouté dans `ngOnInit()` :
this.bookForm = this.fb.group({
  title: ['', Validators.required],
  author: ['', Validators.required],
  description: ['', Validators.required],
  category: ['', Validators.required]
});

 
Concepts Angular utilisés :  

- FormBuilder pour construire un formulaire réactif
- FormGroup pour regrouper les champs
- Validators.required pour valider les champs obligatoires
- Reactive Forms (ReactiveFormsModule)

### Problème #8: Bouton de retour non fonctionnel

La nature du problème :  
Le bouton censé permettre de revenir à la page précédente n’était pas encore implémenté.

Solution technique :  
J’ai injecté le service Angular `Location` dans le composant, puis utilisé sa méthode `back()` dans la méthode `goBack()`.

Extrait du code :

Dans le fichier TypeScript :

Méthode :
  goBack(): void {
    this.location.back();
  }

Concepts Angular utilisés :  
- Service `Location` fourni par Angular (`@angular/common`)  
- Méthode `back()` pour simuler un retour navigateur  
- Liaison événementielle `(click)` dans le template HTML

### Problème #9: Erreur lors du chargement du livre

La nature du problème :  
Une erreur s’affichait dans la console : `Cannot read properties of undefined (reading 'title')`. Le template essayait d’accéder à `book.title` avant que `book` ne soit chargé.

Solution technique :  
J’ai encapsulé tout le bloc contenant les informations du livre avec `*ngIf="book"` pour éviter d’accéder à ses propriétés si l’objet n’est pas encore défini.

Concepts Angular utilisés :  
- Directive structurelle `*ngIf`  
- Gestion du rendu conditionnel pour des données asynchrones

---

### Problème #10: Titre non mis en évidence

La nature du problème :  
Le champ `title` du livre ne mettait pas en évidence les livres favoris.

Solution technique :  
J’ai appliqué la directive `[appHighlight]="book.isFavorite"` sur le `h1` pour modifier son style si le livre est dans les favoris.

Concepts Angular utilisés :  
- Directive d’attribut personnalisée  
- Passage de valeur à la directive via `@Input()`

---

### Problème #11: Bouton non fonctionnel

La nature du problème :  
Certains boutons de l’application ne réagissaient pas aux clics, ce qui empêchait d’effectuer les actions attendues (navigation, suppression, ajout...).

Solution technique :  
J’ai vérifié que tous les boutons étaient bien liés à une méthode via `(click)="..."` dans le template HTML.  
Dans le cas où un bouton n’appelait pas de fonction ou appelait une méthode inexistante, j’ai relié correctement l’action attendue à une méthode définie dans le composant.

Concepts Angular utilisés :  
- Liaison événementielle `(click)` dans les templates  
- Association entre vue (HTML) et logique (TypeScript) via les méthodes de composant  
- Débogage des interactions utilisateur avec la console du navigateur

---

### Problème #12: Bouton de retour inactif

La nature du problème :  
Le bouton "Retour" n’avait pas d’action fonctionnelle.

Solution technique :  
J’ai relié le bouton à la méthode `goBack()` qui utilise `this.location.back()` pour simuler le retour navigateur.

Concepts Angular utilisés :  
- Liaison événementielle `(click)`  
- Utilisation du service `Location` d’Angular

### Problème #13: Données non affichées

La nature du problème :  
Le composant utilisait deux propriétés (`data` et `books`), mais seule `books` était correctement remplie. Le template vérifiait `*ngIf="data"` mais itérait sur `books`, ce qui empêchait l’affichage.

Solution technique :  
J’ai supprimé la propriété `data` et remplacé toutes ses références par `books` pour assurer l’unicité de la source de données dans le template.

Concepts Angular utilisés :  
- Directives structurelles `*ngIf`, `*ngFor`  
- Affichage conditionnel basé sur la présence de données

---

### Problème #14: Titre du livre non mis en évidence

La nature du problème :  
Les titres de livres favoris devaient être mis en évidence.

Solution technique :  
J’ai appliqué la directive `[appHighlight]="book.isFavorite"` sur la balise `<h2>` contenant le titre.

Concepts Angular utilisés :  
- Directive d’attribut personnalisée avec `@Directive`  
- Liaison de propriété via `@Input()`  
- Comportement conditionnel dans le DOM

---

### Problème #15: Description trop longue

La nature du problème :  
Les descriptions complètes prenaient trop de place dans l’interface, surtout dans les listes.

Solution technique :  
J’ai créé un pipe `truncate` qui limite la description à 20 caractères et ajoute des points de suspension si elle est trop longue.

Exemple dans le HTML :
  {{ book.description | truncate:20 }}

Concepts Angular utilisés :  
- Pipe personnalisé standalone  
- Transformation des données dans les templates  
- Gestion de l'affichage dynamique avec `substring`

### Problème #16: Confirmation de modification de favori absente

La nature du problème :  
Lorsqu’un utilisateur ajoutait ou retirait un livre des favoris, aucun message ne confirmait que l’action avait réussi.

Solution technique :  
J’ai ajouté un `alert()` dans la méthode `toggleFavorite()` pour afficher une confirmation après la réponse de l’API. Le message s’adapte selon que le livre est ajouté ou retiré des favoris.

Concepts Angular utilisés :  
- Gestion des réponses HTTP avec `subscribe()`  
- Interaction utilisateur avec `alert()`  
- Utilisation conditionnelle des données dans la callback `next`

---

### Problème #17: Erreur non visible à l’utilisateur

La nature du problème :  
Quand une erreur survenait lors de la modification d’un favori, l’utilisateur ne recevait aucun retour visuel.

Solution technique :  
J’ai ajouté un `alert()` dans la callback `error` du `subscribe()` pour notifier l’échec de l’action.

Concepts Angular utilisés :  
- Gestion d’erreur dans un Observable avec `error:`  
- Alerte utilisateur via `alert()`  
- Debug avec `console.error()`

### Problème #18: Confirmation de suppression absente

La nature du problème :  
Lorsqu’un utilisateur supprimait un livre, aucun message ne confirmait que l’action avait bien été réalisée.

Solution technique :  
J’ai ajouté un `alert()` dans la méthode `deleteBook()` pour informer l’utilisateur que le livre a été supprimé avec succès.

Concepts Angular utilisés :  
- Réception d’une réponse de succès via `subscribe()`  
- Affichage d’une alerte à l’utilisateur avec `alert()`  
- Gestion des actions après suppression (log et feedback visuel)

---

### Problème #19: Aucune notification en cas d’erreur de suppression

La nature du problème :  
Si une erreur survenait pendant la suppression d’un livre, l’utilisateur n’était pas prévenu.

Solution technique :  
J’ai ajouté un `alert()` dans la callback `error` du `subscribe()` pour informer l’utilisateur de l’échec de la suppression.

Concepts Angular utilisés :  
- Gestion d’erreur dans les Observables Angular  
- Utilisation d’un message conditionnel via `alert()`  
- Logging des erreurs avec `console.error()`

### Problème #20: Titre non affiché en majuscules

La nature du problème :  
Le champ `title` était affiché tel quel, sans mise en forme, et n’était pas visible si la propriété n’était pas définie dans la classe du composant.

Solution technique :  
J’ai ajouté la propriété `title` dans le composant TypeScript et j’ai appliqué le pipe Angular `uppercase` dans le template pour l’afficher en majuscules.

Concepts Angular utilisés :  
- Liaison de données dans le template (`{{ title }}`)  
- Pipe Angular `uppercase` pour transformer une chaîne  
- Affichage dynamique à partir de la classe du composant

### Problème #22: Création d’un composant header

La nature du problème :  
Le code HTML du header (titre + navigation) était directement inclus dans le composant `AppComponent`, ce qui nuisait à la lisibilité, à la modularité et à la réutilisabilité de l’interface.

Solution technique :  
J’ai créé un composant standalone `HeaderComponent` avec Angular CLI en utilisant la commande suivante :
ng generate component header --standalone

Ce composant contient :
- Le titre de l’application, avec un pipe de formatage
- Une navigation avec des liens routerLink

Je l’ai intégré dans `AppComponent` via la balise <app-header> et je l’ai ajouté au tableau imports de `AppComponent`.

Concepts Angular utilisés :  
- Composant Angular standalone (standalone: true)  
- Séparation des responsabilités et réutilisabilité  
- Navigation sans rechargement avec routerLink  
- Communication template ↔ classe avec une propriété title  
- Utilisation d’un pipe Angular personnalisé dans un composant

---

### Problème #23: Création d’un composant footer

La nature du problème :  
Le code HTML du footer était directement dans le fichier `app.component.html`, ce qui n’était pas modulaire et rendait difficile la réutilisation ou le stylage indépendant.

Solution technique :  
J’ai créé un composant standalone `FooterComponent` en utilisant la commande suivante :
ng generate component footer --standalone

J’y ai déplacé le contenu HTML du footer (<footer class="footer">...) et je l’ai intégré dans le `AppComponent` via la balise <app-footer>, en l’ajoutant également au tableau imports.

Concepts Angular utilisés :  
- Composant Angular standalone  
- Organisation modulaire de l’interface  
- Réutilisation de composants avec balises personnalisées (<app-footer>)

### Problème #24: Texte non mis en gras si favori

La nature du problème :  
Les titres de livres favoris devaient être mis en gras pour les distinguer visuellement, mais la directive `appHighlight` ne faisait encore rien.

Solution technique :  
J’ai modifié la directive `HighlightDirective` pour qu’elle applique une mise en gras (`font-weight: bold`) si la valeur passée est `true`, et un style normal sinon.  
J’ai utilisé le service Angular `Renderer2` pour manipuler le style de manière sûre.

Concepts Angular utilisés :  
- Directive d’attribut standalone avec `@Directive`  
- Liaison de propriété avec `@Input()`  
- Hook de cycle de vie `ngOnChanges()`  
- Manipulation du style avec `Renderer2`
