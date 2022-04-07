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

function SpellFullDesc (spellName) {
  let index = 0
  let txt = []
  while (spellName !== sortTable[index][1] && index !== sortTable.length) {
    index += 1
  }
  if (spellName === sortTable[index][1] && index !== sortTable.length) {
    txt = ['Livre', sortTable[index][0], 'Ecole', sortTable[index][2], 'Branches', sortTable[index][3].toString(), 'Classes', sortTable[index][4].toString(), 'Composantes', sortTable[index][5].toString(), 'Temps incantation', sortTable[index][6], 'Portée', sortTable[index][7], 'Cible', sortTable[index][8], 'Durée', sortTable[index][9], 'Jet de sauvegarde', sortTable[index][10], 'Résistance à la magie', sortTable[index][11], 'Description ', sortTable[index][12], 'Nécessaire', sortTable[index][13]]
  }
  return txt
}
