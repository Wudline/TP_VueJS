<template>
  <h3 @click="$emit('desc-state-changed', $event.target.onclick)" id="spellName">{{ spellName }}</h3>
</template>

<script>
export default {
  name: 'NameSpellSwitch',
  props: ['spellName']
}
</script>
