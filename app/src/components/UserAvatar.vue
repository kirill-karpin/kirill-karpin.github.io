<template lang="pug">
  div(class="avatar" :style="{ backgroundImage: `url(${image})`}")
</template>

<script>
/* eslint-disable global-require */

export default {
  name: 'UserAvatar',
  data() {
    return {
      image: require('@/assets/img/photo.jpg'),
    };
  },
};
</script>

<style scoped lang="scss">
  .avatar {
    display: block;
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
</style>
