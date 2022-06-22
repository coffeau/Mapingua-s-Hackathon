<template>
  <div class="home-page overflow-y-auto">
    <MenuToggle :lista="lista" :To="'Home'" :add="true" :toggle="true"/>
    <v-row class="d-flex flex-row row-width">
      <div v-for="n in this.dogs.length" :key="n" class="d-flex template-dog">
        <DogImage :isEven="IsEven(n)" :dogs="dogs" :index="n - 1" />
      </div>
    </v-row>
    <NavBar class="nav-bar" />
  </div>
</template>

<script>
import DogImage from "../components/DogImage.vue";
import MenuToggle from "../components/MenuToggle.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { DogImage, MenuToggle, NavBar },
  data() {
    return {
      dogs: [
        { nome: "Cão 1", isEven: "" },
        { nome: "Cão 2", isEven: "" },
        { nome: "Cão 3", isEven: "" },
        { nome: "Cão 4", isEven: "" },
        { nome: "Cão 5", isEven: "" },
      ],
      lista: [
        { icon: "mdi-home", nome: "Home" },
        { icon: "mdi-account", nome: "Perfil" },
        { icon: "mdi-exit-to-app", nome: "Sair" },
      ],
    };
  },
  methods: {
    IsEven: function (index) {
      let new_index = index - 1;
      let resultado = new_index % 2;
      if (resultado == 0) {
        this.dogs[new_index].isEven = true;
        return true;
      } else {
        this.dogs[new_index].isEven = false;
        return false;
      }
    },
  },
};
</script>

<style scoped>
.template-dog {
  flex: 1 1;
  flex-direction: row-reverse;
}

.nav-bar {
  overflow: hidden;
  position: absolute;
  bottom: 0;
}

.row {
  margin: 0;
}

.row-width {
  width: 100vw;
}
.home-page {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: linear-gradient(145deg, #e6ff9dcc, #def2ea),
    linear-gradient(to bottom left, #ffffff, #e6ff9dcc);

  /* background: url(../assets/background-gradient2.png); */
}
</style>