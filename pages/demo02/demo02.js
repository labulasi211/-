// pages/demo02/demo02.js
//Page Object
Page({
  data: {
    num:0,
  },
//input处理
handleInput(e){
  console.log(e);
  console.log(e.detail.value);
  this.setData({
    num:e.detail.value,
  })
},
});