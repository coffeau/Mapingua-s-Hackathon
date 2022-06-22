<template>
  <div class="form-text d-flex mr-auto mb-0">
    <div class="d-flex flex-grow-1 flex-column">
      <div v-if="img" class="form-img align-end">
        <div
          v-if="this.isEven === true"
          class="dog-img align-center justify-center"
        >
          <img class="img" src="@/assets/avatar_dog.png" alt="Doguinho!" />
        </div>
        <div
          v-else
          class="dog-img right dog-img-right align-center justify-center"
        >
          <img class="img" src="@/assets/avatar_dog.png" alt="Doguinho!" />
        </div>
            <div class="edit-icon">
                <img src="@/assets/icone-lapis.png" alt="Lápis" class="pencil-icon">
            </div>
      </div>

      <div class="form-box">
        <div v-if="this.isEven === true" class="box d-flex flex-column align-start">
          <h6 v-if="this.title" class="title mt-n8 titulo font-weight-bold">
            {{ title }}
          </h6>
          <h6 class="title titulo">
            <slot></slot>
          </h6>
        </div>
        <div v-else class="right box box-right d-flex flex-column align-start">
          <h6 v-if="this.title" class="mt-n8 title titulo font-weight-bold">
            {{ title }}
          </h6>
          <h6 class="title">
            <slot></slot>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEven: Boolean,
    msg: String,
    title: String,
    img: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.form-text {
  width: 100vw;
}

.box {
  box-sizing: border-box;
  width: 90vw;
  height: 10vh;
  margin-bottom: 10vw;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
}

.box-right {
  border-radius: 20px 0px 0px 20px;
}

.right {
  margin-left: 10vw;
}

.dog-img {
  overflow: hidden;
  position: relative;
  top: 3vh;
  z-index: 5;
  display: flex;
  border: 2px solid #000000;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  width: calc(15vh + 15vw);
  height: calc(15vh + 15vw);

  background: linear-gradient(
      0deg,
      rgba(199, 199, 222, 0.3),
      rgba(199, 199, 222, 0.3)
    ),
    #e6ff9d;
}

.dog-img-right{
  margin-left: 20vw;
}

.img {
  position: relative;
  width: 50%;
}

.form-img {
  position: relative;
  top: 5vh;
  left: 5vw;
  
}

.edit-icon{
    width: 10vw;
    margin-left: 55vw;
    top: 100%;
    margin-top: -10px;
}

.pencil-icon{
    z-index: 5;
    position: relative;
    width: 10vw;
    height: auto;
}

  .box > .titulo{
    margin-left: 10vw;
  }

.box-right > .titulo{
  margin-left: 0;
  margin-right: 10vw;
}

</style>