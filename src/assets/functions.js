import {sortTable} from './data.min.js'
export {SpellName, SpellBookTitle, SpellClass, SpellBranches, SpellSchool, SpellLevel, SpellDescription, SpellFullDesc}

function SpellBookTitle () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    set.add(sortTable[i][0])
  }
  return Array.from(set).sort()
}

function SpellName () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    set.add(sortTable[i][1])
  }
  return Array.from(set).sort()
}

function SpellSchool () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    set.add(sortTable[i][2])
  }
  return Array.from(set).sort()
}

function SpellBranches () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    const finSousTab = sortTable[i][3].length
    for (let j = 0; j < finSousTab; j++) {
      set.add(sortTable[i][3][j])
    }
  }
  return Array.from(set).sort()
}

function SpellClass () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    const finSousTab = sortTable[i][4].length
    for (let j = 0; j < finSousTab; j++) {
      set.add(sortTable[i][4][j][0])
    }
  }
  return Array.from(set).sort()
}

function SpellLevel () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    const finSousTab = sortTable[i][4].length
    for (let j = 0; j < finSousTab; j++) {
      set.add(sortTable[i][4][j][1])
    }
  }
  return Array.from(set).sort()
}

function SpellDescription () {
  const set = new Set()
  const finTable = sortTable.length
  for (let i = 0; i < finTable; i++) {
    const finSousTab = sortTable[i][4].length
    for (let j = 0; j < finSousTab; j++) {
      set.add(sortTable[i][12])
    }
  }
  return Array.from(set).sort()
}

/* Book         index: 0  */
/* Spell name   index: 1  */
/* School       index: 2  */
/* Branches     index: 3  (warning: it's an array of string) */
/* Classes      index: 4  (warning: it's an array of element) */
/* Composante   index: 5  (warning: it's an array of string) */
/* Incantation  index: 6  */
/* Range        index: 7  */
/* Effect       index: 8  */
/* Duration     index: 9  */
/* Saving draw  index: 10 */
/* Magic resist index: 11 */
/* Description  index: 12 */
/* Item needed  index: 13 */


function SpellFullDesc(index)
{
  txt="<b>Livre :</b> ";
  txt+=sortTable[index][0]+"<br><b>Ecole :</b> ";
  txt+=sortTable[index][2]+"<br><b>Branches :</b> ";
  txt+=sortTable[index][3].toString()+"<br><b>Classes :</b> ";
  txt+=sortTable[index][4].toString()+"<br><b>Composantes :</b> ";
  txt+=sortTable[index][5].toString()+"<br><b>Temps d'incantation :</b> ";
  txt+=sortTable[index][6]+"<br><b>Portée :</b> ";
  txt+=sortTable[index][7]+"<br><b>Cible :</b> ";
  txt+=sortTable[index][8]+"<br><b>Durée :</b> ";
  txt+=sortTable[index][9]+"<br><b>Jet de sauvegarde :</b> ";
  txt+=sortTable[index][10]+"<br><b>Résistance à la magie :</b> ";
  txt+=sortTable[index][11]+"<br><b>Description : </b>";
  txt+=sortTable[index][12]+"<br><b>Nécessaire :</b> ";
  txt+=sortTable[index][13];
  return txt
}
