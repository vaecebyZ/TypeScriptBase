<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /><br />
    {{ hello }}<br />
    <button @click="add">+</button>
    {{user.name}}
    {{user.age}}
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  setup() {
    // 基本用法
    const hello = ref(1);
    const add = () => {
      hello.value++;
      user.age++;
    };
    const user = reactive({
      name:'sanka',
      age:18
    })

    return {
      hello,
      add,
      user
    };
  },
});
</script>
