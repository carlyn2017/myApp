<template>
  <div class="hello">
    <div class="header">
      <van-nav-bar title="电影" left-text="返回" left-arrow>
        <van-icon name="search" slot="right"/>
      </van-nav-bar>

      <Loading v-show="isShow"></Loading>

      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in arr" :key="index">
          <img v-lazy="item.images.large"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="section">
      <ul>
        <li>
          <img src="../assets/bg.jpg" alt="">
          <p>{{title}}</p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">
          <router-link to='/'>发现</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="chat" dot>
          <router-link to='/FilmList'>影单</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="records" info="5">
          <router-link to='/PersonalCenter'>个人中心</router-link>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon, Lazyload, NavBar, Swipe, SwipeItem, Tabbar, TabbarItem} from 'vant'
  import Loading from './Loading'

  Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(NavBar).use(Icon);
  export default {
    name: 'HelloWorld',
    data() {
      return {
        active: 0,
        arr: [],
        isShow: true,
        imgUrl: '',
        title: '图片上'
      }
    },
    created: function () {
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then(res => {
        // console.log(res.body.subjects.slice(0,4))
        this.arr = res.body.subjects.slice(0, 4)
      })
    },
    components: {
      Loading: Loading
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header img {
    width: 100%;
    height: 200px;
  }

  .section {


  }
  .section ul li{
    list-style: none;
    height: 150px;
    position: relative;

  }
  .section img {
    width: 100%;
    height: 150px;

  }

  .section p {
    position: absolute;
    top: 70%;
    border: 1px solid red;
    width: 100%;
    color: rgba(255, 255, 255, 0.84);
  }
</style>
