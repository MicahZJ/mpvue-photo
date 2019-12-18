<template lang="pug">
  div#wrapper
    painter(:customStyle="customStyle" @imgOK="onImgOK" :palette="template" :dirty="true")
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
