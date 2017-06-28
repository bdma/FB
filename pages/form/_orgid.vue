<template>
  <section class="container">
    <div class="baby_wrap">
      <div class="inblock baby_img">
        <img src="/man.png"></img>
      </div>
      <div class="inblock baby">
        <div class="line_wrap">
          <div class="inblock name">王大路</div>
          <div class="inblock date">2017-06-01</div>
        </div>
        <div class="line_wrap">
          <div class="inblock left">监护人</div>
          <div class="inblock right">
            <img src="/man.png"></img>
            <img src="/man.png"></img>
            <img src="/man.png"></img>
            <img src="/man.png"></img>
            <img src="/man.png"></img>
            <img src="/man.png"></img>
          </div>
        </div>
      </div>
    </div>
    <div class="cell_wrap" v-for = "section in sections">
      <div class="cell title">{{section.sectionName}}</div>
      <!--v-if="item.type === 'radio'"-->
      <div class="cell" v-for="item in section.items" >
        <div class="inblock left">{{item.itemName}}</div>
        <div class="inblock right">
          <div v-if="item.type === 'radio'" v-bind:class="{activity: index === 0}" v-for="(option, index) in item.options" class="inblock select">{{option}}</div>
          <input v-if="item.type === 'input'" type="text" class="input">
          <input v-if="item.type === 'inputNumber'" type="number" class="input">
          <div v-if="item.type === 'noValue'" v-for="childItem in item.childItems" class="inblock ">
            <span >{{childItem.itemName}}</span>
            <input type="text" class="input normalInput" v-if="childItem.type === 'input'">
            <input type="number" class="input mininput" v-if="childItem.type === 'inputNumber'">
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
// import Logo from '~components/Logo.vue'
import axios from 'axios'
import API from '~assets/api.js'

export default {
  created () {
    this.getData()
  },
  components: {
  },
  data () {
    return {
      sections: []
    }
  },
  methods: {
    getData () {
      let self = this
      console.log('API.org:', API.org)
      console.log('self.$route.params.orgid:', self.$route.params.orgid)
      axios.get(API.org + self.$route.params.orgid)
        .then(function (response) {
          console.log('response:', response)
          let rsp = API.handleData(response)
          console.log('rsp:', rsp)
          self.sections = rsp.sections
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #e6eae3;
  padding: .4rem .6rem; // display: flex;
  // justify-content: center;
  // align-items: center;
}

.baby_wrap {
  background: #fff;
  font-size: 0;
  text-align: left;
  padding: 0 .6rem .4rem;
  margin-bottom: .5rem;
  box-shadow: 0 0.2rem 0.2rem -0.1rem #ced6c9; // display: none;
  .baby_img {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .baby {
    width: 70%;
    .line_wrap {
      font-size: 0;
      .name {
        width: 30%;
      }
      .date {
        width: 70%;
      }
      .left {
        width: 30%;
      }
      .right {
        width: 70%;
        img {
          width: 1.2rem;
          height: 1.2rem;
          float: left;
        }
      }
    }
  }
}

.cell_wrap {
  background: #fff;
  font-size: 1rem;
  text-align: left;
  padding: 0 .6rem .4rem;
  box-shadow: 0 0.2rem 0.2rem -0.1rem #ced6c9;
  margin-bottom: .3rem;
  .cell {
    // height: 2rem;
    line-height: 2rem;
    border-bottom: .01rem solid #dadfd5;
    font-size: 0;
  }
  .title {
    border-bottom: .1rem solid #989898;
    font-size: 1rem;
    font-weight: 600;
    color: #353535;
  }
  .left {
    width: 40%;
  }
  .right {
    width: 60%;
    text-align: right;
    color: #b4b4b4;
    .select {
      font-size: .9rem;
      height: 1.4rem;
      line-height: 1.4rem;
      padding: 0 .2rem;
      margin-left: .1rem;
      border: .01rem solid #ececec;
    }
    .activity {
      color: #00B140;
      border-color: #10ff10;
    }
    .input{
      padding: .2rem .5rem;
      border:.01rem solid #ececec;
    }
    .mininput{
      display: inline-block;
      width: 2rem;
          margin-left: .1rem;
    }
    .normalInput{
      display: inline-block;
      width: 5rem;
          margin-left: .1rem; 
    }
  }
}
</style>
