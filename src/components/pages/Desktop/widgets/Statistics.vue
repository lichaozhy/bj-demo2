<template>
	<widget :object="object">
		<div ref="chart" class="charts h-100"></div>
	</widget>
</template>

<script>
import Widget from '../utils/renderer/Widget.vue';
import Highcharts from 'highcharts';

export default {
	components: {
		Widget
	},
	props: ['object'],
	mounted() {
		Highcharts.chart(this.$refs.chart, {
			
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


<style lang="less">

</style>
