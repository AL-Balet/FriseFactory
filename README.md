*Frise Factory** est une application web gratuite destinée à la création de frises chronologiques pédagogiques. Elle permet de transformer rapidement une liste de repères historiques en une frise claire, personnalisable et prête à être imprimée ou distribuée aux élèves.

L'application a été conçue par **Alexandre Balet**, enseignant et formateur en Histoire-Géographie à Bangkok (AEFE), pour **La Classe d'Histoire**.

## Objectifs

Frise Factory aide les enseignants à :

- créer une frise à partir d'une liste de dates et d'événements ;
- produire une version complète servant de référence ou de corrigé ;
- générer une version vierge à compléter par les élèves ;
- adapter facilement la mise en page à un cours, une activité ou une évaluation ;
- exporter un document propre pour un usage numérique ou une impression.

## Fonctionnalités

### Création des repères

- Saisie manuelle d'une liste de repères.
- Import d'un fichier TXT, CSV ou JSON.
- Reconnaissance des années, des dates précises et des périodes.
- Ajout de mots-clés sous le nom d'un événement.
- Recherche automatique d'illustrations significatives dans Wikimedia Commons.
- Suppression de toutes les images en un clic.
- Nettoyage automatique d'une liste importée ou collée.

### Personnalisation de la frise

- Orientation paysage avec axe chronologique horizontal.
- Orientation portrait avec axe chronologique vertical.
- Deux niveaux de densité : aérée et standard.
- Trois tailles pour les dates placées sur l'axe.
- Mode noir et blanc adapté à l'impression.
- Cinq palettes de couleurs supplémentaires.
- Affichage ou masquage indépendant des dates, des intitulés, des mots-clés et des images.
- Réglages distincts pour la frise repère et la frise à compléter.

### Modification directe

- Déplacement des boîtes par glisser-déposer.
- Redimensionnement manuel des boîtes.
- Ajustement de la longueur et du positionnement des périodes sur l'axe.
- Connecteurs automatiquement ajustés entre l'axe du temps et les boîtes.
- Réinitialisation de la mise en page en un clic.

### Aperçus et exports

- Aperçu simultané de la **frise repère** et de la **frise à compléter**.
- Export aux formats SVG, PNG, JPG, PDF et JSON.
- Images PNG et JPG générées en haute définition.
- Fond blanc pour faciliter l'impression.
- Mention de Frise Factory et attribution Wikimedia intégrées aux fichiers exportés.

### Interface

- Interface disponible en français et en anglais.
- Mode clair et mode sombre.
- Choix de langue et préférences conservés dans le navigateur.
- Fonctionnement entièrement dans le navigateur, sans compte utilisateur.

## Formats de saisie

Un repère est saisi sur une ligne. Plusieurs séparateurs sont acceptés.

```text
Juin 1945 : Création de l'ONU
6 juin 1944 ; Débarquement de Normandie
1914-1918 | Première Guerre mondiale
1944 ; Droit de vote des femmes ; citoyenneté, suffrage
2002 ; Mise en circulation de l'euro ; monnaie, Union européenne ; URL Wikimedia
```

Structure recommandée :

```text
date ou période ; événement ; mots-clés ; URL Wikimedia facultative
```

Les années seules, les dates comprenant un mois ou un jour, et les périodes telles que `1914-1918` sont reconnues automatiquement.

## Utilisation locale

Aucune installation n'est nécessaire. Ouvrez simplement `index.html` dans un navigateur récent.

Une connexion à Internet est uniquement nécessaire pour charger les polices Google et rechercher ou afficher des illustrations provenant de Wikimedia Commons.

## Publication avec GitHub Pages

1. Créez un dépôt GitHub, par exemple `frise-factory`.
2. Placez directement à la racine du dépôt tous les fichiers de ce dossier.
3. Ouvrez **Settings > Pages** dans les paramètres du dépôt.
4. Dans la partie consacrée au déploiement, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` et le dossier `/ (root)`, puis enregistrez.

L'application sera ensuite accessible à une adresse de ce type :

```text
https://votre-compte.github.io/frise-factory/
```

Tous les chemins de l'application sont relatifs. Le nom du dossier local utilisé pendant le développement n'apparaît donc pas dans l'adresse publiée.

## Structure du projet

```text
frise-factory/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── assets/
    ├── branding/
    ├── icons/
    └── steps/
```

## Données et confidentialité

Frise Factory ne nécessite aucune création de compte et n'envoie pas les frises vers un serveur applicatif. Les préférences et le travail en cours sont enregistrés localement dans le navigateur.

Lorsqu'une recherche d'image est demandée, l'application interroge les services publics de Wikipédia et de Wikimedia Commons.

## Conception et développement

Frise Factory a été imaginée, dirigée et conçue par **Alexandre Balet** pour répondre aux besoins concrets des enseignants et des élèves en Histoire-Géographie.

L'application a été développée avec l'assistance de **Codex** et de **ChatGPT 5.6** pour la programmation, l'amélioration de l'interface, les tests et l'optimisation des exports.

Contact : [alexandre.balet@aefe.fr](mailto:alexandre.balet@aefe.fr)

Site : [La Classe d'Histoire](http://www.laclassedhistoire.fr/)

## Licence

Ce projet est placé sous licence **Creative Commons Attribution - Partage dans les mêmes conditions 4.0 International (CC BY-SA 4.0)**.

Vous êtes autorisé à partager et à adapter ce travail, y compris à des fins commerciales, à condition de :

- créditer l'auteur et indiquer les éventuelles modifications ;
- diffuser toute adaptation sous la même licence.

Texte complet de la licence : [Creative Commons CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)

Les images éventuellement ajoutées depuis Wikimedia Commons restent soumises à leurs licences respectives.
