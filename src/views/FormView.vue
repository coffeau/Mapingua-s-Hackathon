<template>
  <div class="home-page d-flex flex-column">
    <MenuToggle :To="'Novo Cão'" :back="'Home'" />
    <FormText :img="'sim'" />
    <FormRadio />
    <FormText :title="form[2].title" :isEven="true"></FormText>
    <FormText :title="form[3].title" :isEven="false"></FormText>
  </div>
</template>

<script>
import FormText from "../components/Form/FormText.vue";
import FormRadio from "../components/Form/FormRadio.vue";
import MenuToggle from "../components/MenuToggle"
export default {
  components: { FormText, FormRadio, MenuToggle },
  data() {
    return {
      form: [
        { nome: "Nome do Cachorro" },
        { },
        { title: "Local da última vez visto" },
        { title: "Comentário (Opcional)"}
      ],
    };
  },
};
</script>

<style scoped>

.home-page {
  gap: 5vw;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;

  background-position: top left;
  background: radial-gradient(
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