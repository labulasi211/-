// pages/demo02/demo02.js
//Page Object
Page({
  data: {
    num: 0,
    gender:"",
    list:[
      {
        id:0,
        name:"🍎",
        value:"apple"
      },
      {
        id:1,
        name:"🍇",
        value:"grape"
      },
      {
        id:2,
        name:"🍌",
        value:"banana"
      }
    ],
    checklist:[],
  },
  //input处理
  handleInput(e) {
    console.log(e);
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value,
    })
  },
  handletap(e) {
    console.log(e);
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: (this.data.num - 0) + operation, //num是一个字符串，在js中可以通过(num-0)来强行将其转换为数值在与operation进行相应的运算
    })
  },
  GetPhoneNumber(e){
    console.log(e);
  },
  GetUserInfo(e){
    console.log(e);
  },
  radioChange(e){
    console.log(e);
    let gender=e.detail.value;
    this.setData({
      gender,
    })
  },
  handleItemChange(e){
    console.log(e);
    const checklist=e.detail.value;
    this.setData({
      checklist,
    })
  },
});