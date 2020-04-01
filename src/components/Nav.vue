<template>
  <div id="nav">
    <router-link to="/" class="tab" exact>Home</router-link>
    <router-link to="/myprofile" class="tab" exact>Profile</router-link>
    <router-link to="/gallery" class="tab" exact>Gallery</router-link>
    <router-link to="/contact" class="tab" exact>Contact</router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px 100px 50px 0;
  text-align: right;
}

#nav .tab {
  padding-right: 50px;
  color: black;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: rgb(163, 163, 163);
}
</style>
