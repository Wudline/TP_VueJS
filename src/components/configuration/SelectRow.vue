<template>
  <tr>
    <td>
      <p>{{listName}}</p>
    </td>
    <td>
      <select :disabled="!isActive">
        <option v-for="item in dataList" :key="item">{{item}}</option>
      </select>
    </td>
    <param-toggle-switch v-on:row-state-changed="isActive = $event"/>
  </tr>
</template>

<script>
import ParamToggleSwitch from './ParamToggleSwitch'

/**
 * This component represents a selection row that can be disabled by a subcomponent named 'param-toggle-switch'.
 * Is passed by properties to this component:
 *  - listName, a name to be display and to identify the row.
 *  - dataList, a list of data from which the user can do his selection.
 *  The data of this component:
 *   - isActive, is a data which represent the availability of this component. It is controlled by an event of the
 *  subcomponent 'param-toggle-switch'.
 */
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
