export default {
  data () {
    return {
      template: {}, // 参数
      customStyle: '', // 样式
      shareImg: '' // 图片
    }
  },
  watch: {},
  props: [],
  computed: {},
  methods: {
    /**
     * 生成图片参数
     */
    createAttributes () {
      this.template = {
        background: 'https://qhyxpicoss.kujiale.com/2018/06/12/LMPUSDAKAEBKKOASAAAAAAY8_981x600.png',
        width: '375px',
        height: '375px',
        borderRadius: '10px',
        views: [
          {
            type: 'image',
            url: 'https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q',
            css: {
              top: '48rpx',
              right: '48rpx',
              width: '192rpx',
              height: '192rpx',
              borderRadius: '10rpx',
              align: 'right'
            }
          },
          {
            type: 'qrcode',
            content: 'https://github.com/Kujiale-Mobile',
            css: {
              left: '70rpx',
              bottom: '30rpx',
              width: '130rpx',
              height: '130rpx'
            }
          },
          {
            type: 'text',
            text: '酷家乐 移动前端',
            css: {
              left: '50rpx',
              top: '48rpx',
              fontSize: '40rpx',
              align: 'left'
            }
          }
        ]
      }
    },

    /**
     * 图片生成
     * @param e
     */
    onImgOK (e) {
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      // console.log(e.mp.detail.path)
      // console.log(e.target.path)
    }
  },
  components: {},
  onLoad () {
    this.createAttributes()
  },
  onShow () {
  },
  onHide () {
  },
  onUnload () {
  }
}
