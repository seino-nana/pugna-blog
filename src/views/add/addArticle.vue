<script setup>
import { ref, onMounted } from "vue";
import { MdEditor } from "md-editor-v3";
import {
  addTools,
  addArticle,
  uploadArticle,
  getArticleCate,
} from "@/api/blog.js";
import "md-editor-v3/lib/style.css";
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();
const article = ref({
  title: "",
  desc: "",
  category: [],
  content: "",
  imgUrl: "",
});
const cateList = ref([]);
onMounted(() => {
  getArticleCate().then((res) => {
    cateList.value = res.map((category) => {
      return {
        value: category.name,
        label: category.name,
      };
    });
  });
});
const add = () => {
  // 验证所有参数是否非空
  if (
    article.value.title &&
    article.value.desc &&
    article.value.content &&
    article.value.imgUrl &&
    article.value.category
  ) {
    // 所有参数都非空，调用 addArticle 方法
    article.value.category = JSON.stringify(article.value.category);
    addArticle(article.value).then((res) => {
      console.log(res);
      router.push({ name: "index" });
    });
  } else {
    // 如果有参数为空，输出错误信息或者执行其他逻辑
    console.log("请填写所有参数");
  }
};

const handleSuccess = (file) => {
  article.value.imgUrl = file;
  console.log(file);
};
const beforeUpload = (file) => {};
</script>

<template>
  <div class="addArticle">
    <div class="top">
      <div>
        <el-upload
          class="upload-demo"
          action="https://www.3154movie.cn/upload/avatar"
          method="post"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" color="#628259"
            >选择封面</el-button
          >
        </el-upload>
        <img
          v-if="article.imgUrl"
          :src="article.imgUrl"
          style="
            width: 156px;
            height: 100px;
            margin-top: 20px;
            border: 2px solid #ccc;
          "
        />
        <n-space vertical style="margin-top: 10px; width: 400px">
          <n-select
            v-model:value="article.category"
            :consistent-menu-width="false"
            multiple
            :options="cateList"
          />
        </n-space>
        <!-- <div class="input-wrapper">
          <input
            class="input-box"
            type="text"
            placeholder="Enter your category"
            v-model="article.category"
          />
          <span class="underline"></span>
        </div> -->
        <div class="input-wrapper">
          <input
            class="input-box"
            type="text"
            placeholder="Enter your title"
            v-model="article.title"
          />
          <span class="underline"></span>
        </div>
        <div class="input-wrapper2">
          <input
            class="input-box"
            type="text"
            placeholder="Enter your desc"
            v-model="article.desc"
          />
          <span class="underline"></span>
        </div>
      </div>
      <button class="button" @click="add">发布</button>
    </div>
    <MdEditor v-model="article.content" />
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.input-wrapper {
  position: relative;
  width: 200px;
  margin: 10px 0;
}
.input-wrapper2 {
  position: relative;
  width: 800px;
  margin: 10px 0;
}

.input-box {
  font-size: 16px;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  color: var(--theme-color);
  width: 100%;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--theme-color);
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.input-box:focus {
  border-color: var(--theme-color);
  outline: none;
}

.input-box:focus + .underline {
  transform: scaleX(1);
}

.button {
  height: 40px;
  --color: var(--theme-color);
  padding: 5px 40px;
  background-color: transparent;
  border-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
}

.button::before,
.button::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1s ease;
}

.button::before {
  top: -1em;
  left: -1em;
}

.button::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}

.button:hover::before,
.button:hover::after {
  height: 410px;
  width: 410px;
}

.button:hover {
  color: rgb(10, 25, 30);
}

.button:active {
  filter: brightness(0.8);
}
</style>