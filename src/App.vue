<template>
  <div id="app">
    <Menu />
    <Body />
  </div>
</template>

<script>
import Menu from "./components/sections/Menu.vue";
import Body from "./components/sections/Body.vue";

export default {
  name: "App",
  components: {
    Menu,
    Body,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

:root {
  --background-colour: #f5f6fa;
  --white-colour: #ffffff;

  --menu-width: 18%;
  --body-width: 82%;
}

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

#app {
  background-color: var(--background-colour);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
}
</style>
