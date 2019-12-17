import Card from '@/components/palette/card'
import {wxLoading, wxHideLoading} from '../../utils/wechat_api'

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
      let that = this
      wxLoading('保存图片中')
      wx.saveImageToPhotosAlbum({
        filePath: this.shareImg,
        success: res => {
          wxHideLoading()
          wx.showToast({
            title: '保存成功~',
            icon: 'none'
          })
        },
        fail: err => {
          wxHideLoading()
          wx.showToast({
            title: '保存失败T_T,您未授予权限',
            icon: 'none'
          })
          wx.showModal({
            title: '授权提示',
            content: '我想要保存图片相册',
            success: res => {
              if (res.confirm) {
                wx.openSetting({
                  success: res => {
                    if (res.authSetting['scope.writePhotosAlbum']) {
                      that.save(this.shareImg)
                    } else {
                      // preview([path])
                    }
                  }
                })
              } else if (res.cancel) {
                // preview([path])
              }
            }
          })
        }
      })
    },
    onImgOK (e) {
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      // console.log(e.mp.detail.path)
      // console.log(e.target.path)
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
