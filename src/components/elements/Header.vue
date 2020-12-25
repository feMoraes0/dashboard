<template>
  <section>
    <span>
      <h2>Welcome to dashboard</h2>
      <h4>Hi, UserName. Welcome back.</h4>
    </span>
    <span>
      <button class="btn-icon">
        <Moon />
      </button>
      <button class="btn-user">
        <span>F</span>
      </button>
    </span>
  </section>
</template>

<script>
import Moon from "../icons/Moon.vue";

export default {
  name: "Header",
  components: {
    Moon,
  },
};
</script>

<style scoped>
section {
  width: var(--body-width);
  padding: 30px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

section h2 {
  font-weight: 600;
  font-size: 25px;
  line-height: 1.5;
  color: rgba(31, 102, 121, 1);
}

section h4 {
  font-weight: 300;
  font-size: 19px;
  color: rgba(150, 160, 180, 1);
}

section span:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

section button.btn-icon {
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  cursor: pointer;
}

section button.btn-user {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-colour);
  font-size: 23px;
  font-weight: 600;
  color: rgba(31, 102, 121, 1);
}
</style>
