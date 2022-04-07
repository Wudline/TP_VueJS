<template>
  <div id="app">
    <router-view />
    <Recherche/>
  </div>
</template>

<script>
import Config from './components/Config'
import Recherche from './components/Recherche'

export default {
  name: 'App',
  components: {
    Recherche,
    Config
  }
}
</script>
