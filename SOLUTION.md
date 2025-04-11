### Problème #1: Navigation incorrecte
La nature du problème :
Le lien <a> recharge complètement la page au lieu d’effectuer une navigation sans rechargement. Cela empêche de profiter du fonctionnement en Single Page Application (SPA) d’Angular.

Solution technique :
Utiliser la directive routerLink fournie par Angular sur le tag <a> pour permettre une navigation interne sans rechargement complet de la page.

Concepts Angular utilisés :
routerLink : directive Angular permettant de naviguer entre les routes définies dans le RouterModule sans rechargement de la page.

