<script setup>
import { ref, onMounted } from "vue";
import { addTools, addArticle } from "@/api/blog.js";
const data = ref({
  title: "",
  imgUrl: "",
  link: "",
  category_id: null,
  desc: "",
});

const add = () => {
  addTools(data.value).then((res) => {
    console.log(res);
    data.value = {};
  });
};
</script>

<template>
  <div class="index">
    <div class="form-container">
        <div class="form">
          <span class="heading">add</span>
          <input
            placeholder="title"
            type="text"
            class="input"
            v-model="data.title"
          />
          <input
            placeholder="imgUrl"
            type="text"
            class="input"
            v-model="data.imgUrl"
          />
          <input
            placeholder="link"
            type="text"
            class="input"
            v-model="data.link"
          />
          <input
            placeholder="category_id"
            type="number"
            class="input"
            v-model="data.category_id"
          />
          <textarea
            placeholder="desc"
            v-model="data.desc"
            rows="10"
            cols="30"
            id="message"
            name="message"
            class="textarea"
          ></textarea>
          <div class="button-container">
            <div class="send-button" @click="add">submit</div>
          </div>
        </div>
      </div>

  </div>
</template>

<style lang="scss" scoped>
.index {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.orange {
  color: #ff7a01;
}

.form-container {
  max-width: 400px;
  margin: 30px;
  background-color: var(--theme-color-1);
  padding: 30px;
  border-left: 5px solid #ff7a01;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    0 100%
  );
}

.heading {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.form-container .form .input {
  color: #87a4b6;
  width: 100%;
  background-color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  border-left: 1px solid transparent;
}

.form-container .form .input:focus {
  border-left: 5px solid #ff7a01;
}

.form-container .form .textarea {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #ff7a01;
  font-weight: bold;
  resize: none;
  max-height: 150px;
  margin-bottom: 20px;
  border-left: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-container .form .textarea:focus {
  border-left: 5px solid #ff7a01;
}

.form-container .form .button-container {
  display: flex;
  gap: 10px;
}

.form-container .form .button-container .send-button {
  flex-basis: 70%;
  background: #ff7a01;
  padding: 10px;
  color: #001925;
  text-align: center;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-container .form .button-container .send-button:hover {
  background: transparent;
  border: 1px solid #ff7a01;
  color: #ff7a01;
}

.form-container .form .button-container .reset-button-container {
  filter: drop-shadow(1px 1px 0px #ff7a01);
  flex-basis: 30%;
}

.form-container .form .button-container .reset-button-container .reset-button {
  position: relative;
  text-align: center;
  padding: 10px;
  color: #ff7a01;
  font-weight: bold;
  background: #001925;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%
  );
  transition: all 0.2s ease-in-out;
}

.form-container
  .form
  .button-container
  .reset-button-container
  .reset-button:hover {
  background: #ff7a01;
  color: #001925;
}
</style>