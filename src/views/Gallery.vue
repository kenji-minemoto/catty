<template>
<div>
  <h2>Gallery</h2>
  <b-container>
    <b-row>
      <b-col>
        <div v-for="item in items" :key="item" class="images">
          <b-img thumbnail fluid :src="item.imageUrl" alt="Image 1"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { imageUrl: require('@/assets/images/1.png') },
        { imageUrl: require('@/assets/images/2.png') },
        { imageUrl: require('@/assets/images/3.png') },
        { imageUrl: require('@/assets/images/4.png') },
        { imageUrl: require('@/assets/images/5.png') },
        { imageUrl: require('@/assets/images/6.png') },
        { imageUrl: require('@/assets/images/7.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') },
        { imageUrl: require('@/assets/images/8.png') }
      ]
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  font-size: 50px;
  font-weight: 100;
}

.col {
  padding-left: 60px;
}

.images {
  margin: 0 auto;
  float: left;
  width: 250px;
  height: 250px;
}
</style>
