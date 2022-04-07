<template>
  <div id="content">
    <Config v-show="getContent() === 'Config'"></Config>
    <Recherche v-show="getContent() === 'Recherche'"></Recherche>
    <Stat v-show="getContent() === 'Stat'"></Stat>
  </div>
</template>

<script>
import Config from './Config.vue'
import Recherche from './Recherche.vue'
import Stat from './Stat.vue'

export default {
  name: 'Content',
  components: {
    Config,
    Recherche,
    Stat
  },
  methods: {
    getContent () {
      return this.$parent.content
    }
  }
}
</script>
