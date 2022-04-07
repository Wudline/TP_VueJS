<template>
  <div id="Recherche">
    <p>Recherche</p>
    <input type="text" v-model="search" placeholder="Spell name">
    <ul>
      <li v-for="spell in filteredSpells" :key="spell">
        <desc-spell-show :spell-name="spell" :spells-info="spellsInfo(spell)" />
      </li>
    </ul>
  </div>
</template>

<script>
import {SpellName, SpellFullDesc} from '../assets/functions.js'
import DescSpellShow from './recherche/DescSpellShow'

export default {
  name: 'Recherche',
  components: {DescSpellShow},
  data () {
    return {
      spellsList: SpellName(),
      spellsInfo: SpellFullDesc,
      search: '',
      show: false
    }
  },
  computed: {
    filteredSpells () {
      return this.spellsList.filter((spell) => {
        return spell.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
