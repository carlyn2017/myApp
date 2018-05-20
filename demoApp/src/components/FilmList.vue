<template>
  <div class="FilmList">
    <div class="note" :style="note"></div>
  </div>

</template>

<script>
  export default {
    name: 'FilmList',
    data: function () {
      return{
        msg:'这是影单',
        note:{
          backgroundImage: 'url(' + require('../assets/bg2.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          // backgroundSize: '25px auto',
          marginTop: '5px',
          width:'100%',
          height:'630px'
        }
      }
    }
  }
</script>

<style scoped>
  .FilmList{
    width:100%;
    display:-moz-box;
  }
.main{
  background-image:url("../assets/bg.jpg");
}
</style>
