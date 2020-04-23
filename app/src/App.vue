<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name : 'Home'}"> {{$t('nav.home')}} </router-link>
      |
      <router-link :to="{ name : 'About'}">  {{$t('nav.about')}} </router-link>
      |
      <router-link :to="{ name : 'Contacts'}"> {{$t('nav.contacts')}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./styles/index";
</style>
