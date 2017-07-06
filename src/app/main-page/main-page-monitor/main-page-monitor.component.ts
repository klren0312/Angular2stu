import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page-monitor',
  templateUrl: './main-page-monitor.component.html',
  styleUrls: ['./main-page-monitor.component.scss']
})
export class MainPageMonitorComponent implements OnInit {


  // 设备分析折线图
  lineChart1= {
    color : ['#9966FF','#0099FF'],

		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['新接入设备','活跃设备']
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        color: ['#fff'],
		        data: ['6/26','6/27','6/28','6/29','6/30','07/01','07/02']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value}'
		        }
		    },
		    series: [
		        {
		            name:'新接入设备',
		            type:'line',
		            data:[1500, 3400, 4450, 2490, 3231, 1890, 4444],
		        },
		        {
		            name:'活跃设备',
		            type:'line',
		            data:[3423, 2690, 1230, 2090, 1490, 1399, 1420],
		        }
		    ]
  };

  // 用户分析折线图
  lineChart2= {
        color : ['#7EC856','#F9BF00'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['新用户','活跃用户']
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        color: ['#fff'],
		        data: ['6/26','6/27','6/28','6/29','6/30','07/01','07/02']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value}'
		        }
		    },
		    series: [
		        {
		            name:'新用户',
		            type:'line',
		            data:[2440, 2509, 3670, 2400, 2004, 2470, 2600],
		        },
		        {
		            name:'活跃用户',
		            type:'line',
		            data:[3423, 2690, 1230, 2090, 1490, 1399, 1420],
		        }
		    ]
  };

  //全国设备覆盖情况
  mapChart = {
        title: {
		        text: '全国覆盖情况',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    visualMap: {
		        min: 0,
		        max: 2500,
		        left: 'left',
		        top: 'bottom',
		        text: ['高','低'],           // 文本，默认为数值文本
		        calculable: true
		    },
		    series: [
		        {
		            name: 'alltheChina',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 2693 },
		                {name: '天津',value: 1000 },
		                {name: '上海',value: 1000 },
		                {name: '重庆',value: 1000 },
		                {name: '河北',value: 1000 },
		                {name: '河南',value: 1000 },
		                {name: '云南',value: 1000 },
		                {name: '辽宁',value: 1000 },
		                {name: '黑龙江',value: 1000 },
		                {name: '湖南',value: 1000 },
		                {name: '安徽',value: 1000 },
		                {name: '山东',value: 1000 },
		                {name: '新疆',value: 1000 },
		                {name: '江苏',value: 1000 },
		                {name: '浙江',value: 2930 },
		                {name: '江西',value: 1000 },
		                {name: '湖北',value: 1000 },
		                {name: '广西',value: 1000 },
		                {name: '甘肃',value: 1000 },
		                {name: '山西',value: 1000 },
		                {name: '内蒙古',value: 1000 },
		                {name: '陕西',value: 1000 },
		                {name: '吉林',value: 1000 },
		                {name: '福建',value: 1000 },
		                {name: '贵州',value: 1000 },
		                {name: '广东',value: 1806 },
		                {name: '青海',value: 1000 },
		                {name: '西藏',value: 1000 },
		                {name: '四川',value: 1000 },
		                {name: '宁夏',value: 1000 },
		                {name: '海南',value: 1000 },
		                {name: '台湾',value: 1000 },
		                {name: '香港',value: 1000 },
		                {name: '澳门',value: 1000 }
		            ]
		        }
		    ]
  };
  
  //接入设备类目占比
  pieChart = {
        color:['#1BB2D8', '#038CC4', '#75ABD0', '#AFD6DD', '#1790CF'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}占比 : {c} ({d}%)"
		    },
		    series : [
		    {
		       name: '',
		       type: 'pie',
		       radius : '55%',
		       center: ['50%', '60%'],
		       data:[
		            {value:1548, name:'安防'},
	      	      {value:310, name:'影院'},
	      	      {value:234, name:'照明'},
	      	      {value:135, name:'暖通空调'},
	      	      {value:334, name:'对讲'}
	         ],
		       itemStyle: {
		            emphasis: {
		               shadowBlur: 10,
		               shadowOffsetX: 0,
		               shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		       }
		   }]
  };
  
  //用户共享占比柱状图
  barChart = {
     color: ['#3398DB', '#9999FF'],
		        tooltip : {
		            trigger: 'axis',
		            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        grid: {
		            left: '3%',
		            right: '4%',
		            bottom: '3%',
		            containLabel: true
		        },
		        xAxis : [
		            {
		                type : 'category',
		                data : ['设备', '场景'],
		                axisTick: {
		                    alignWithLabel: true
		                }
		            }
		        ],
		        yAxis : [
		            {
		                type : 'value'
		            }
		        ],
		        series : [
		            {
		                name:'',
		                type:'bar',
		                barWidth: '60%',
		                data:[3398, 2091]
		            }
		        ]
  }

  constructor() { }

  ngOnInit() {
  }
}
