<template>
  <v-app class="tudo">
    <v-flex>

        <div class="menu d-flex flex-column align-center justify-center">
          <img src="./chevron-back.png" alt="" srcset="" class="botao">
          <h3 class="titulo">CADASTRO</h3>
          
        </div>
        <hr/>
      <div class="main">  
        <div class="texto">
            <h1>Qual conta deseja <br> criar?</h1>
        </div>
          <div class="checkboxs">
            <v-col
            cols="3"
            sm="4"
            md="4"
          >
            <v-checkbox
              label="Estudante"
              color="blue"
              hide-details
            ></v-checkbox>

            <v-checkbox
              label="Monitor"
              color="blue"
              hide-details
            ></v-checkbox>

            <v-checkbox
              label="Administrador"
              color="blue"
              hide-details
            ></v-checkbox>
          </v-col>
          </div>

        <div id="botao1">
             <v-btn elevation="5" color="#E1EFBF" rounded @click="$emit('changePag2')">Avançar</v-btn>
        </div>
      </div>

    </v-flex>
  </v-app>
</template>

<script>

</script>

<style scoped>

h1 {
  margin-top: 100px;
}

.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 40vh;

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
}

#botao1{ 
    min-width: 100px;

}
.checkboxs {
  
  position: absolute
  
}

hr {
  border-color: black;
  
}

.texto {
  font-size: 20px;
}

img {
  position: relative;
  left: 0;
  margin-right: auto;
  width: 50px;
  height: 50px;
  display:inline-block;
  vertical-align:top;
}
h3 {
  position: absolute;
  margin-left: 50px;
}

.menu{
  max-height: 6vh;
}

</style>