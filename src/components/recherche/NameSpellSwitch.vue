<template>
  <h3 v-on:click="$emit('desc-state-changed', $event.target.click)" id="spellName">{{ spellName }}</h3>
</template>

<script>
export default {
  name: 'NameSpellSwitch',
  props: ['spellName']
}
</script>
