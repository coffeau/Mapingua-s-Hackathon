<template>
  <v-bottom-navigation fixed app :value="pagSelecionada" color="black" grow class="nav-bar">
    <v-btn>
      <span class="text">Geral</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span class="text">Contatos</span>

      <v-icon>mdi-account-box-multiple</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ pagSelecionada: 0 }),
};
</script>

<style>
.nav-bar {
  z-index: 6;
}

.v-bottom-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid black;
}

.text {
  font-size: 0.6rem;
}
</style>