<template>
<footer>
  <font-awesome-icon icon="angle-double-up" id="icon" />
  <div id="nav">
    <router-link to="/" class="tab" exact>Home</router-link>
    <router-link to="/myprofile" class="tab" exact>My Profile</router-link>
    <router-link to="/gallery" class="tab" exact>Gallery</router-link>
    <router-link to="/contact" class="tab" exact>Contact</router-link>
    <p>© KENJI_MINEMOTO All rights reserved.</p>
  </div>
</footer>
</template>

<style scoped>
#nav {
  background-color: white;
  padding: 40px 0 50px 0;
  padding-left: 8%;
  text-align: left;
  margin-top: 0px;
  width: 100%;
}

#nav .tab {
  padding-left: 50px;
  font-weight:lighter;
  color: black;
  float: left;
}

#nav p {
  color: black;
  font-size: 10px;
  text-align: right;
  padding-right: 13%;
}

#nav a.router-link-exact-active {
  color: rgb(163, 163, 163);
}

#icon {
  margin-top: 100px;
  height: 30px;
  width: 30px;
  color: rgb(163, 163, 163);
}

</style>
