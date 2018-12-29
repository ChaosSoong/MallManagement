<template>
  <div id="layout">
    <el-row>
      <el-col :span="4">
        <left-menu></left-menu>
      </el-col>
      <el-col :span="20">
        <div class="right-content">
          <top-bar></top-bar>
          <app-main></app-main>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftMenu from "@/components/leftMenu";
import TopBar from "@/components/TopBar";
import AppMain from "@/components/AppMain";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    LeftMenu,
    TopBar,
    AppMain
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#layout {
  .left-menu {
    height: 100vh;
  }
  .right-content {
    height: 100vh;
    .nav-top {
      height: 50px;
      line-height: 50px;
      background-color: antiquewhite;
      margin-bottom: 2px solid #b2b2b2;
    }
  }
}
</style>
