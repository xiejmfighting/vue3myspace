<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                  <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/123273_lg_b26f0a3434.png" alt="">
                </div>
                <div class="col-9">
                    <div class="name">400lux</div>
                    <div class="fans">粉丝数:123</div>
                   <button type="button" class="btn btn-secondary btn-sm">+关注</button>
                </div>
            </div> 
        </div>
    </div>

</template>

<script>
export default{
    name:"UserProfileInfo",
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