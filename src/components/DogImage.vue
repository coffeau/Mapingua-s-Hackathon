<template>
  <v-container class="dog-image mr-auto">
    <div class="box-img d-flex flex-grow-1 mt-n5">
      <div v-if="this.isEven === true" class="dog-img">
        <img class="img" src="../assets/avatar_dog.png" alt="Doguinho!" />
      </div>
      <div v-else class="dog-img right flex-grow-1 dog-img-right">
        <img class="img" src="../assets/avatar_dog.png" alt="Doguinho!" />
      </div>
    </div>

    <div class="dog-box d-flex flex-grow-1">
      <div v-if="this.isEven === true" class="box">
        <div class="box-subtitle">
          <h2 class="subtitle-dog">
            {{ dogs[index].nome }}
          </h2>
        </div>
      </div>
      <div v-else class="right box box-right flex-grow-1">
        <div class="box-subtitle">
          <h2 class="subtitle-dog">
            {{ dogs[index].nome }}
          </h2>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    isEven: Boolean,
    dogs: Array,
    index: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.dog-image {
  width: 50vw;
  margin: 0;
  padding: 0;
}

.box {
  z-index: 3;

  box-sizing: border-box;
  width: 45vw;
  height: 10vh;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
  margin-top: 5vh;

  display: flex;
}

.box-right {
    max-width: 45vw;
    margin-left: auto;
  justify-content: flex-start;
  border-radius: 20px 0px 0px 20px;
}

.dog-img {
  position: relative;
  top: 10vh;
  z-index: 4;
  display: flex;
  margin-left: 14vw;
  
}

.dog-img-right {
  margin-left: calc((10vw + 26vw) - (9vh + 9vw));
}

.img {
  background: linear-gradient(
      0deg,
      rgba(199, 199, 222, 0.3),
      rgba(199, 199, 222, 0.3)
    ),
    #e6ff9d;
  border: 2px solid #000000;
  padding: 2.6vh;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  height: calc(9vh + 9vw);
  border-radius: 100px 100px;
}

.box-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(9vh + 9vw);
  margin-left: auto;
  margin-left: 14vw;
  height: 100%;
}

.box-right > .box-subtitle {
  margin-left: calc((26vw + 5vw) - (9vh + 9vw));
}

.subtitle-dog {
  margin-top: 3vh;
  font-family: "Amatic SC", cursive;
  font-weight: 700;
  font-size: 1.5rem;
}
</style>