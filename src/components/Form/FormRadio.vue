<template>
  <div class="form-radio">
    <v-container fluid class="ps-0">
        <div class="titulo font-weight-bold m-0 mb-n4">{{ title }}</div>
      <v-radio-group v-model="selected">
        <v-radio 
        v-for="(item, index) in this.radioButton" :key="index"
        color="black" :label=item :value=item ></v-radio>
      </v-radio-group>
    </v-container>
  </div>
</template>

<script>
export default {
  props:{
    title: String,
    radioButton: Array
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>

<style scoped>
.form-radio{
    margin-left: 10vw;
}

.titulo{
  font-size: 1em;
}
</style>