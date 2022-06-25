<template>
  <v-app class="cadastro-usuario">
    <div v-if="pag1">
         <!-- <v-btn depressed color="primary" @click="changePag2()">Cadastro</v-btn> !-->
         <Pagina1 @changePag2=changePag2()  />
    </div>

    <div v-if="pag2">
      2
      <v-btn depressed color="primary" @click="changePag3()">Cadastro</v-btn>
    </div>

    <div v-if="pag3">
      

      <v-btn depressed color="primary" @click="changePag4()">Cadastro</v-btn>
    </div>

    <div v-if="pag4">
      <div>AQUI VAI VIR AS COISAS DA ULTIMA PAGINA</div>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn depressed color="primary" @click="open(), irPara('Home')">Avançar</v-btn>
    </div>
  </v-app>
</template>

<script>
import Pagina1 from '../register/Pagina1.vue'
export default {
  components: { Pagina1 },
  data() {
    return {
      pag1: true,
      pag2: false,
      pag3: false,
      pag4: false,
      dialog: false,
    };
  },
  methods: {
    changePag1() {
      this.pag1 = true;
      this.pag2 = false;
      this.pag3 = false;
      this.pag4 = false;
    },
    changePag2() {
      this.pag1 = false;
      this.pag2 = true;
      this.pag3 = false;
      this.pag4 = false;
    },
    changePag3() {
      this.pag1 = false;
      this.pag2 = false;
      this.pag3 = true;
      this.pag4 = false;
    },
    changePag4() {
      this.pag1 = false;
      this.pag2 = false;
      this.pag3 = false;
      this.pag4 = true;
    },
    open() {
      this.dialog = true;
    },
    irPara(nome){
      this.$router.push({
        name:nome
      })
    }
  },
};
</script>
<style scoped>

.pag1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;;
}

</style>
