<template>
  <div id="app">
  				<div class="header">
  							<router-link  class="link" to="/list">用户列表</router-link>
  							<router-link class="link" to="/add">添加用户</router-link>
  				</div>
          <router-view></router-view>
  </div>
</template>

<script>
import {UiButton} from 'keen-ui';
export default {
  components:{
  		UiButton
  }
}
</script>

<style src="./assets/common.css"></style>
