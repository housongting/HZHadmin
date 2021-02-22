<template>
  <div id="app">
    <!-- 视图容器 -->
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-size:16px;
}
#app,html,body{
  height:100%;
  width:100%;
}
.flex{
  display:flex;
}
.align_center{
  align-items:center
}
.justify_center{
  justify-content: center;
}
.ml_5{
  margin-left:5px;
}
.bg_white{
   background:#fff;
}
</style>
