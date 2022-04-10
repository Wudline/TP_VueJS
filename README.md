# dungeon_and_dragon

> Development project for techno-web graduation at Enssat as IMR student.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Project management
#### / (main page : setup)

> Corresponds to the configuration page
> Contains "selects" to choose :
>- The school
>- The branch
>- The class
>- The level
>- The book
>
> When the chosen configuration is validated by the user, the router redirects to '/Search

#### /Recherche (search)

> All spells corresponding to the user's configuration are displayed by default.
>
> Contains a search bar where the user can enter the name of a spell.
>
> This search bar, with autocomplete, will narrow down the number of matching spells based on the desired name
>
> When the user clicks on the name of one of the spells, the description of its characteristics is displayed below
>
> To close the description, the user must click on the spell name again.

#### /Statistiques (statistics)

> To access the statistics, a button is included on all views
>
> Displays the number of spells and books referenced.

## Data structure

```javascript
new Array(
  "MJ",
  "Abri",
  "Evocation",
  new Array("Force"),
  new Array(
    new Array("Barde",3),
    new Array("Magicien",3)),
  new Array("V","G","M"),
  "1 action simple",
  "6 m",
  "Effet : sphère de 6 m de rayon centrée sur la position du personnage",
  "2 heures/niveau (T)",
  "Aucun",
  "Non",
  "Lorsqu'il lance ce sort, le personnage fait apparaître autour de lui une sphère de force, opaque et immobile, de la couleur de son choix. Seule la moitié supérieure du globe est visible, le reste se trouvant sous terre. L'abri peut accueillir jusqu'à neuf créatures de taille M en plus du personnage. Tous ces invités peuvent entrer ou sortir à leur guise. Par contre, si le mage (ou le barde) sort des limites du sort, celui-ci cesse aussitôt.<br>Si la température extérieure est comprise entre -15° C et 35° C, la température intérieure reste stable à 20° C. En cas de température plus extrême, l'intérieur de l'abri évolue dans le même sens, à raison de 1° C pour 1° C (s'il fait -25° C dehors, il fera donc 10° C dans les limites de la zone d'effet du sort). L'abri protège également contre les éléments (pluie, grêle, tempête de sable, etc.). Il résiste aux vents inférieurs à la force d'un ouragan (120 km/h). Au-delà, il est détruit.<br>L'intérieur de l'abri prend la forme d'un hémisphère que le personnage peut éclairer de manière diffuse ou éteindre sur commande. À noter que le champ de force est transparent de l'intérieur, bien qu'il soit opaque du dehors. Les projectiles, les armes et la plupart des sorts peuvent franchir la sphère, mais les occupants de cette dernière ne peuvent être vus de l'extérieur (ils bénéficient d'un camouflage total).",
  "Composante matérielle : une petite perle de cristal qui éclate quand le sort s'achève ou quand le personnage y met un terme.")
```

```json
{
  "Livre":"MJ",
  "Nom":"Abri",
  "Ecole":"Evocation",
  "Branches": ["Force"],
  "Classes": [
    {
      "Classe": "Barde",
      "Niveau": 3
    },
    {
      "Classe": "Magicien",
      "Niveau": 3
    }
  ],
  "Composantes": ["V","G","M"],
  "Temps d'incantation": "1 action simple",
  "Portée": "6m",
  "Cible": "Effet : sphère de 6 m de rayon centrée sur la position du personnage",
  "Durée": "2 heures/niveau (T)",
  "Jet de sauvegarde": "Aucun",
  "Résistance à la magie": "Non",
  "Description": "<le texte très long>",
  "Nécessaire": "Composante matérielle : une petite perle de cristal qui éclate quand le sort s'achève ou quand le personnage y met un terme."
}
```



