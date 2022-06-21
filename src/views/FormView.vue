<template>
  <div class="home-page">
    <div v-for="n in this.form.length" :key="n" class="template-dog">
        <FormText :isOdd='IsOdd(n)'/>
    </div>
  </div>
</template>

<script>
import FormText from '../components/FormText.vue'
export default {
    components: { FormText },
    data(){
        return {
            form: [{isOdd: ''}, {isOdd: ''}, {isOdd: ''}, {isOdd: ''}]
        }
    },
    methods:{
        IsOdd: function(index){
            let new_index = index-1
            let resultado = new_index % 2
            if (resultado==0){
                this.form[new_index].isOdd = false
                return false
            } else{
                this.form[new_index].isOdd = true
                return true
            }
        }
    }
}
</script>

<style scoped>
.home-page{
    padding-top: 2vh;
    height: 100vh;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: linear-gradient(145deg, #E6FF9DCC, #DEF2EA), 
                        linear-gradient(to bottom left, #FFFFFF, #E6FF9DCC) ;

    /* background: url(../assets/background-gradient2.png); */} 

</style>