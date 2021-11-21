// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {createTextField, TextFieldArgs} from './fixtures/createTextField';

export default {
	title: 'Library/Text Field',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		maxLength: {control: 'number'},
		size: {control: 'number'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TextFieldArgs) => {
	return createTextField({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Text Field Label',
	placeholder: '',
	value: '',
	maxLength: '',
	size: '',
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
	startIcon: false,
	endIcon: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<jp-text-field>Text Field Label</jp-text-field>`,
		},
	},
};

export const WithPlaceholder: any = Template.bind({});
WithPlaceholder.args = {
	...Default.args,
	placeholder: 'Placeholder Text',
};
WithPlaceholder.parameters = {
	docs: {
		source: {
			code: `<jp-text-field placeholder="Placeholder Text">Text Field Label</jp-text-field>`,
		},
	},
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutofocus.parameters = {
	docs: {
		source: {
			code: `<jp-text-field autofocus>Text Field Label</jp-text-field>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	placeholder: 'This text field cannot be interacted with',
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<jp-text-field disabled>Text Field Label</jp-text-field>`,
		},
	},
};

export const WithCustomSize: any = Template.bind({});
WithCustomSize.args = {
	...Default.args,
	placeholder: 'This text field is 50 characters in width',
	size: 50,
};
WithCustomSize.parameters = {
	docs: {
		source: {
			code: `<jp-text-field size="50">Text Field Label</jp-text-field>`,
		},
	},
};

export const WithMaxLength: any = Template.bind({});
WithMaxLength.args = {
	...Default.args,
	placeholder: 'This text field can only contain a maximum of 10 characters',
	maxLength: 10,
	size: 52,
};
WithMaxLength.parameters = {
	docs: {
		source: {
			code: `<jp-text-field maxlength="10">Text Field Label</jp-text-field>`,
		},
	},
};

export const WithReadonly: any = Template.bind({});
WithReadonly.args = {
	...Default.args,
	placeholder: 'This text is read only',
	isReadOnly: true,
};
WithReadonly.parameters = {
	docs: {
		source: {
			code: `<jp-text-field readonly>Text Field Label</jp-text-field>`,
		},
	},
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
	...Default.args,
	startIcon: true,
};
WithStartIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<jp-text-field>\n\tText Field Label\n\t<span slot="start" class="codicon codicon-search"></span>\n</jp-text-field>`,
		},
	},
};

export const WithEndIcon: any = Template.bind({});
WithEndIcon.args = {
	...Default.args,
	endIcon: true,
};
WithEndIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<jp-text-field>\n\tText Field Label\n\t<span slot="end" class="codicon codicon-text-size"></span>\n</jp-text-field>`,
		},
	},
};
