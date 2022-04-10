<template>
  <td>
    <input type="checkbox" @change="$emit('row-state-changed', $event.target.checked)" id="checkbox"/>
    Prendre en compte ?
  </td>
</template>

<script>
/**
 * This component is a simple switch on which another component can listen for the state to change.
 * This component is mainly used to match the rule : "no more than 15 lines of html in each component"
 * see subject for more details.
 */
export default {
  name: 'ParamToggleSwitch'
}
</script>

<style scoped>

</style>
