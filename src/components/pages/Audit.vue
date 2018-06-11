<template>
	<div class="py-3 overflow-auto">
		<h2>巡视审计</h2><hr>
		
		<b-input-group prepend="员工编号">
			<b-form-input></b-form-input>
			<b-input-group-append>
				<b-btn variant="success">查看</b-btn>
				<b-btn variant="primary">重置</b-btn>
			</b-input-group-append>
		</b-input-group>

		<b-row>
			<b-col cols="3" class="my-3">
				<b-card title="今日">
					<div ref="chart-today"></div>
				</b-card>
			</b-col>
			<b-col cols="3" class="my-3">
				<b-card title="本周">
					<div ref="chart-week"></div>
				</b-card>
			</b-col>
			<b-col cols="3" class="my-3">
				<b-card title="本月">
					<div ref="chart-month"></div>
				</b-card>
			</b-col>
			<b-col cols="3" class="my-3">
				<b-card title="本年">
					<div ref="chart-year"></div>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
	mounted() {

		Highcharts.chart(this.$refs['chart-year'], {
			chart: {
				type: 'column',
				height: 200
			},
			title:null,
			xAxis: {
				categories: [
					'一月',	'二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
				],
				crosshair: true
			},
			series: [{
				name: '东京',
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
			}, {
				name: '纽约',
				data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
			}, {
				name: '伦敦',
				data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
			}]
		});

		const series = [
			{
				type: 'line',
				name: '办结',
				data: []
			},
			{
				type: 'line',
				name: '待办',
				data: []
			},
			{
				type: 'line',
				name: '草稿',
				data: []
			},
		];

		let start = new Date().getTime();
		new Array(30).fill(0).forEach(() => {
			series[0].data.push([start, Math.ceil(Math.random() * 50)]);
			series[1].data.push([start, Math.ceil(Math.random() * 50)]);
			series[2].data.push([start, Math.ceil(Math.random() * 50)]);

			start += 3600 * 1000 * 24;
		});

		Highcharts.chart(this.$refs['chart-month'], {
			chart: {
				zoomType: 'x',
				height: 200
			},
			title: null,
			xAxis: {
				type: 'datetime'
			},
			legend: {
				enabled: false
			},
			series
		});

		Highcharts.chart(this.$refs['chart-week'], {
			chart: {
				type: 'column',
				height: 200
			},
			title:null,
			xAxis: {
				categories: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
				crosshair: true
			},
			series: [{
				name: '草稿',
				data: [49, 71, 106, 129, 144, 176, 135]
			}, {
				name: '办结',
				data: [83, 78, 98, 93, 106, 84, 105]
			}, {
				name: '待办',
				data: [48, 38, 39, 41, 47, 48, 59]
			}]
		});

		Highcharts.chart(this.$refs['chart-today'], {
			title: null,
			tooltip: {
				pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
			},
			chart: {
				height: 200
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			series: [{
				type: 'pie',
				data: [
					['草稿',   3],
					['办结',   10],
					['待办',   4]
				]
			}]
		});
	}
}
</script>
