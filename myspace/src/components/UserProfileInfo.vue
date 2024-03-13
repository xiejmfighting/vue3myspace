<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                  <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/123273_lg_b26f0a3434.png" alt="">
                </div>
                <div class="col-8">
                    <div class="name">{{ fullName }}</div>
                    <div class="fans">粉丝数: {{ user.followcount }}</div>
                   <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                   <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div> 
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';

export default{
    name:"UserProfileInfo",
    props:{
        user:{
            type:Object,
            required:true,
        },
    },
    setup(props,context){
        let fullName=computed(()=>props.user.lastname+' '+props.user.firstname);


        const follow=()=>{
            context.emit("follow");
        };
        const unfollow=()=>{
            context.emit("unfollow");
        }

        return{
            fullName,
            follow,unfollow,
        }
    }
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.name{
    font-weight: bold;
}
.fans{
    font-size: 12px;
    color: grey;
}
button{
    padding:2px 4px ;
    font-size: 12px;
}
</style>