// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vue.js',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quickstart' },
						{ label: 'Vue 2 to Vue 3', slug: 'getting-started/migration-guide' },
						{ label: 'Changelog', slug: 'getting-started/versions' },
						

					],
				},
//The "essentials" category of this documentation begins here
				{
					label: 'Essentials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Class and Style Bindings', slug: 'essentials/class-and-style-bindings' },
						{ label: 'Components Basics', slug: 'essentials/components-basics' },
						{ label: 'Computed Properties', slug: 'essentials/computed-properties' },
						{ label: 'Conditional Rendering', slug: 'essentials/conditional-rendering' },
						{ label: 'Create Application', slug: 'essentials/create-application' },
						{ label: 'Event Handling', slug: 'essentials/event-handling' },
						{ label: 'Form Input Bindings', slug: 'essentials/form-input-bindings' },
						{ label: 'Life Cycle Hooks', slug: 'essentials/life-cycle-hooks' },
						{ label: 'List Rendering', slug: 'essentials/list-rendering' },
						{ label: 'Reactivity Fundamentals', slug: 'essentials/reactivity-fundamentals' },
						{ label: 'Template Refs', slug: 'essentials/template-refs' },
						{ label: 'Template Syntax', slug: 'essentials/template-syntax' },
						{ label: 'Watchers', slug: 'essentials/watchers' },
					],
				},

//The "Components In-Depth" category of this documentation begins here
				{
					label: 'Components In-Depth',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Registration', slug: 'components-in-depth/registration' },
						{ label: 'Props', slug: 'components-in-depth/props' },
						{ label: 'Events', slug: 'components-in-depth/events' },
						{ label: 'Components v-model', slug: 'components-in-depth/components-v-model' },
						{ label: 'Fallthrough Attributes', slug: 'components-in-depth/fallthrough-attributes' },
						{ label: 'Slots', slug: 'components-in-depth/slots' },
						{ label: 'Provide / Inject', slug: 'components-in-depth/provide-and-inject' },
						{ label: 'Async Components', slug: 'components-in-depth/async-components' },
					],
				},
//The "Reusabilty" category of this documentation begins here
				{
					label: 'Reusability',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Registration', slug: 'reusability/composables' },
						{ label: 'Custom Directives', slug: 'reusability/custom-directives' },
						{ label: 'Plugins', slug: 'reusability/plugins' },
					],
				},
//The "Built-in Components" category of this documentation begins here
				{
					label: 'Built-in Components',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Transition', slug: 'built-in-components/transition' },
						{ label: 'Transition Group', slug: 'built-in-components/transition-group' },
						{ label: 'Keep Alive', slug: 'built-in-components/keep-alive' },
						{ label: 'Teleport', slug: 'built-in-components/teleport' },
						{ label: 'Suspense', slug: 'built-in-components/suspense' },
					],
				},
//The "Scaling Up" category of this documentation begins here
				{
					label: 'Scaling Up',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Single-File Components', slug: 'scaling-up/single-file-components' },
						{ label: 'Tooling', slug: 'scaling-up/tooling' },
						{ label: 'Routing', slug: 'scaling-up/routing' },
						{ label: 'State Management', slug: 'scaling-up/state-management' },
						{ label: 'Testing', slug: 'scaling-up/testing' },
						{ label: 'Server-side Rendering (SSR)', slug: 'scaling-up/server-side-rendering' },
					],
				},
//The "Best Practices" category of this documentation begins here
				{
					label: 'Best Practices',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Production Deployment', slug: 'best-practices/production-deployment' },
						{ label: 'Performance', slug: 'best-practices/performance' },
						{ label: 'Accessibilty', slug: 'best-practices/accessibility' },
						{ label: 'Security', slug: 'best-practices/security' },
					],
				},
//The "TypeScript" category of this documentation begins here
				{
					label: 'Type Script',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'typescript/overview' },
						{ label: 'TS with Composition API', slug: 'typescript/ts-with-composition-api' },
						{ label: 'TS with Options API', slug: 'typescript/ts-with-options-api' },
					],
				},
//The "Extra Topics" category of this documentation begins here
				{
					label: 'Extra Topics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to Use Vue', slug: 'extra-topics/how-to-use-vue' },
						{ label: 'Composition API FAQ', slug: 'extra-topics/composition-api-faq' },
						{ label: 'Reactivity In Depth', slug: 'extra-topics/reactivity-in-depth' },
						{ label: 'Rendering Mechanism', slug: 'extra-topics/rendering-mechanism' },
						{ label: 'Render Functions and JSX', slug: 'extra-topics/render-functions-and-jsx' },
						{ label: 'Vue and Web Components', slug: 'extra-topics/vue-and-web-components' },
						{ label: 'Animation Techniques', slug: 'extra-topics/animation-techniques' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
