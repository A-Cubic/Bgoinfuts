var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
Page({
  data: {
    getData:{},
    applyRecordData:{},
    disabled: false,
  },
  
  onLoad: function () {
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    this.getMainInfo();
  },
  getMainInfo:function(){
    const that = this;
  //   app.Ajax(
  //     'User',
  //     'POST',
  //     'GetMainInfo',
  //     {  },
  //     function (json) {
  //       // console.log('ajson',json);
  //       if (json.success) {
  //         that.setData({
  //           getData: json.data
  //         })
  //       }else{
  //         app.Toast('', 'none', 3000, json.msg.code);
  //         // wx.showToast({
  //         //   title: json.msg.msg,
  //         //   icon: 'none',
  //         //   duration: 2500
  //         // });
  //       }
  //     }
  //   )
  },
  
  // 我的会员卡
  membershipCard: function (e) {
    wx.navigateTo({
      url: '../membershipCard/membershipCard',
    })
  },
  // 积分兑换
  giftCredits: function (e) {
    // wx.navigateTo({
    //   url: '../modifyBankcard/modifyBankcard',
    // })
  },

});


