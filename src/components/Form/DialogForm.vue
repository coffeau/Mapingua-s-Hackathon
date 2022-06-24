<template>
  <div class="dialog-form text-center">
    <v-dialog v-model="this.showPopUp" width="80vw">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Alterar </v-card-title>
        <div class="box-form">
          <v-divider></v-divider>
          <v-card-title> Foto: </v-card-title>
          <div class="text-field">
            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              accept="image/png, image/jpeg, image/bmp"
              class="file-input"
            ></v-file-input>
          </div>

          <v-divider></v-divider>

          <v-card-title > Já tem um nome? (Opcional) </v-card-title>
          <div class="text-field">
            <v-text-field class="text-input"></v-text-field>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="$emit('fecharPopUp')">
              Atualizar
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: { showPopUp: Boolean },
  methods: {
    data() {
      return {};
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.text-field {
  width: 95%;
  font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
}
.box-form{
    margin-left: 5%;
    
}
.v-input{
  font-size: 2em;
}
</style>