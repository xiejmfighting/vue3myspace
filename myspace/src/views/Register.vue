<template>
  <Content>
    <div class="row justify-content-md-center">
      <div class="col-4">
         <form @submit.prevent="register">
        <div class="mb-3">
          <label for="username" class="form-label">用户名</label>
          <input v-model="username" type="text" class="form-control" id="username" >
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密码</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
          <label for="password_confirm" class="form-label">确认密码</label>
          <input v-model="password_confirm" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="error-message">{{ error_message }}</div>
        <button type="submit" class="btn btn-primary">注册</button>
     </form>
      </div>
    </div>
   
  </Content>
  </template>
  
  <script>
  import Content from '../components/Content';
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import router from '@/router/index'
  import $ from 'jquery';
  //每一个vue都会导出一个对象
  export default {
    name: 'Register',
    components: {//表示template中用到的所有组件都放在components中
     Content,
    },
    setup(){
      const store=useStore();

      let username=ref('');
      let password=ref('');
      let error_message=ref('');
      let password_confirm=ref('');
      
      const register=()=>{
        error_message.value="";
       $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/user/",
        type:"POST",
        data:{
          username:username.value,
          password:password.value,
          password_confirm:password_confirm.value,

        },
        success(resp){
          if(resp.result==="success"){
            store.dispatch("login",{
            username:username.value,
            password:password.value,
            success(){
              router.push({name:'userlist'});

            },
            error(){
              error_message.value="系统异常，请稍后重试";

            },
          });
          }else{
            error_message.value=resp.result;
          }

        }
       })

      };

      return{
        username,password,error_message,register,password_confirm,
      }
    }
  }
  </script>
  
  <style scoped>
  button{

    width: 100%;

  }
  .error-message{

    color: red;
    margin-bottom: 10px;
    font-size: 11px;

  }
  </style>