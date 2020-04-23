<template lang="pug">
  div(class="container")
    UserAvatar
    Description

</template>

<script>
import Description from '../components/Description.vue';
import UserAvatar from '../components/UserAvatar.vue';

export default {
  name: 'Home',
  components: {
    UserAvatar,
    Description,
  },
};
</script>
<style lang="scss">
  .container {
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
  }
</style>
