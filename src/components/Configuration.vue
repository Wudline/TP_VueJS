<template>
  <table>
    <select-row list-name="Search Ecoles:" :data-list=schoolList />
    <select-row list-name="Search Branches:" :data-list=branchesList />
    <select-row list-name="Search Classes & Domaines:" :data-list=classList />
    <select-row list-name="Search by niveau:" :data-list=spellLevelList />
    <pendulum   list-name="Search by Livre:" />
    <tr>
      <td style="text-align: center" colspan="3">
        <router-link to="/recherche">Recherche</router-link>
      </td>
    </tr>
  </table>
</template>

<script>
import {SpellSchool, SpellClass, SpellLevel, SpellBranches} from '../assets/functions.js'
import SelectRow from './configuration/SelectRow'
import Pendulum from './configuration/Pendulum'

/**
 * Main component for the configuration page. It contains a table with all the option of to filter the spells.
 * The list of option are :
 *  - Spell school.
 *  - Spell class.
 *  - Spell level.
 *  - Spell Branches.
 *  - Spell book.
 * These filters are then stored to be used by the research page.
 * */
export default {
  name: 'Configuration',
  components: {Pendulum, SelectRow},
  data () {
    return {
      /* List of school. */
      schoolList: SpellSchool(),
      /* List of class. */
      classList: SpellClass(),
      /* List of spell level. */
      spellLevelList: SpellLevel(),
      /* List of branches. */
      branchesList: SpellBranches()
    }
  }
}
</script>

<style scoped>

</style>
