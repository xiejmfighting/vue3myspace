<template>
<!-- //这个区域放置导航栏，导航栏组件在components/NavBar.vue中 -->
<NavBar/>

  <router-view :key="$route.fullPath"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar';

export default{
  name:"App",
  components:{
    NavBar,
  }
}

</script>

<style>

</style>
