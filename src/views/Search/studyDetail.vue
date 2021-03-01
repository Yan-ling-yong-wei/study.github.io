<template>
  <div class="bottom">
    <div @click="show = true">
      查看评价
    </div>
    <div @click="toDetail">
      课程详情
    </div>
    <div>
      移除列表
    </div>
    <van-popup v-model="show" @close="handleClose">
      <div>星级：<van-rate v-model="grade" /></div>
      <div>内容：<textarea v-model="content"></textarea></div>
    </van-popup>
  </div>
</template>

<script>
import { getComment, setComment } from "../../utils/api"
export default {
  data() {
    return {
      show: false,
      grade: 0,
      content: "",
    }
  },
  created() {
    getComment(this.$route.query.course_id).then((res) => {
      // console.log(res)
      this.grade = res.grade
      this.content = res.content
    })
  },
  methods: {
    handleClose() {
      setComment({
        content: this.content,
        grade: this.grade,
        course_id: this.$route.query.course_id,
        type: 1,
      }).then((res) => {
        // console.log(res)
      })
    },
    toDetail() {
      console.log(this.$route.query.course_id)
      this.$router.push({
        path: "/courDetail",
        query: {
          id: this.$route.query.course_id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.28rem;
  line-height: 0.8rem;
}
/deep/.van-popup--center {
  padding: 0.4rem;
  width: 90%;
  border-radius: 0.1rem;
}
</style>
