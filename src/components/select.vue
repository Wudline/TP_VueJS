<template>
    <select name="{{ SelectName }}" id="{{ SelectId }}">
      <option v-for="data in Array" :key="data.id">{{ data[0] }}</option>
    </select>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {}
  },
  methods: {
    setName () {
      return this.SelectName
    },
    setId () {
      return this.SelectId
    }
  }
}
</script>
