<template>
  <section>
    <a href="">
      <img src='../../assets/hearthstone-battlegrounds.png' alt="">
    </a>
    <Button type='button'>
      <i class="fas fa-plus"></i>
      Add new entry
    </Button>
    <div class='links'>
      <Button type='link'>
        <i class="fas fa-home"></i>
        Home
      </Button>
      <Button type='link'>
        <i class="far fa-chart-bar"></i>
        Charts
      </Button>
      <Button type='link'>
        <i class="fas fa-table"></i>
        Registers
      </Button>
      <Button type='link'>
        <i class="fas fa-users"></i>
        Heroes
      </Button>
      <Button type='link'>
        <i class="fas fa-cogs"></i>
        Settings
      </Button>
      <Button type='link'>
        <i class="fas fa-sign-out-alt"></i>
        Sign out
      </Button>
      
    </div>
  </section>
</template>

<script>
  import Button from '../elements/Button.vue';

  export default {
    name: 'Menu',
    components: {
      Button,
    }
  }
</script>

<style scoped>
  section {
    position: relative;
    height: 100%;
    width: var(--menu-width);
    background-color: var(--white-colour);
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }

  section img {
    width: 80%;
    margin: 0px 10% 40px;
  }

  section .links {
    margin-top: 40px;
  }
  section .links button {
    margin-bottom: 10px;
  }
</style>