<template>
  <div class="form-text d-flex mr-auto mb-0 mt-5">
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
        <div class="edit-icon" @click="showPopUp = !showPopUp">
          <img src="@/assets/icone-lapis.png" alt="Lápis" class="pencil-icon" />
        </div>
      </div>

      <div class="form-box">
        <div
          v-if="this.isEven === true"
          class="box d-flex flex-column align-start"
        >
          <h6 v-if="this.title" class=" mt-n6 titulo font-weight-bold">
            {{ title }}
          </h6>
          <div v-if="this.area" class=" text-this.">
            <v-textarea name="textArea" label="" v-model="escritaUsuario"></v-textarea>
          </div>
          <div v-else-if="this.input" class="text-input black--text font-weight-bold">
            <v-text-field v-model="escritaUsuario" label=""></v-text-field>
          </div>
        </div>
        <div v-else class="right box box-right flex-column align-start">
          <h6 v-if="this.title" class="mt-n6  titulo font-weight-bold">
            {{ title }}
          </h6>
          <div v-if="this.area" class=" text-area right">
            <v-textarea name="textArea" label="" v-model="escritaUsuario"></v-textarea>
          </div>
          <div v-else-if="this.input" class=" text-input right">
            <v-text-field label=""></v-text-field>
          </div>
        </div>
      </div>
      <DialogForm @fecharPopUp="showPopUp = false" :showPopUp='showPopUp'/>
    </div>
  </div>
</template>

<script>
import DialogForm from '../Form/DialogForm.vue'
export default {
  components: { DialogForm },
  props: {
    isEven: Boolean,
    msg: String,
    title: String,
    img: String,
    area: Boolean,
    input: Boolean
  },
  data() {
    return {
      escritaUsuario: "",
      showPopUp: false
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.form-text {
  width: 100vw;
}

.box {
  display: table;
  box-sizing: border-box;
  width: 90vw;
  height: 10vh;
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
  margin-right: 0;
}

.dog-img {
  overflow: hidden;
  top: 10vw;
  z-index: 4;
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

.dog-img-right {
  margin-left: calc(45vw - (15vh + 15vw) / 2);
}

.img {
  position: relative;
  width: 50%;
}

.form-img {
  position: relative;
  display: flex;
  top: 5vh;
  left: 5vw;
}

.edit-icon {
  width: 10vw;
  margin-left: -9vw;
  top: 100%;
  
}

.pencil-icon {
  z-index: 5;
  position: relative;
  width: 10vw;
  height: auto;
}

.box > .titulo {
  margin-left: 10vw;
  font-size: 1em;
}

.box-right > .titulo {
  margin-left: 0;
  margin-right: 10vw;
  font-size: 1em;
}

.text-input, .text-area{
  display: relative;
  margin-left: 10vw;
  width: 75vw;
  font-family: 'Amatic SC', sans-serif;
  font-weight: 700;
  font-size: 1.8vh;
}

.v-input{
  font-size: 1.58em;
}

</style>