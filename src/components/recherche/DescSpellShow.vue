<template>
  <ul>
    <li>
      <name-spell-switch v-on:desc-state-changed="isVisible = $event"/>
      <table v-if="isVisible">
        <tr v-for="item in spellsInfo" :key="item">{{item}}</tr>
      </table>
    </li>
  </ul>
</template>

<script>
import NameSpellSwitch from './NameSpellSwitch'

export default {
  name: 'DescSpellShow',
  components: {NameSpellSwitch},
  props: ['spellsInfo'],
  data () {
    return {
      isVisible: false
    }
  }
}
</script>
