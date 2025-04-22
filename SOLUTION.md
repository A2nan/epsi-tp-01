### Problème #1: Navigation incorrecte
La nature du problème :
Le lien <a> recharge complètement la page au lieu d’effectuer une navigation sans rechargement. Cela empêche de profiter du fonctionnement en Single Page Application (SPA) d’Angular.

Solution technique :
Utiliser la directive routerLink fournie par Angular sur le tag <a> pour permettre une navigation interne sans rechargement complet de la page.

Concepts Angular utilisés :
routerLink : directive Angular permettant de naviguer entre les routes définies dans le RouterModule sans rechargement de la page.

### Problème #2: Besoin de formatage de texte
La nature du problème :
Le texte affiché via {{title}} n’est pas formaté correctement : il peut contenir des underscores à la place des espaces, et les mots peuvent être en majuscules ou minuscules de manière incohérente.

Solution technique :
Créer un pipe personnalisé qui remplace les underscores _ par des espaces,met le premier mot avec une majuscule initiale,met les autres lettres en minuscules.

Concepts Angular utilisés :
Pipe personnalisé : permet de transformer une donnée avant affichage dans le template.