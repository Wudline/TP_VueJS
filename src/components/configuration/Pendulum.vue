<template>
  <tr>
    <td>
      <p>{{listName}}</p>
    </td>
    <td>
      <multi-data-select :disable="!isActive" name="Supprimer ->" :data-list=leftList v-on:data-changed=fromLeftList />
      <multi-data-select :disable="!isActive" name="<- Ajouter"  :data-list=rightList v-on:data-changed=fromRightList />
    </td>
    <td>
      <param-toggle-switch v-on:row-state-changed="isActive = $event"/>
    </td>
  </tr>
</template>

<script>
import MultiDataSelect from './MultiDataSelect'
import ParamToggleSwitch from './ParamToggleSwitch'
import {SpellBookTitle} from '../../assets/functions'

/**
 * This component represents a data pendulum in which a list of data can be placed on the a 'left array' or in a
 * 'right array'. Those data are firstly place in a select at the left. By selecting them and clicking the button
 * under the column they will be moved to the other column.
 * The columns are represented by the component 'multi-data-select'.
 * The property listName: is representing the name displayed to the user.
 * The data:
 *  - isActive, define if this component is active or not. Following the state of the component 'param-toggle-switch'.
 *  - leftList, represent the data on the left side of the pendulum.
 *  - rightList, represent the data on the right side of the pendulum.
 * Note:
 * Because of the way data are managed in VueJs i had to fetch my data inside the component.
 */
export default {
  name: 'Pendulum',
  components: {ParamToggleSwitch, MultiDataSelect},
  props: ['listName'],
  data () {
    return {
      isActive: false,
      leftList: SpellBookTitle(),
      rightList: []
    }
  },
  methods: {
    /**
     * Method handling a data return from the right side of the pendulum.
     * @param event List of element selected on the right side of the pendulum. They need to be deleted from the right
     * side of the pendulum and added to the left side (if they are not present).
     */
    fromRightList (event) {
      this.rightList = this.rightList.filter(value => !event.includes(value))
      this.leftList = [...this.leftList, ...event].sort()
    },

    /**
     * Method handling a data return from the left side of the pendulum.
     * @param event List of element selected on the left side of the pendulum. They need to be deleted from the left
     * side of the pendulum and added to the right side.
     */
    fromLeftList (event) {
      this.leftList = this.leftList.filter(value => !event.includes(value))
      this.rightList = [...this.rightList, ...event].sort()
    }
  }
}
</script>

<style scoped>

</style>
