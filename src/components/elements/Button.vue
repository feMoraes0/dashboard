<template>
  <button type="button" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
  computed: {
    buttonClass() {
      return this.type === "button" ? "btn-primary" : "btn-link";
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 23px;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(31, 102, 121, 1);
}

button svg {
  width: 20px !important;
  height: 20px !important;

  margin-right: 27px;
}

.btn-primary {
  background-color: rgba(221, 232, 235, 1);
}

.btn-link {
  background-color: transparent;
  color: #74798c !important;
  font-weight: 300 !important;
}

.btn-link svg {
  color: #74798c !important;
}
</style>
