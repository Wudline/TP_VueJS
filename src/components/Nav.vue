<template>
  <nav>
    <div class="container">
      <a v-on:click="changeContent('Config')">Config</a>
      <a v-on:click="changeContent('Recherche')">Recherche</a>
      <a v-on:click="changeContent('Stat')">Stat</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    changeContent (content) {
      this.$parent.content = content
    }
  }
}
</script>
