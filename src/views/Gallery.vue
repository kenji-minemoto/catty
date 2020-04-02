<template>
<div>
  <h2>Gallery</h2>
  <Images />
</div>
</template>

<script>
import Images from '@/components/Images.vue'

export default {
  name: 'Gallery',
  components: {
    Images
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  font-size: 50px;
  font-weight: 100;
}
</style>
