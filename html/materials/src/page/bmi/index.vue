<template>
  <div class="BmiIndex">
    <van-nav-bar title="体脂">
    </van-nav-bar>
    <van-tabs @click="onClick" v-model="active" swipeable>
      <van-tab title="体重录入">
        <van-form @submit="onWeightSubmit">
          <van-field readonly clickable name="picker" :value="nicknamevalue" label="昵称" placeholder="点击选择昵称"
            @click="showNickNamePicker = true" :rules="[{ required: true, message: '请输入昵称' }]" />
          <van-popup v-model="showNickNamePicker" position="bottom">
            <van-picker show-toolbar :columns="nickColumns" @confirm="onConfirm" @cancel="showNickNamePicker = false" />
          </van-popup>
          <van-field readonly clickable :value="dateText" name="picker" label="日期" placeholder="点击选择日期"
            @click="showDatePickerClick" :rules="[{ required: true, message: '请输入昵称' }]" />
          <van-popup v-model="showDatePicker" position="bottom">
            <van-datetime-picker v-model="newDate" @confirm="onConDatefirm" @cancel="showDatePicker = false"
              type="month-day" title="选择月日" :formatter="formatter" />
          </van-popup>
          <van-field v-model="nowWeight" name="体重" label="体重" placeholder="体重"
            :rules="[{ required: true, message: '请输入当前体重' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="历史页">
        <span class="history_info">通过今天录入的昵称来查询历史</span>
        <div id="main" style="width:400px;height:300px;"></div>
      </van-tab>
      <van-tab title="信息录入页">
        <van-form @submit="onSubmit">
          <van-field v-model="username" name="姓名" label="姓名" placeholder="姓名"
            :rules="[{ required: true, message: '请输入姓名' }]" />
          <van-field v-model="nickname" name="密码" label="昵称" placeholder="昵称"
            :rules="[{ required: true, message: '请输入昵称' }]">
          </van-field>
          <van-field v-model="height" type="number" name="身高(cm)" label="身高(cm)" placeholder="身高(cm),计算BMI用"
            :rules="[{ required: true, message: '请输入身高(cm)，计算BMI用' }]" />
          <van-field v-model="hopeWeight" type="number" name="期望体重" label="期望体重" placeholder="期望体重"
            :rules="[{ required: true, message: '请输入期望体重' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="对比">对比</van-tab>
    </van-tabs>

  </div>
</template>

<script>
import axios from "@/utils/request";
import moment from 'moment'
import {
  NavBar,
  Form,
  Field,
  Tab,
  Tabs,
  Picker
} from 'vant';
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      username: "",
      nickname: "",
      height: "",
      hopeWeight: "",
      nowWeight: "",
      nickColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showNickNamePicker: false,
      date: "",
      showDatePicker: false,
      nicknamevalue: "",
      dateText: "",
      newDate: new Date()
      // minDate:"",
      // maxDate:"",

    };
  },
  mounted() {


  },
  methods: {
    onClick() {
      if (this.active == 1) {
        this.drawChart()
      }
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    formatter(type, val) {
      if (type === 'month') {
        return `${val}月`;
      } else if (type === 'day') {
        return `${val}日`;
      }
      return val;
    },
    showDatePickerClick() {

      this.showDatePicker = true;

    },
    onConDatefirm(value) {
      let firmDate = moment(value).format('YYYY-MM-DD HH:mm:ss');
      let year = moment().year();
      let mon = firmDate.substring(5, 7)
      let day = firmDate.substring(8, 10)
      this.dateText = "" + year + "-" + mon + "-" + day
      this.showDatePicker = false;
    },
    onConfirm(value) {
      this.nicknamevalue = value;
      this.showNickNamePicker = false;
    },
    onWeightSubmit() {
      let parsam = {
        nicknamevalue: this.nicknamevalue,
        date: this.dateText,
        nowWeight: this.nowWeight
      }

    },
    onSubmit() {
      let params = {
        username: this.username,
        nickname: this.nickname,
        height: this.height,
        hopeWeight: this.hopeWeight
      }

    }

  },
};
</script>

<style scoped>
.BmiIndex {}

.history_info {
  font-size: 12px
}
</style>
