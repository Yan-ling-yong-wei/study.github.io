<template>
  <div>
    <div><Header title="性别" back /></div>
    <div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="女" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell title="保密" clickable @click="radio = '3'">
            <template #right-icon>
              <van-radio name="3" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="button_container">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import Vue from "vue";
import { RadioGroup, Radio } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);

export default {
  data() {
    return {
      radio: 0,
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.button_container {
  width: 100%;
  height: 1rem;
  button {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    width: 100%;
    height: 1rem;
    outline: none;
    border: 0px;
    background-color: #e21918;
    color: #fff;
    font-size: 0.3rem;
  }
}
</style>
