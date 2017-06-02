<template>
  <section class="container">
    <div class="baby_wrap">
      <div class="inblock baby_img">
        <img src="/man.png"></img>
      </div>
      <div class="inblock baby">
        <div class="line_wrap">
          <div class="inblock name">名字呀</div>
          <div class="inblock date">2017-06-01</div>
        </div>
        <div class="line_wrap">
          <div class="inblock left">监护</div>
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
    <div class="cell_wrap">
      <div class="cell title">大项目标题</div>
      <div class="cell">
        <div class="inblock left">小项目标题</div>
        <div class="inblock right">
          <div class="inblock select activity">选项</div>
          <div class="inblock select">选项</div>
          <div class="inblock select">选项</div>
        </div>
      </div>
      <div class="cell">
        <div class="inblock left">小项目标题</div>
        <div class="inblock right">
          <div class="inblock select activity">选项</div>
          <div class="inblock select">选项</div>
          <div class="inblock select">选项</div>
        </div>
      </div>
      <div class="cell">
        <div class="inblock left">小项目标题</div>
        <div class="inblock right">
          <div class="inblock select activity">选项</div>
          <div class="inblock select">选项</div>
          <div class="inblock select">选项</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="less">
.container{
  min-height: 100vh;
  background-color: #e6eae3;
  padding:.4rem .6rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
.baby_wrap{
  background: #fff;
  font-size:0;
  text-align: left;
  padding: 0 .6rem .4rem; 
  margin-bottom: .5rem;
  box-shadow: 0 0.2rem 0.2rem -0.1rem #ced6c9;
  display: none;
  .baby_img{
    width: 30%;
    img{
      width: 100%;
    }
  }
  .baby{
    width: 70%;
    .line_wrap{
      font-size:0;
      .name{
        width: 30%;
      }
      .date{
        width: 70%;
      }
      .left{
        width: 30%;
      }
      .right{
        width: 70%;
        img{
          width: 1.2rem;
          height: 1.2rem;
          float: left;
        }
      }
    }
  }
}
.cell_wrap{
  background: #fff;
  font-size: 1rem;
  text-align: left;
  padding: 0 .6rem .4rem; 
  box-shadow: 0 0.2rem 0.2rem -0.1rem #ced6c9;
  .cell{
    height:2rem;
    line-height: 2rem;
    border-bottom: .01rem solid #dadfd5;
    font-size: 0;
  }
  .title{
    border-bottom: .1rem solid #989898;
    font-size: 1rem;
    font-weight: 600;
    color: #353535;
  }
  .left{
    width: 40%;
  }
  .right{
    width: 60%;
    text-align: right;
    color: #b4b4b4;
    .select{
      font-size: .9rem;
      height:1.4rem;
      line-height:1.4rem;
      padding: 0 .2rem;
      border: .01rem solid #ececec;
    }
    .activity{
      color:#00B140;
      border-color: #10ff10;
    }
  }

}

</style>
