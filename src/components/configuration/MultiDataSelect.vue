<template>
  <span style="display: inline-block">
    <select multiple :disabled=disable class="component-width" v-on:change="computeNewSelection" ref="selectValues">
      <option v-for="item in dataList" :key="item">{{item}}</option>
    </select>
    <button class="component-width" :disabled=disable v-on:click="sendDataToParent">
      {{name}}
    </button>
  </span>
</template>

<script>

/**
 * This component represents half of a pendulum. See the documentation of the pendulum to understand how it works.
 * The properties:
 *  - dataList is the list of data to be displayed.
 *  - name, the text display on the button.
 *  - disable is to know if this part of the pendulum is disabled.
 * The data selectedValues is an array that keep in mind all the currently selected data.
 */
export default {
  name: 'MultiDataSelect',
  props: ['dataList', 'name', 'disable'],
  data () {
    return {
      selectedValues: []
    }
  },
  methods: {
    /**
     * Compute all the selected data each time the state of the select in changed.
     */
    computeNewSelection () {
      this.selectedValues = []
      for (const option of this.$refs['selectValues'].options) {
        if (option.selected) {
          this.selectedValues.push(option.value)
        }
      }
    },
    /**
     * Emit the selected data when the button is pressed. Empty the selected data array.
     */
    sendDataToParent () {
      this.$emit('data-changed', this.selectedValues)
      this.selectedValues = []
    }
  }
}
</script>

<style scoped>

select.component-width {
  display: flex;
  width: 200px;
  height: 200px;
}

button.component-width {
  display: flex;
  width: 200px;
  text-align: center;
}

</style>
