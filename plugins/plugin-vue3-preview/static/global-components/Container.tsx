// import { defineComponent, reactive, onMounted, createVNode } from 'vue';

/* export default defineComponent({
	name: 'Container',
	props: {},
	setup(props) {
		const state = reactive({});

		const methods = {};

		onMounted(() => {

		});

		return () => {
			return (
				<div class="vue3-container">
					component: Vue3Container
				</div>
			);
		};
	},
}); */

const Container = function (props) {
	console.log('props = ', props);
	return 'hello'
	return (<div>
		hello world
	</div>)
}

export default Container;