<template>
  <div class="background">
    <div class="image"><img
        src="http://pic1.win4000.com/wallpaper/2017-11-20/5a12b3c35cd8f.jpg"
        alt=""
      ></div>
    <div id="login-container">
      <div class="title">商城后台管理系统</div>
      <el-form>
        <el-form-item>
          <span class="span">用户名：</span>
          <el-input
            placeholder="请输入用户名"
            v-model="username"
            clearable
            size="24"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span class="span">密码：</span>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            clearable
            size="24"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-switch
            v-model="save_user"
            active-color="#13ce66"
            inactive-color="#b2b2b2"
            active-text="保存密码"
          >
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button
            type='primary'
            :loading="loading"
            @click="login"
          >
            登录
          </el-button>
          <el-button @click="reset">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, FormItem, Input, Switch, Button } from "element-ui";
Vue.use(Input);
Vue.use(Switch);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Button);
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      save_user: false,
      loading: false
    };
  },
  methods: {
    login() {
      const username = this.username;
      const password = this.password;
      const save_user = this.save_user;
      if (username) {
      } else {
        this.$message.error("请输入用户名");
        return;
      }
      if (password) {
      } else {
        this.$message.error("请输入密码");
        return;
      }
      this.$router.push({ path: "/dashboard" });
    },
    reset() {
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background {
  .image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
#login-container {
  width: 40%;
  margin: 150px auto;
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  el-form-item {
    margin-bottom: 20px;
    span {
      margin-bottom: 10px;
    }
  }
}
</style>
