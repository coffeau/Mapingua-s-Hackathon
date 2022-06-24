<template>
  <div class="home-page d-flex flex-column">
    <MenuToggle class="menu-toggle" :To="'Novo Cão'" :back="'Home'" />
    <FormText :img="'sim'" />
    <FormRadio />
    <FormText :input="true" :title="form[2].title" :isEven="true">Oi</FormText>
    <FormText :area="true" :title="form[3].title" :isEven="false"></FormText>
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
.menu-toggle{
  position: absolute;
}

.home-page {
  gap: 5vw;
  width: 100vw;
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