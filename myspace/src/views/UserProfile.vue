<template>
    <Content>
      <div class="row">
        <div class="col-3">
            <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
            <UserProfileWrite v-if="is_me" @post_a_post="post_a_post"></UserProfileWrite>
        </div>
        <div class="col-9">
            <UserProfilePost :posts="posts" :user="user" @delete_a_post="delete_a_post"></UserProfilePost>
        </div>
      </div>
    </Content>
    </template>
    
    <script>
  
    import Content from '../components/Content';
    import UserProfileInfo from '../components/UserProfileInfo.vue';
    import UserProfilePost from '../components/UserProfilePost';
    import { computed, reactive } from 'vue';
    import UserProfileWrite from '../components/UserProfileWrite';
    import { useRoute } from 'vue-router';
    import $ from 'jquery';
    import { useStore } from 'vuex';

   
    // //每一个vue都会导出一个对象
    export default {
      name: 'UserProfile',
      components: {//表示template中用到的所有组件都放在components中
       Content,UserProfileInfo,UserProfilePost,UserProfileWrite
      },
      setup(){

        const route=useRoute();
        const store=useStore();
        const userId=parseInt(route.params.userId);
        const user=reactive({});
        const posts=reactive({});
        $.ajax({
          url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",
          type:"GET",
          data:{
            user_id:userId,
          },
          headers:{
            'Authorization':'Bearer '+store.state.user.access,
          },
          success(resp){
            user.id=resp.id;
            user.username=resp.username;
            user.photo=resp.photo;
            user.followerCount=resp.followerCount;
            user.is_followed=resp.is_followed; 
          }

        });

        $.ajax({
          url:"https://app165.acapp.acwing.com.cn/myspace/post/",
          type:"GET",
          data:{
            user_id:userId,
          },
          headers:{
            'Authorization':'Bearer '+store.state.user.access,
          },
          success(resp){
            posts.count=resp.length;
            
            posts.posts=resp; 
          }


        });
        const follow=()=>{
          if(user.is_followed)return;
          user.is_followed=true;
          user.followerCount++;
        };
        const unfollow=()=>{
          if(!user.is_followed)return;
          user.is_followed=false;
          user.followerCount--;

        };

        const post_a_post=(content)=>{
  
          posts.count++;
          posts.posts.unshift({
            id:posts.count,
            userId:1,
            content:content,
          })
        };

        const delete_a_post=post_id=>{

          posts.posts=posts.posts.filter(post=>post.id!==post_id);
          posts.count=posts.posts.length;

        };


        const is_me=computed(()=>userId===store.state.user.id);
        return {
          user,follow,unfollow,posts,post_a_post,is_me,delete_a_post,
        }
      }
    }
    </script>
    
    <style scoped>
    
    </style>