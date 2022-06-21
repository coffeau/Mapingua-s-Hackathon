<template>
  <div class="home-page">
    <v-row class="d-flex flex-row row-width">
    <div v-for="n in this.dogs.length" :key="n" class="template-dog">
        <DogImage :isOdd='IsOdd(n)' class="d-flex"/>
    </div>
    </v-row>
  </div>
</template>

<script>
import DogImage from '../components/DogImage.vue'
export default {
    components: { DogImage },
    data(){
        return {
            dogs: [{isOdd: ''}, {isOdd: ''}, {isOdd: ''}, {isOdd: ''}]
        }
    },
    methods:{
        IsOdd: function(index){
            let new_index = index-1
            let resultado = new_index % 2
            if (resultado==0){
                this.dogs[new_index].isOdd = true
                return true
            } else{
                this.dogs[new_index].isOdd = false
                return false
            }
        }
    }
}
</script>

<style scoped>
.row-width{
    width: 100vw;
}
.home-page{
    padding-top: 2vh;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: linear-gradient(145deg, #E6FF9DCC, #DEF2EA), 
                        linear-gradient(to bottom left, #FFFFFF, #E6FF9DCC) ;

    /* background: url(../assets/background-gradient2.png); */} 

</style>