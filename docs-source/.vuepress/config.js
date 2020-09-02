module.exports = {
	title: 'vue-sku-form',
	description: '基于 Vue & ElementUI 的电商 SKU 表单配置组件',
	base: '/vue-sku-form/',
	dest: 'docs',
	plugins: ['demo-container'],
	themeConfig: {
		search: false,
		displayAllHeaders: true,
		nav: [
			{
				text: 'Github',
				link: 'https://github.com/hooray/vue-sku-form'
			}
		],
		sidebar: [
			{
				title: '指南',
				collapsable: false,
				children: [
					'guide/',
					'guide/intro'
				]
			},
			{
				title: '示例',
				collapsable: false,
				children: [
					'examples/basic',
					'examples/separator',
					'examples/disabled',
					'examples/customize',
					'examples/recovery',
					'examples/batch',
					'examples/text',
					'examples/computed',
					'examples/required',
					'examples/validate',
					'examples/async-validate',
					'examples/validate-col',
					'examples/async-recovery'
				]
			}
		]
	}
}