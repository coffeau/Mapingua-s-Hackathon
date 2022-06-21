<template>
        <div class="dog-image">
            <div v-if="this.isOdd === true" class="dog-img">
                <v-avatar>
                    <img class="img"
                        src="../assets/avatar_dog.png"
                        alt="Doguinho!">
                </v-avatar>
            </div>
            <div v-else class="dog-img right dog-img-right">
                <v-avatar>
                    <img class="img"
                        src="../assets/avatar_dog.png"
                        alt="Doguinho!">
                </v-avatar>
            </div>
            
            <div class="dog-box">
                <div v-if="this.isOdd === true" class="box ">
                </div>
                <div v-else class="right box box-right">
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
    width: 44vw;
    height: 14vh;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
    margin-top: 5vh;
}

.box-right{
    border-radius: 20px 0px 0px 20px;
    margin-left: 2vw;
}

.dog-img{
    position: relative;
    top: 13vh;
    z-index:4;
    left: 22vw;
}

.dog-img-right{
   left:  calc(-60px - 2vw + 22vw)
}

.img{
    background: linear-gradient(0deg, rgba(199, 199, 222, 0.3), rgba(199, 199, 222, 0.3)), #E6FF9D;
    border: 2px solid #000000;
    padding: 2vh;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    max-height: 120px;
    max-width: 120px;
    border-radius: 100px 100px;
}
</style>