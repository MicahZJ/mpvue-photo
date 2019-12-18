<template lang="pug">
  div#mine-wrapper
    painter(:customStyle="customStyle" @imgOK="onImgOK" :palette="template" :dirty="true")
    button(@click="save()") 保存
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
