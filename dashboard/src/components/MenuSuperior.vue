
<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <!-- <router-link :to="{ name: 'user', params: { id: '1' } }">User</router-link>|
    <router-link :to="{ name: 'user', params: { id: '1' }, query: { search: 'test' } }">User Search</router-link> -->
  </div>
</template>
<script>
export default {
  name: 'MenuSuperior',
  props: {
    msg: String
  }
}
</script>