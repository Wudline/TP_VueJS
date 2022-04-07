<template>
  <div>
    <p>Stat</p>
    <p>Nombre de livre : {{ NbBook }}</p>
    <p>Nombre de sort : {{ NbSkill}}</p>
  </div>
</template>

<script>
import { sortTable } from '@/assets/data.min.js'

export default {
  name: 'Stat',
  data () {
    return {}
  },
  NbBook () {
    var tmp
    var map = new Map()
    var finTable = sortTable.length
    for (var i = 0; i < finTable; i++) {
      tmp = Array.from(map.set(sortTable[i][0])).length
    }
    return tmp
  },
  NbSkill () {
    var tmp
    var map = new Map()
    var finTable = sortTable.length
    for (var i = 0; i < finTable; i++) {
      tmp = Array.from(map.set(sortTable[i][1])).length
    }
    return tmp
  }
}
</script>
