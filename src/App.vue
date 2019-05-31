<template lang="pug">
  #app(v-cloak)
</template>

<style lang="scss">
@import '../node_modules/ress/dist/ress.min.css';

#app {
  @include fullWidth;

  animation: cloak-in $ad-medium;
  color: $color-main;
  display: flex;
  flex-direction: column;
  font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', Verdana, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  min-height: 100vh;

  &[v-cloak] {
    opacity: 0;
  }

  @keyframes cloak-in {
    0% {
      opacity: 0;
    }
  }
}
</style>
