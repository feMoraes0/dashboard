<template>
  <section id="body">
    <header>
      <span>
        <h2>Welcome back</h2>
        <h4>Hi, UserName.</h4>
      </span>
      <span>
        <button class="btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            />
            <path
              d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
            />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
        </button>
        <button class="btn-user">
          <span>F</span>
        </button>
      </span>
    </header>
  </section>
</template>

<script>
export default {
  name: "Body",
};
</script>

<style scoped>
#body {
  position: relative;
  height: 100%;
  width: var(--body-width);
}

header {
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

header h2 {
  font-weight: 600;
  font-size: 25px;
  line-height: 1.5;
}

header h4 {
  font-weight: 300;
  font-size: 19px;
  color: rgba(150, 160, 180, 1);
}

header span:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

header button.btn-icon {
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

header button.btn-user {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-colour);
}

header button.btn-user {
  font-size: 23px;
  font-weight: 600;
}
</style>
