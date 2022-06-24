<template>
  <div class="form-radio">
    <v-container fluid class="ps-0">
        <div class="titulo font-weight-bold m-0 mb-n4">Porte</div>
      <v-checkbox color="black" class="mb-n2"  v-model="selected" label="Pequeno" value="Pequeno"></v-checkbox>
      <v-checkbox color="black" class="mb-n2" v-model="selected" label="Médio" value="Médio"></v-checkbox>
      <v-checkbox color="black" class="mb-n2" v-model="selected" label="Grande" value="Grande"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
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