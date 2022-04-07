<template>
  <div id="Configuration">
    <p>Config</p>
    <select name="SelectBook" id="SelectBook">
     <option v-for="data in BookTitle" :key="data.id">{{ data[0] }}</option>
    </select>
    <select name="SelectSchool" id="SelectSchool">
      <option v-for="data in SkillCateg" :key="data.id">{{ data[0] }}</option>
    </select>
    <select name="SelectClass" id="SelectClass">
      <option v-for="data in SkillClass" :key="data.id">{{ data[0] }}</option>
    </select>
    <select name="SelectLvl" id="SelectLvl">
      <option v-for="data in SkillLvl" :key="data.id">{{ data[0] }}</option>
    </select>
  </div>
</template>

<script>
import { sortTable } from '@/assets/data.min.js'

export default {
  name: 'Config',
  data () {
    return {}
  },
  computed: {
    BookTitle (key, value) {
      let tmp
      let map = new Map()
      const finTable = sortTable.length
      for (let i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][0], value)).sort()
      }
      return tmp
    },
    SkillName (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][1], value))
      }
      return tmp
    },
    SkillCateg (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][2], value)).sort()
      }
      return tmp
    },
    Attrib (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        var finSousTab = sortTable[i][3].length
        for (var j = 0; j < finSousTab; j++) {
          tmp = Array.from(map.set(sortTable[i][3][j], value))
        }
      }
      return tmp
    },
    SkillClass (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        var finSousTab = sortTable[i][4].length
        for (var j = 0; j < finSousTab; j++) {
          tmp = Array.from(map.set(sortTable[i][4][j][0], value)).sort()
        }
      }
      return tmp
    },
    SkillLvl (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        var finSousTab = sortTable[i][4].length
        for (var j = 0; j < finSousTab; j++) {
          tmp = Array.from(map.set(sortTable[i][4][j][1], value)).sort()
        }
      }
      return tmp
    },
    Action (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][5], value))
      }
      return tmp
    },
    SkillZone (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][6], value))
      }
      return tmp
    },
    SkillEffect (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][7], value))
      }
      return tmp
    },
    SkillTime (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][8], value))
      }
      return tmp
    },
    Usefulness (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][9], value))
      }
      return tmp
    },
    Description (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][9], value))
      }
      return tmp
    },
    ToolReq (key, value) {
      var tmp
      var map = new Map()
      var finTable = sortTable.length
      for (var i = 0; i < finTable; i++) {
        tmp = Array.from(map.set(sortTable[i][10], value))
      }
      return tmp
    }
  }
}
</script>
