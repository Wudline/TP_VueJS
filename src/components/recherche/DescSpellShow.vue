<template>
  <div>
    <name-spell-switch :spell-name="spellName" v-on:desc-state-changed="switchState()"/>
    <table v-show=isVisible >
      <tr v-for="item in spellsInfo" :key="item.id">{{item}}</tr>
    </table>
  </div>
</template>

<script>
import NameSpellSwitch from './NameSpellSwitch'

export default {
  name: 'DescSpellShow',
  components: {NameSpellSwitch},
  props: ['spellName', 'spellsInfo'],
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    switchState () {
      if (this.isVisible === false) this.isVisible = true
      else this.isVisible = false
      return this.isVisible
    }
  }
}
</script>
