<template>
  <v-app>
    <div class="main d-flex align-center justify-end pb-5">
          <img src="@/assets/logo-cao.png" alt="Logo DogWatch" />

      <div class="btns">
        <h2>BEM VINDO AO IFCÃO</h2>
        <v-col>
          <div class="my-5">
            <v-btn @click="passarPagina('login')" color="#"> Login </v-btn>
          </div>
          <div>
            <v-btn @click="passarPagina('cadastro')" color="#">
              Cadastro
            </v-btn>
          </div>
        </v-col>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    passarPagina(nome) {
      this.$router.push({
        name: nome,
      });
    },
  },
};
</script>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  bottom: 0;

  background-size: cover;
  background-position: bottom;
  background-repeat: repeat-y;
  background-image: linear-gradient(145deg, #e6ff9dcc, #def2ea),
    linear-gradient(to bottom left, #ffffff, #e6ff9dcc);
}

h2 {
  color: #000000;
}

.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background-color: #deefb8;
  color: #000000;
  font-weight: 400;
  height: 50px;
  width: 23rem;
  border-radius: 60px;
  box-shadow: none;
  border-style: groove;
}

img{
  width: 50%;
  position: relative;
  align-self: center;
  margin-bottom: 15vh;
}

</style>
