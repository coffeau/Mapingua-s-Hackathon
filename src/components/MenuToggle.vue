<template>
  <div class="menu-toggle">
    <v-app-bar permanent elevation="0" dense class="p-0 mt-2">
      <v-app-bar-nav-icon v-if="toggle" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon large v-else @click="irPara(back)" class="mr-2">mdi-arrow-left-thin</v-icon>

      <div class="nav-title">{{ To }}</div>
      <v-spacer></v-spacer>
      <div v-if="add" @click="acessarRequisicao" class="box-icon me-4 d-flex align-center justify-center">
        <v-icon>mdi-plus</v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#FFFFCC" absolute temporary>
      <v-list>
        <v-list-item-group
          v-model="selectedItem"
          active-class="black--text"
          class="ms-4"
        >
          <v-list-item v-for="(item, index) in lista" :key="index">
            <v-list-item-icon >
              <v-icon color="black" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="list-item-title"
                v-text="item.nome"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    props: {
        lista: Array,
        To: String,
        add: Boolean,
        toggle: Boolean,
        back: String
    },
  data: () => ({
    selectedItem: 0,
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods:{
    acessarRequisicao: function(){
      this.$router.push({path: '/Requisicao'})
    },
    irPara: function(route){
      this.$router.push({name:route})
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.nav-title {
  font-weight: 400;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: #000000;
}

.list-item-title {
  font-weight: 500;
  font-size: 1rem;
}

.v-list {
  margin: 30px 20px;
}

header.theme--light.v-app-bar.v-toolbar.v-sheet,
.theme--light.v-toolbar.v-sheet,
.theme--light.v-sheet {
  background-color: transparent;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}

.v-list-item-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}

.v-list-item__icon{
    margin-right: 10px;
}

.v-list-item{
    width:100%;
}

.box-icon{
  box-sizing: border-box;
  width: calc(3vw + 3vh);
  height: calc(3vw + 3vh);
  border: 1px solid black;
  border-radius: 100px;
  background-color: #E6FF9D;
}

</style>