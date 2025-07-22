<template>
  <div class="page-not-found">
    <div class="not-found">
      <h1>404</h1>
      <h3>Oops... page not found</h3>
      <h5>We don't know how you end up hear,please check spelling mistakes</h5>
    </div>
    <div class="not-found-footer">
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script setup>
import mommet from "moment";
const date = mommet().format("MMMM Do YYYY");
</script>

<style scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
.page-not-found .not-found {
  width: 90%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-not-found .not-found h1 {
  margin: 55px 30px;
  font-size: 80px;
  font-weight: 800;
}
.page-not-found .not-found h3 {
  font-size: 40px;
  font-weight: 600;
}
.page-not-found .not-found h5 {
  margin-top: 40px;
  font-size: 29px;
  font-weight: 500;
}
.not-found-footer {
  margin-top: 50px;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  padding-top: 10px;
}
.not-found-footer span {
  font-size: 17px;
}
@media (max-width: 750px) {
  .page-not-found .not-found h3 {
    font-size: 20px;
  }
  .page-not-found .not-found h5 {
    font-size: 17px;
  }
  .not-found-footer span {
    font-size: 13px;
  }
}
</style>
