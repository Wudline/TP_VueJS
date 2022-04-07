<template>
  <tr>
    <td>
      <ul>
        <li v-for="item in dataList" :key="item">{{item}}</li>
      </ul>
    </td>
    <h3-switch v-on:row-state-changed="isActive = $event"/>
  </tr>
</template>

<script>
import ParamToggleSwitch from './ParamToggleSwitch'
export default {
  name: 'SelectRow',
  components: {ParamToggleSwitch},
  props: ['listName', 'dataList'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>

</style>
