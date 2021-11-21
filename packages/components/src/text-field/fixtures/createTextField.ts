// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {TextField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type TextFieldArgs = {
	label: string;
	placeholder: string;
	value: string;
	maxLength: number;
	size: number;
	isReadOnly: boolean;
	isDisabled: boolean;
	isAutoFocused: boolean;
	startIcon: boolean;
	endIcon: boolean;
};

export function createTextField({
	label,
	placeholder,
	value,
	maxLength,
	size,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
}: TextFieldArgs) {
	const textField = new TextField();

	if (label) {
		textField.textContent = label;
	}
	if (placeholder) {
		textField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textField.value = value;
	}
	if (maxLength) {
		textField.setAttribute('maxlength', maxLength.toString());
	}
	if (size) {
		textField.setAttribute('size', size.toString());
	}
	if (isReadOnly) {
		textField.setAttribute('readonly', '');
	}
	if (isDisabled) {
		textField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textField.setAttribute('autofocus', '');
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'search',
			slotName: 'start',
		});
		textField.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon({iconName: 'text-size', slotName: 'end'});
		textField.appendChild(end);
	}

	return textField;
}
