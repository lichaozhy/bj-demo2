<template>
	<div>
		<b-row class="py-3 h-100">
			<b-col cols="8">
				<h2>我的待办工作</h2><hr>
				<b-input-group>
					<b-form-input v-model="filter" placeholder="过滤关键字" />
					<b-input-group-append>
						<b-btn :disabled="!filter" @click="filter = ''">清除</b-btn>
						<b-form-checkbox-group
							buttons
							v-model="endingFilterSelected"
							:options="endingFilterOptions">
						</b-form-checkbox-group>
					</b-input-group-append>
				</b-input-group>

				<b-table class="my-3"
					ref="dataView"
					:current-page="currentPage"
					:per-page="10"
					striped
					:filter="endingFilter"
					hover
					:fields="filedsConfig"
					:items="list">
					<template slot="end" slot-scope="data">
						{{data.item.end === true ? '结束' : '未结束'}}
					</template>
					<template slot="startAt" slot-scope="data">
						{{data.item.startAt|formatDate}}
					</template>
					<template slot="endAt" slot-scope="data">
						{{data.item.endAt|formatDate}}
					</template>
					<!-- <template slot="comment" slot-scope="data">
						<p :title="data.item.comment">{{data.item.comment.substr(30)+'...'}}</p>
					</template> -->
					<template slot="action" slot-scope="data">
						<b-button
							variant="danger"
							size="sm"
							@click="remove(data.item)">删除</b-button>
					</template>
				</b-table>
				<b-pagination
					align="center"
					size="md"
					:limit="7"
					:total-rows="$refs.dataView&&$refs.dataView.filteredItems.length"
					v-model="currentPage"
					:per-page="10">
				</b-pagination>
			</b-col>

			<b-col cols="4" class="h-100">
				<b-card no-body class="h-100">
					<b-tabs card>
						<b-tab title="今日" active>
							<div ref="chart-today"></div>
						</b-tab>
						<b-tab title="本周">
							<div ref="chart-week"></div>
						</b-tab>
						<b-tab title="本月">
							<div ref="chart-month"></div>
						</b-tab>
						<b-tab title="本年">
							<div ref="chart-year"></div>
						</b-tab>
					</b-tabs>
				</b-card>
			</b-col>

		</b-row>
	</div>
</template>

<script>
import { randexp } from 'randexp';
import Highcharts from 'highcharts';

function randDay() {
    return parseInt(3600000 * 24 * 100 * Math.random());
}

function mockItem() {
    const startAt = new Date() - randDay();
    const endAt = startAt + randDay();

    return {
        end: Math.random() < 0.75,
        name: randexp(/\w{8,16}/),
        comment: randexp(/[\w\s]{70,90}/),
        startAt,
        endAt
    };
}

function mockItemList(startId = 1, length = 100) {
    let index = 0;
    const list = [];

    while (index < length) {
        const item = mockItem();

        item.id = startId + index++;

        list.push(item);
    }

    return list;
}

export default {
	data() {
		return {
			currentPage: 1,
			list: [],
			filter: '',
			endingFilterSelected: [true, false]
		}
	},
	computed: {
		filedsConfig() {
			return [
				{
					key: 'name',
					label: '名字',
					sortable: true
				},
				{
					key: 'end',
					label: '是否结束'
				},
				{
					key: 'startAt',
					label: '开始时间'
				},
				{
					key: 'endAt',
					label: '结束时间'
				},
				// {
				// 	key: 'comment',
				// },
				{
					key: 'action',
					label: '操作'
				}
			];
		},
		endingFilterOptions() {
			return [
        {text: '已解决', value: true},
        {text: '未解决', value: false}
			]
		},
		distribution() {
			const data = [0, 0, 0, 0, 0, 0, 0];

			this.list.forEach(item => {
				const day = new Date(item.startAt).getDay();

				data[day]++;
			});

			return data;
		},
		EPRate() {
			const length = this.list.length;

			const resolved = this.list.filter(item => {
				return item.end; 
			}).length;

			return [
				['Resolved', resolved],
				['Pending', length - resolved]
			];
		},
		ExpriedRate() {
			const now = Date.now();
			const length = this.list.length;

			const expired = this.list.filter(item => {
				return item.endAt < now 
			}).length;

			return [
				['Expired', expired],
				['Other', length - expired]
			];
		}
	},
	filters: {
		formatDate(val) {
			return new Date(val).toDateString();
		}
	},
	mounted() {
		this.updateMock();

		Highcharts.chart(this.$refs['chart-year'], {
			chart: {
				type: 'column'
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
		})

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
				zoomType: 'x'
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
				type: 'column'
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
		})

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
		})
	},
	methods: {
		endingFilter(data) {
			const endedFlag = this.endingFilterSelected.findIndex(selected => {
				return selected === data.end;
			}) !== -1;

			const keywordFlag = data.name.indexOf(this.filter) !== -1;

			return endedFlag && keywordFlag;
		},
		updateMock() {
			this.list = mockItemList();
		},
		remove(item) {
			const pos = this.list.findIndex($item => {
				return $item.id = item.id;
			})

			this.list.splice(pos, 1);
		}
	}
}
</script>
