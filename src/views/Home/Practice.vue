<template>
  <div id="practice">
    <Header title="练习"></Header>
    <div class="cont">
      <ul>
        <li @click="tiku">
          <div>
            <writing-fluently theme="filled" size="24" fill="#31C2D5" />
          </div>
          <p>考点专练</p>
        </li>
        <li @click="juan">
          <div>
            <book-one
              theme="filled"
              size="24"
              fill="#F47184"
              :strokeWidth="2"
            />
          </div>
          <p>套卷练习</p>
        </li>
        <li @click="kashi">
          <div>
            <book-open
              theme="filled"
              size="24"
              fill="#E89A4C"
              :strokeWidth="2"
            />
          </div>
          <p>仿真考试</p>
        </li>
        <li @click="cuo">
          <div>
            <newspaper-folding
              theme="filled"
              size="24"
              fill="#E89A4C"
              :strokeWidth="2"
            />
          </div>
          <p>错题练习</p>
        </li>
        <li @click="ce">
          <div>
            <bookshelf
              theme="filled"
              size="24"
              fill="#55D595"
              :strokeWidth="2"
            />
          </div>
          <p>测评记录</p>
        </li>
        <li @click="shou">
          <div>
            <collection-files
              theme="filled"
              size="24"
              fill="#F9D195"
              :strokeWidth="2"
            />
          </div>
          <p>习题珍藏</p>
        </li>
      </ul>
    </div>
    <div class="foot">
      <h3>近期模考</h3>
      <h4>
        <span class="sp1">默认排序</span>
        <span class="sp2">时间</span>
      </h4>
      <div class="logo">
        <img src="../../assets/img/1.jpg" />
        <p>暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  WritingFluently,
  BookOne,
  BookOpen,
  NewspaperFolding,
  Bookshelf,
  CollectionFiles,
} from "@icon-park/vue";
import Header from "@/components/Header";
export default {
  components: {
    Header,
    WritingFluently,
    BookOne,
    BookOpen,
    NewspaperFolding,
    Bookshelf,
    CollectionFiles,
  },
  methods: {
    tiku(){
      this.$router.push({path:'/preface'})
    },
    juan(){
      this.$router.push({path:'/file'})
    },
    kashi(){
      this.$router.push({path:'/xam'})
    },
    cuo(){
      this.$router.push({path:'/mistakes'})
    },
    ce(){
      this.$router.push({path:'/appraisal'})
    },
    shou(){
      this.$router.push({path:'/enshrine'})
    }
  },
};
</script>
<style lang="scss" scoped>
#practice {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  > .cont {
    width: 95%;
    height: 3.6rem;
    background: white;
    margin: 0.2rem auto;
    border-radius: 0.1rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      li {
        width: 25%;
        height: 50%;
        text-align: center;
        div {
          margin-top: 0.3rem;
        }
        p {
          font-size: 0.3rem;
          color: #666;
          margin-top: 0.28rem;
        }
      }
    }
  }
  .foot {
    width: 100%;
    height: 5rem;
    background: white;
    margin-top: 0.3rem;
    overflow: hidden;
    h3 {
      font-size: 0.4rem;
      font-weight: 800;
      color: #7b7b7b;
      margin: 0.2rem 0 0 0.16rem;
    }
    h4 {
      font-size: 0.34rem;
      color: #7b7b7b;
      font-weight: 800;
      margin: 0.2rem 0.2rem 0 0.2rem;
      .sp1 {
        color: #ed7631;
      }
      .sp2 {
        float: right;
      }
    }
    .logo {
      width: 100%;
      height: 3.6rem;
      text-align: center;
      img {
        height: 80%;
      }
      p {
        font-size: 0.34rem;
        color: #7b7b7b;
        font-weight: 800;
      }
    }
  }
}
</style>
