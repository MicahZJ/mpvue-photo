<template lang="pug">
  div#mine-wrapper
    painter-box(:getCustomStyle="customStyle" :getTemplate="template" @sendShareImage="getShareImage")
    button(open-type="getUserInfo" @getuserinfo="userInfoHandler") 保存
</template>

<script src="./control.js"></script>

<style lang="stylus" src="./style.styl"></style>
