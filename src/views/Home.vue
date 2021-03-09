<template>
  <div class="home">
    <Header />
    <Comics />
  </div>
</template>

<script>

import Header from '../components/Header'
import Comics from '../components/Comics' 

export default {
  name: 'Home',
  components: {
    Header,
    Comics
  }
}
</script>
