<template>
  <table>
    <tr>
      <li-spell v-on:name-spell-clicked="isVisible = $event"/>
    </tr>
    <tr v-if="!isVisible" v-for="item in dataList" :key="item">
        <td>{{item}}</td>
      </tr>
  </table>
</template>

<script>
import NomSort from './SpellsList'

export default {
  name: 'DescSort',
  components: {NomSort},
  data () {
    return {
      isVisible: false
    }
  }
}
</script>

<style scoped>

</style>
