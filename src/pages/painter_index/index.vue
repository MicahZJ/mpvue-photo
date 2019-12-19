<template lang="pug">
  div#painter-wrapper
    painter-box(v-if="false" :getCustomStyle="customStyle" :getTemplate="template" @sendShareImage="getShareImage")
    div.painter-box
      img.background-css(:src="demoImage" mode="widthFix")
      img.icon-css(:src="demoIcon" mode="widthFix")
    button(@click="") 预览
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
