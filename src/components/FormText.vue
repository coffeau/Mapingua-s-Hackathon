<template>
    <div class="form-text">
        <div v-if="this.isOdd === true" class="form-img">
        </div>
        <div v-else class="form-img right">
        </div>
        
        <div class="form-box">
            <div v-if="this.isOdd === true" class="box">
            </div>
            <div v-else class="right box box-right ">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isOdd: Boolean
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.box{
    box-sizing: border-box;
    width: 46vw;
    height: 10vh;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
    
}

.box-right{
    transform: scaleX(-1);
}
.right{
    margin-left: 54vw;
}

.form-img{
    position: relative;
    top: 5vh;
    left:5vw;
    z-index:4;
}

</style>