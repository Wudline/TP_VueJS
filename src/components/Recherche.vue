<template>
  <div id="Recherche">
    <router-link to="/">Configuration</router-link>
    <router-link to="/Statistiques">Statistiques</router-link>
    <p>Recherche</p>
    <input type="text" v-model="search" placeholder="Spell name">
    <ul>
      <li v-for="spell in filteredSpells" :key="spell.id">
        <desc-spell-show :spell-name=spell[1] :spells-info="spell" />
      </li>
    </ul>
  </div>
</template>

<script>
import {sortTable} from '../assets/data.min'
import DescSpellShow from './recherche/DescSpellShow'

export default {
  name: 'Recherche',
  components: {DescSpellShow},
  data () {
    return {
      spellsInfo: sortTable,
      search: ''
    }
  },
  computed: {
    filteredSpells () {
      return this.spellsInfo.filter((spell) => {
        return spell[1].toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
