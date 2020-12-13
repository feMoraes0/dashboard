<template>
  <section>
    <a href="">
      <img src="../../assets/hearthstone-battlegrounds.png" alt="" />
    </a>
    <Button type="button">
      <PlusIcon />
      Add new entry
    </Button>
    <div class="links">
      <Button type="link">
        <HomeIcon />
        Home
      </Button>
      <Button type="link">
        <ChartIcon />
        Charts
      </Button>
      <Button type="link">
        <ListIcon />
        Registers
      </Button>
      <Button type="link">
        <PeopleIcon />
        Heroes
      </Button>
      <Button type="link">
        <SettingsIcon />
        Settings
      </Button>
      <Button type="link">
        <LogoutIcon />
        Sign out
      </Button>
    </div>
  </section>
</template>

<script>
import Button from "../elements/Button.vue";
import HomeIcon from "../icons/Home.vue";
import ChartIcon from "../icons/Chart.vue";
import ListIcon from "../icons/List.vue";
import PeopleIcon from "../icons/People.vue";
import SettingsIcon from "../icons/Settings.vue";
import LogoutIcon from "../icons/Logout.vue";
import PlusIcon from "../icons/Plus.vue";

export default {
  name: "Menu",
  components: {
    Button,
    HomeIcon,
    ChartIcon,
    ListIcon,
    PeopleIcon,
    SettingsIcon,
    LogoutIcon,
    PlusIcon,
  },
};
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
