<template>
  <div class="home">
    <div class="header">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div v-bind:class="{pic:!flag}">
      <ul>
        <li v-for="(value,key) in filmobj">
          {{key}}:{{value}}
        </li>
      </ul>
      <p><input type="text" v-model="search">搜索</p>
      <ul>
        <li v-for="(item,index) in searchFun">{{index+1}}.{{item}}</li>
      </ul>

      <button v-on:click="change">改变</button>
      <button @click="count+=1">点赞</button>
      {{count}}次
      <div>{{date |dateformat}}</div>
      <div>{{name |capitalize}}</div>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="password-view">影单</van-tabbar-item>
        <van-tabbar-item icon="pending-orders">影单</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>

  </div>
</template>


<script>
  import Vue from 'vue'

Vue.filter("capitalize",function (value) {
  return value.charAt(0).toUpperCase()+value.substring(1)
})

  export default
  {
    name: "Home",
    data() {
      return {
        search:"",
        name:"cy",
        date:new Date(),
        klwgwklgwgk: "真是朱",
        flag: true,
        count: 0,
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        active: 0,
        filmobj: {
          name: '影片一',
          description: '好看'
        },
        films: [
          {
            name: '影片一',
            description: '好看'
          },
          {
            name: '雪山',
            description: '漂亮'
          },
          {
            name: '余海波',
            description: '是大概率'
          },
        ]
      }
    },
    mounted: function () {
      // this.getData();
    },
    computed:{
      searchFun:function () {
        var that = this;
        return this.films.filter(function(value){
          return value.name.indexOf(that.search)!=-1||value.description.indexOf(that.search)!=-1
        })
      }
    },
    methods: {
      getData: function () {
        var that = this;

        this.$axios.get("http://cache.video.iqiyi.com/jp/avlist/202861101/1/")
          .then(function (resp) {
            that.tableData = resp.data;
            that.totalDataNumber = (resp.data[0].totalNum); //数据的总条数,
          }).catch(function (err) {
          console.log(err);
        })

      },
      change: function () {
        this.filmobj.description = "我改了"
      },
      clickCount: function () {
        this.count += 1
      },

    },
    filters:{
      dateformat: function (value) {
          // console.log(value)
       return  value.getFullYear()+"年"+(value.getMonth()+1)+"月"+value.getDate()+"日"
        }
    }

  }
</script>

<style scoped>
  .header img {
    width: 100%
  }

  .pic {
    color: red;
  }

  ul li {
    text-align: left;
    padding: 3px 10px;
  }
</style>
