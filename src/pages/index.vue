<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <div class="headShow">{{headShow}}</div>
      <div class="headThings">
        <div class="headImg">
          <img :src="headImg" alt />
        </div>
        <div class="word">
          <div>
            姓名：
            <span>{{name}}</span>
          </div>
          <div>
            年龄：
            <span>{{age}}</span>
          </div>
          <div>
            毕业学校：
            <span>{{school}}</span>
          </div>
          <div>
            学历：
            <span>{{study}}</span>
          </div>
          <div>
            专业：
            <span>{{study2}}</span>
          </div>
          <div>
            求职意向：
            <span>{{what}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div>
        <div class="showBar">
          <div style="width:40px;height:40px;">
            <img :src="icon1" alt />
          </div>
          <div style="margin-left:20px;">
            <span>{{headShow3}}</span>
          </div>
        </div>
        <div v-for="(item, index) in work" :key="index" class="item">
          <div class="first">
            <div style="color:#333;font-size:16px;">
              <span>{{item.date}}</span>
            </div>
            <div style="font-weight:600">
              <span>{{item.name}}</span>
            </div>
          </div>
          <div style="padding-left:20px;color:red;">
            职位：
            <span style="color:#333;">{{item.work}}</span>
          </div>
          <div style="padding-left:20px;color:red;">
            负责：
            <span style="color:#333;">{{item.work2}}</span>
          </div>
          <div style="padding-left:20px;color:red;">
            项目：
            <div v-for="(item2, index) in item.item" :key="index" style="color:#333;
            border-bottom:1px solid black;">
              <div class="itemThings">
                <div>{{item2.name}}</div>
                <div>{{item2.link}}</div>
              </div>
              <div>{{item2.msg}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="schoolBar">
        <div class="showBar">
          <div style="width:40px;height:40px;">
            <img :src="icon2" alt />
          </div>
          <div style="margin-left:20px;">
            <span>{{headShow4}}</span>
          </div>
        </div>
        <div class="first">
            <div style="color:#333;font-size:16px;">
              <span>{{sdate}}</span>
            </div>
            <div style="font-weight:600">
              <span>{{sname}}</span>
            </div>
          </div>
           <div style="padding-left:40px;color:red;">
            专业
            <span style="color:#333;">{{sstudy}}</span>
          </div>
      </div>
      <!-- 联系方式 -->
      <div style="margin-top:20px;background: turquoise;text-align:center;color:white;">
        <div class="headShow">{{headShow2}}</div>
        <div>
          <div>
            联系电话：
            <span>{{phone}}</span>
          </div>
          <div>
            微信：
            <span>{{wx}}</span>
          </div>
          <div>
            邮箱：
            <span>{{email}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headShow: "我的基本资料",
      headImg: require("../images/headImg.jpg"),
      name: "于家辉",
      age: "23",
      school: "黑龙江工程学院",
      study: "大学本科",
      study2: "物联网专业",
      what: "web前端工程师",
      headShow2: "我的联系方式",
      phone: "13351003782",
      wx: "h2444623541",
      email: "2444623541@qq.com",
      headShow3: "我的工作经历",
      icon1: require("../images/icon1.png"),
      icon2:require("../images/icon2.png"),
      headShow4:"我的教育层次",
      sdate:"2014.9-2018.6",
      sname:"黑龙江工程学院",
      sstudy:"物联网专业",
      work: [
        {
          date: "2019.3-2019.6",
          name: "哈尔滨链盟科技有限公司",
          work: "web前端工程师",
          work2:
            "主要负责网页pc端，移动端开发，微信小程序开发，产品使用说明书。",
          item: [
            {
              name: "申鲜生官网",
              link: "www.shenpinpin.cn",
              msg: "移动端网页设计与开发及pc端自适应开发"
            },
            {
              name: "申鲜生微信小程序",
              link: "微信小程序",
              msg: "部分页面开发"
            }
          ]
        },
         {
          date: "2019.7-至今",
          name: "黑龙江耕耘网络有限公司",
          work: "web前端工程师",
          work2:
            "主要负责网页pc端，移动端开发，微信小程序开发，微信公众号开发。",
          item: [
            {
              name: "艳姐便民驿站",
              link: "wethink.gengyunweb.com",
              msg: "微信公众号开发,移动端商城类网站,vue开发，已调完接口"
            },
            {
              name: "藏药",
              link: "soning.top/medic",
              msg: "微信公众号开发,移动端商城类网站,vue开发,静态页"
            },
            {
              name: "阿拉叮会员部落",
              link: "微信小程序",
              msg: "微信小程序开发,旅游商城类小程序,静态页"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.head {
 
}
.headShow {

  height: 50px;
  background: turquoise;
  text-align: center;
  font-size: 23px;
  line-height: 50px;
  color: white;
}
.headImg {
  width: 90px;
  height: 120px;
}
.headThings {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.word div {
  font-weight: 600;
}
.word span {
  color: #333;
}
.showBar {
  
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #666;
  padding: 0 20px;
}
.first {
  
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.itemThings {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.schoolBar {

}
</style>
