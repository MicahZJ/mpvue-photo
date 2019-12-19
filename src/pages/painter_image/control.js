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
     * 获取图片
     */
    getShareImage (e) {
      this.shareImg = e
      console.log('img', this.shareImg)
    },

    /**
     * 获取用户信息后的回调
     * @param e
     */
    userInfoHandler (e) {
      console.log('获取信息', e)
    },

    /**
     * 保存图片
     */
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
