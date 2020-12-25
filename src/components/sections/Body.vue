<template>
  <section id="body">
    <Header />
    <div class="content">
      <div class="row">
        <div class="box"></div>
      </div>
      <div class="row">
        <div class="box box-mmr">
          <h3 class="title">Current MMR</h3>
          <h1>20.000</h1>
          <h4>December 25, 2020</h4>
        </div>
        <div class="box box-graphic">
          <h3 class="title">Wins vs. Losses</h3>
          <div class="test"></div>
        </div>
        <div class="box box-graphic">
          <h3 class="title">MMR Evolutions</h3>
          <div class="test"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../elements/Header";

export default {
  name: "Body",
  components: {
    Header,
  },
};
</script>

<style scoped>
#body {
  min-height: 100vh;
  width: 82vw;
  margin-left: var(--menu-width);
}

div.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 10px;
  padding-right: 10px;
}

.box {
  position: relative;
  width: calc(41vw - 30px);
  margin: 0px 10px;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.box .title {
  font-size: 18px;
  font-weight: 500;
}

.box-mmr {
  text-align: center;
}

.box-mmr h1 {
  font-size: 45px;
  line-height: 70px;
  font-weight: 600;
  color: rgba(31, 102, 121, 1);
}

.box-mmr h4 {
  font-size: 18px;
  font-weight: 300;
  color: rgba(150, 160, 180, 1);
}

div.test {
  height: 180px;
  margin-top: 10px;
  background-color: blue;
}
</style>
