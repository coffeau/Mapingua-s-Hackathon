<template>
  <div class="home-page d-flex flex-column overflow-y-auto">
    <MenuToggle class="menu-toggle" :To="'Novo Cão'" :back="'Home'" />
    <FormText :img="'sim'" />
    <FormRadio :title="form[1].title" :radioButton="form[1].radioButton" />
    <FormText :input="true" :title="form[2].title" :isEven="true" />
    <FormText :area="true" :title="form[3].title" :isEven="false" />

    <v-btn
      @click="mostrarAlert"
      rounded
      outlined
      width="calc(10vh + 7vw)"
      elevation="2"
      class="d-flex align-self-center botao"
      >Enviar</v-btn
    >

    <NavBar />
  </div>
</template>

<script>
import FormText from "../components/Form/FormText.vue";
import FormRadio from "../components/Form/FormRadio.vue";
import MenuToggle from "../components/MenuToggle.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { FormText, FormRadio, MenuToggle, NavBar },
  data() {
    return {
      form: [
        { nome: "Nome do Cachorro" },
        { title: "Porte", radioButton: ["Pequeno", "Médio", "Grande"] },
        { title: "Local da última vez visto" },
        { title: "Comentário (Opcional)" },
      ],
    };
  },
  methods: {
    mostrarAlert() { 
      this.$swal(
        "Obrigado!",
        "As informações do formulário serão recebidas pelos administradores, que irão procurar, avaliar e registrar o dog!",
        "info"
      )
      this.$router.push({
        name: 'Home'
      })
    },
  },
};
</script>

<style scoped>
.menu-toggle {
  position: absolute;
}

.botao {
  margin-bottom: 15vh;
  border: 1px solid black;
}

.home-page {
  gap: 5vw;
  width: 100vw;
  min-height: 100vh;
  background-repeat: repeat-y;
  background-color: white;
  background-position: bottom;

  background-image: radial-gradient(
      ellipse farthest-corner at 0vw 10vh,
      rgba(225, 239, 191, 1) 30%,
      rgba(1, 1, 1, 0) 48%
    ),
    radial-gradient(
      farthest-side at 90vw 40vh,
      rgba(223, 243, 235, 1) 40%,
      rgba(1, 1, 1, 0) 58%
    ),
    radial-gradient(
      ellipse farthest-corner at bottom right,
      rgba(225, 239, 191, 1) 30%,
      rgba(1, 1, 1, 0) 48%
    );
  /* background: url(../assets/background-gradient2.png); */
}

</style>