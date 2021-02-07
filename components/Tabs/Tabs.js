// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    },
    tabs:{
      type:Array,
      value:[]
    }
  },



  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      console.log(e);
      // const tabs=this.data.tabs;
      const data=e.currentTarget.dataset.index;
      this.triggerEvent("itemChange",data);

      // for(let i=0,lenI=tabs.length;i<lenI;++i)
      //   tabs[i].isActive=false;
      // for(let j=0,lenJ=tabs.length;j<lenJ;++j){
      //   if(tabs[j].id==data){
      //      tabs[j].isActive=true;
      //      break;
      //   }
      // }
      // this.setData({
      //   tabs
      // })
    }
  }
})
