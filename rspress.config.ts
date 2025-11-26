import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginPreview } from '@rspress/plugin-preview';

const injectConfig = {
	tags: [
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/vue/3.4.34/vue.global.prod.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/element-plus/2.8.5/index.full.min.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/@element-plus/icons-vue/2.3.1/global.iife.min.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/vue-router/4.2.5/vue-router.global.prod.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/axios/1.7.0/axios.min.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/element-plus/2.8.5/locale/zh-cn.min.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/@cs/element-pro/1.7.9/element-pro.iife.js',
			},
		},
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.yearrow.com/files/@cs/table-pro/1.0.6-beta/table-pro.iife.js',
			},
		},

		// css
		{
			tag: 'link',
			attrs: {
				rel: 'stylesheet',
				href: 'https://cdn.yearrow.com/files/@cs/element-pro/1.7.9/theme/yellow.css',
			},
		},
		{
			tag: 'link',
			attrs: {
				rel: 'stylesheet',
				href: 'https://cdn.yearrow.com/files/@cs/table-pro/1.0.6-beta/theme/green-index.css',
			},
		},
	],
};
export default defineConfig({
	root: path.join(__dirname, 'docs'),
	title: '组件使用文档',
	icon: 'https://cdn.yearrow.com/imgs/wmcp/wmcp-logo/wmcp.png',
	logo: {
		light: 'https://cdn.yearrow.com/imgs/img-logo/logo.png',
		dark: 'https://cdn.yearrow.com/imgs/wmcp/wmcp-logo/wmcp.png',
	},
	ssg: true,
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
	builderConfig: {
		html: injectConfig,

		plugins: [
			/* pluginBabel({
				include: /\.(?:jsx|tsx)$/,
			}), */
			pluginVue(),
			pluginVueJsx(),
			pluginLess(),
		],
		output: {
			assetPrefix: process.env.NODE_ENV === 'production' ? '/element-plus-extention/' : '/',
		},
		dev: {
			progressBar: true,
		},
	},
	plugins: [
		pluginPreview({
			previewLanguages: [ 'jsx', 'tsx', 'vue' ],
			iframeOptions: {
				// devPort: 7788,
				customEntry: ({ entryCssPath, demoPath }) => {
					if (demoPath.endsWith('.vue')) {
						return `
import { createApp } from 'vue';
import App from ${ JSON.stringify(demoPath) };
import ${ JSON.stringify(entryCssPath) };
createApp(App).mount('#root');
`;
					}
					return `
import { createRoot } from 'react-dom/client';
import ${ JSON.stringify(entryCssPath) };
import Demo from ${ JSON.stringify(demoPath) };
const container = document.getElementById('root');
createRoot(container).render(<Demo />);
`;
				},
				builderConfig: {
					html: injectConfig,
					plugins: [
						pluginVue(),
						/* pluginBabel({
							include: /\.(?:jsx|tsx)$/,
						}), */
						pluginVueJsx(),
						pluginLess(),
					],
					dev: {
						hmr: true,
						progressBar: true,
						writeToDisk: true,
						liveReload: true,
					},
					server: {
						host: '0.0.0.0',
					},
					performance: {
						buildCache: true,
						profile: true,
						printFileSize: true,
						removeMomentLocale: true,
					}
				},
			},
		}),
	],
});
