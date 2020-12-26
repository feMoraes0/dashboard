<template>
  <div id="content-app">
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap");

:root {
  --background-colour: rgba(236, 241, 243, 1);
  --white-colour: #ffffff;

  --menu-width: 18vw;
  --body-width: 82vw;
}

html {
  overflow-x: hidden;
}

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

#content-app {
  background-color: var(--background-colour);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
