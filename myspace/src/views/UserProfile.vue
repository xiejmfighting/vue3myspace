<template>
    <Content>
      <div class="row">
        <div class="col-3">
            <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
            <UserProfileWrite @post_a_post="post_a_post"></UserProfileWrite>
        </div>
        <div class="col-9">
            <UserProfilePost :posts="posts"></UserProfilePost>
        </div>
      </div>
    </Content>
    </template>
    
    <script>
  
    import Content from '../components/Content';
    import UserProfileInfo from '../components/UserProfileInfo.vue';
    import UserProfilePost from '../components/UserProfilePost';
    import { reactive } from 'vue';
    import UserProfileWrite from '../components/UserProfileWrite';
    //每一个vue都会导出一个对象
    export default {
      name: 'UserProfile',
      components: {//表示template中用到的所有组件都放在components中
       Content,UserProfileInfo,UserProfilePost,UserProfileWrite
      },
      setup(){
        const user=reactive({
          id:1,
          username:"400lux",
          lastname:"xie",
          firstname:"jiamei",
          followcount:0,
          is_followed:false,
        });

        const posts=reactive({
          count:3,
          posts:[
            {
              id:1,
              userId:1,
              content:"hh"
            },{
              id:2,
              userId:1,
              content:"hhh"
            },{
              id:3,
              userId:1,
              content:"hhhh"
            },
          ]
        });


        const follow=()=>{
          if(user.is_followed)return;
          user.is_followed=true;
          user.followcount++;
        };
        const unfollow=()=>{
          if(!user.is_followed)return;
          user.is_followed=false;
          user.followcount--;

        };

        const post_a_post=(content)=>{
  
          posts.count++;
          posts.posts.unshift({
            id:posts.count,
            userId:1,
            content:content,
          })
        }
        return {
          user,follow,unfollow,posts,post_a_post
        }
      }
    }
    </script>
    
    <style scoped>
    
    </style>