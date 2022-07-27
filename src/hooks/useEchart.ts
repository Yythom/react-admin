/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

export interface useEchartOption {
	title?: string,
	x_option: {
		name?: string,
		data: string[] | number[],
		show?: boolean
	}
}
/** 
 * @param option   
 * splitLine 隐藏背景的网格线属性
 */
export interface sourceItem {
	name: string,
	list: number[] | number[][] | string[] | string[][],
	y_option?: Record<string, any>
}
// 获取最大值方法
function calMax(arr: any) {
	var max = Math.max.apply(null, arr); // 获取最大值方法
	var maxint = Math.ceil(max / 5); // 向上以5的倍数取整
	var maxval = maxint * 5 + 5; // 最终设置的最大值
	return maxval; // 输出最大值
}
// 获取最小值方法
function calMin(arr: any) {
	var min = Math.min.apply(null, arr); // 获取最小值方法
	var minint = Math.floor(min / 1); // 向下以1的倍数取整
	var minval = minint * 1 - 5; // 最终设置的最小值
	return minval; // 输出最小值
}
function useEchart(classname: string, option: useEchartOption,
	dataSoure: any
) {
	const [chart, setEChart] = useState<echarts.ECharts>();

	useEffect(() => {
		const dom: HTMLElement | null = document.querySelector('.' + classname)
		if (dom && dataSoure) {
			const series = []
			const yAxis = []
			const legend: any = []
			if (Array.isArray(dataSoure[0])) {
				dataSoure.forEach((e: any, i: number) => {
					e.forEach((element: any) => {
						const list = element?.list || []
						const name = element?.name || ''
						series.push({
							// symbol: 'none',
							showSymbol: false,
							data: list,
							name,
							type: 'line',
							yAxisIndex: i, // 两边y轴数据显示必须加
							valueFormatter: function (value: any) {
								return value + name;
							},
							smooth: true,
							...element?.y_option,
						})

						yAxis.push({
							type: 'value',
							name,
							splitLine: true,
							...element?.y_option,
						})
						legend.push(name)
					});
				})
			} else {
				if (dataSoure[0]) {
					const list = dataSoure[0]?.list || []
					const name = dataSoure[0]?.name || ''
					series.push({
						symbol: 'none',
						name: name,
						data: list,
						type: 'line',
						smooth: true,
						...dataSoure[0].y_option,
					})
					yAxis.push({
						type: 'value',
						name: name,
						splitLine: true,
						...dataSoure[0].y_option,
					})
					legend.push(name)
				}
			}
			if (!series[0]) return
			const myChart = echarts.init(dom, echart_theme);
			const opt = {
				title: {
					text: option?.title || ''
				},
				xAxis: [
					{
						...option.x_option,
						splitLine: true
					}
				],
				// 提示线条是哪根
				legend: {
					data: legend
				},
				yAxis,
				series,
				tooltip: {
					trigger: 'axis',
					//支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
					// formatter: "{c0}",
					// formatter: (p: any[]) => {
					// 	const str = p.map(e => {
					// 		const x = `${option?.x_option?.name || ''}: ${e.axisValue}`;
					// 		const y = `${e.value}`;
					// 		return `${x}`
					// 	}).join(' ')
					// 	return str
					// },
				},
			}
			console.log(opt);

			myChart.setOption(opt);
			setEChart(myChart);
		}
	}, [dataSoure])

	return [
		chart,
	]
}

const echart_theme: any = {
	"color": [
		"#c12e34",
		"#e6b600",
		"#0098d9",
		"#2b821d",
		"#005eaa",
		"#339ca8",
		"#cda819",
		"#32a487"
	],
	"backgroundColor": "rgba(0,0,0,0)",
	"textStyle": {},
	"title": {
		"textStyle": {
			"color": "#333333"
		},
		"subtextStyle": {
			"color": "#aaaaaa"
		}
	},
	"line": {
		"itemStyle": {
			"borderWidth": 1
		},
		"lineStyle": {
			"width": 2
		},
		"symbolSize": 4,
		"symbol": "emptyCircle",
		"smooth": false
	},
	"radar": {
		"itemStyle": {
			"borderWidth": 1
		},
		"lineStyle": {
			"width": 2
		},
		"symbolSize": 4,
		"symbol": "emptyCircle",
		"smooth": false
	},
	"bar": {
		"itemStyle": {
			"barBorderWidth": 0,
			"barBorderColor": "#ccc"
		}
	},
	"pie": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"scatter": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"boxplot": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"parallel": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"sankey": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"funnel": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"gauge": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		}
	},
	"candlestick": {
		"itemStyle": {
			"color": "#c12e34",
			"color0": "#2b821d",
			"borderColor": "#c12e34",
			"borderColor0": "#2b821d",
			"borderWidth": 1
		}
	},
	"graph": {
		"itemStyle": {
			"borderWidth": 0,
			"borderColor": "#ccc"
		},
		"lineStyle": {
			"width": 1,
			"color": "#aaaaaa"
		},
		"symbolSize": 4,
		"symbol": "emptyCircle",
		"smooth": false,
		"color": [
			"#c12e34",
			"#e6b600",
			"#0098d9",
			"#2b821d",
			"#005eaa",
			"#339ca8",
			"#cda819",
			"#32a487"
		],
		"label": {
			"color": "#eeeeee"
		}
	},
	"map": {
		"itemStyle": {
			"areaColor": "#ddd",
			"borderColor": "#eee",
			"borderWidth": 0.5
		},
		"label": {
			"color": "#c12e34"
		},
		"emphasis": {
			"itemStyle": {
				"areaColor": "#e6b600",
				"borderColor": "#ddd",
				"borderWidth": 1
			},
			"label": {
				"color": "#c12e34"
			}
		}
	},
	"geo": {
		"itemStyle": {
			"areaColor": "#ddd",
			"borderColor": "#eee",
			"borderWidth": 0.5
		},
		"label": {
			"color": "#c12e34"
		},
		"emphasis": {
			"itemStyle": {
				"areaColor": "#e6b600",
				"borderColor": "#ddd",
				"borderWidth": 1
			},
			"label": {
				"color": "#c12e34"
			}
		}
	},
	"categoryAxis": {
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisTick": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisLabel": {
			"show": true,
			"color": "#333"
		},
		"splitLine": {
			"show": false,
			"lineStyle": {
				"color": [
					"#ccc"
				]
			}
		},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": [
					"rgba(250,250,250,0.3)",
					"rgba(200,200,200,0.3)"
				]
			}
		}
	},
	"valueAxis": {
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisTick": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisLabel": {
			"show": true,
			"color": "#333"
		},
		"splitLine": {
			"show": true,
			"lineStyle": {
				"color": [
					"#ccc"
				]
			}
		},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": [
					"rgba(250,250,250,0.3)",
					"rgba(200,200,200,0.3)"
				]
			}
		}
	},
	"logAxis": {
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisTick": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisLabel": {
			"show": true,
			"color": "#333"
		},
		"splitLine": {
			"show": true,
			"lineStyle": {
				"color": [
					"#ccc"
				]
			}
		},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": [
					"rgba(250,250,250,0.3)",
					"rgba(200,200,200,0.3)"
				]
			}
		}
	},
	"timeAxis": {
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisTick": {
			"show": true,
			"lineStyle": {
				"color": "#333"
			}
		},
		"axisLabel": {
			"show": true,
			"color": "#333"
		},
		"splitLine": {
			"show": true,
			"lineStyle": {
				"color": [
					"#ccc"
				]
			}
		},
		"splitArea": {
			"show": false,
			"areaStyle": {
				"color": [
					"rgba(250,250,250,0.3)",
					"rgba(200,200,200,0.3)"
				]
			}
		}
	},
	"toolbox": {
		"iconStyle": {
			"borderColor": "#06467c"
		},
		"emphasis": {
			"iconStyle": {
				"borderColor": "#4187c2"
			}
		}
	},
	"legend": {
		"textStyle": {
			"color": "#333333"
		}
	},
	"tooltip": {
		"axisPointer": {
			"lineStyle": {
				"color": "#cccccc",
				"width": 1
			},
			"crossStyle": {
				"color": "#cccccc",
				"width": 1
			}
		}
	},
	"timeline": {
		"lineStyle": {
			"color": "#005eaa",
			"width": 1
		},
		"itemStyle": {
			"color": "#005eaa",
			"borderWidth": 1
		},
		"controlStyle": {
			"color": "#005eaa",
			"borderColor": "#005eaa",
			"borderWidth": 0.5
		},
		"checkpointStyle": {
			"color": "#005eaa",
			"borderColor": "#316bc2"
		},
		"label": {
			"color": "#005eaa"
		},
		"emphasis": {
			"itemStyle": {
				"color": "#005eaa"
			},
			"controlStyle": {
				"color": "#005eaa",
				"borderColor": "#005eaa",
				"borderWidth": 0.5
			},
			"label": {
				"color": "#005eaa"
			}
		}
	},
	"visualMap": {
		"color": [
			"#1790cf",
			"#a2d4e6"
		]
	},
	"dataZoom": {
		"backgroundColor": "rgba(47,69,84,0)",
		"dataBackgroundColor": "rgba(47,69,84,0.3)",
		"fillerColor": "rgba(167,183,204,0.4)",
		"handleColor": "#a7b7cc",
		"handleSize": "100%",
		"textStyle": {
			"color": "#333333"
		}
	},
	"markPoint": {
		"label": {
			"color": "#eeeeee"
		},
		"emphasis": {
			"label": {
				"color": "#eeeeee"
			}
		}
	}
}

export default useEchart