<template>
    <Content>
      <div class="row">
        <div class="col-3">
            <UserProfileInfo></UserProfileInfo>
        </div>
        <div class="col-9">
            <UserProfilePost></UserProfilePost>
        </div>
      </div>
    </Content>
    </template>
    
    <script>
    import Content from '../components/Content';
    import UserProfileInfo from '../components/UserProfileInfo.vue';
    import UserProfilePost from '../components/UserProfilePost'
    //每一个vue都会导出一个对象
    export default {
      name: 'UserProfile',
      components: {//表示template中用到的所有组件都放在components中
       Content,UserProfileInfo,UserProfilePost
      }
    }
    </script>
    
    <style scoped>
    
    </style>