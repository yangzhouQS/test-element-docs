import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginVue3Preview } from 'plugin-vue3-preview';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginPlayground } from '@rspress/plugin-playground';

export default defineConfig({
	root: path.join(__dirname, 'docs'),
	title: '组件使用文档',
	icon: 'https://cdn.yearrow.com/imgs/wmcp/wmcp-logo/wmcp.png',
	logo: {
		light: 'https://cdn.yearrow.com/imgs/img-logo/logo.png',
		dark: 'https://cdn.yearrow.com/imgs/wmcp/wmcp-logo/wmcp.png',
	},

	description: '组件使用参考文档',
	logoText: '云阙平台',
	mediumZoom: {
		selector: '.rspress-doc img',
	},
	themeConfig: {
		// outlineTitle: 'TOC',
		editLink: {
			docRepoBaseUrl: 'https://gitea.yearrow.com/yearrow/element-plus-extention/docs',
		},
		// enableContentAnimation: true, // 页面切换的转场动画
		// enableAppearanceAnimation: true, // 主题切换动画
		enableScrollToTop: true, // 启用滚动到顶部
		lastUpdated: true, // process.env.NODE_ENV === 'production',
		footer: {
			message: '© 2023-present yearrow.com',
		},
		socialLinks: [
			{
				icon: 'github',
				mode: 'link',
				content: 'https://gitea.yearrow.com/yearrow/element-plus-extention',
			},
		],
	},
	languageParity: {
		enabled: false,
		include: [],
		exclude: [],
	},
	builderConfig:{
		/* plugins: [
			pluginBabel({
				include: /\.(?:jsx|tsx)$/,
			}),
			pluginVue(),
			pluginVueJsx(),
			pluginLess(),
		], */
	},
	plugins: [
		pluginPreview({
			iframeOptions: {
				customEntry: ({ entryCssPath, demoPath }) => {
					if (demoPath.endsWith('.vue')) {
						return `
import { createApp } from 'vue';
import App from ${JSON.stringify(demoPath)};
import ${JSON.stringify(entryCssPath)};
createApp(App).mount('#root');
`;
					}
					return `
import { createRoot } from 'react-dom/client';
import ${JSON.stringify(entryCssPath)};
import Demo from ${JSON.stringify(demoPath)};
const container = document.getElementById('root');
createRoot(container).render(<Demo />);
`;
				},
				builderConfig: {
					plugins: [
						pluginVue(),
						/* pluginBabel({
							include: /\.(?:jsx|tsx)$/,
						}), */
						pluginVueJsx(),
						pluginLess(),
					],
				},
			},
			previewLanguages: ['jsx', 'tsx', 'vue'],
		}),
	],
});
