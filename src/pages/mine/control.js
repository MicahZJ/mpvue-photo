import Card from '@/components/palette/card'

export default {
  data () {
    return {
      shareImg: '',
      customStyle: 'margin-left:40rpx',
      template: {}
    }
  },
  methods: {
    save () {
      console.log('on save click')
    },
    onImgOK (e) {
      console.log('123', e)
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      console.log(e.mp.detail.path)
      console.log(e.target.path)
    }
  },
  props: [],
  components: {
  },
  onLoad () {
    const card = new Card()
    const userInfo = {
      avatar: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q'
    }
    this.template = card.do(userInfo)
  },
  onShow () {
  },
  mounted () {
  },
  onHide () {
  },
  onUnload () {
  }
}
