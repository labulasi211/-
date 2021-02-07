// pages/demo07/demo07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      },
    ],
  },
  handleItemChange(e){
    console.log(e);
    const tabs=this.data.tabs;
    const data=e.detail;
    for(let i=0,lenI=tabs.length;i<lenI;++i)
      tabs[i].isActive=false;
    for(let j=0,lenJ=tabs.length;j<lenJ;++j){
      if(tabs[j].id==data){
         tabs[j].isActive=true;
         break;
      }
    }
    this.setData({
      tabs
    })
  }

})