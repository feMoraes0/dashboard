<template>
  <button type='button' :class='style'>
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'button'
      }
    },
    computed: {
      style() {
        return this.type === 'button' ? 'btn-primary' : 'btn-link';
      }
    }
  }
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
    color: white;
  }

  button svg {
    width: 18px !important;
    height: 18px !important;
    color: white;
    margin-right: 27px;
  }

  .btn-primary {
    background-color: #0054FE;
  }

  .btn-link {
    background-color: transparent;
    color: #74798C !important;
    font-weight: 500 !important;
  }

  .btn-link svg {
    color: #74798C !important;
  }
</style>