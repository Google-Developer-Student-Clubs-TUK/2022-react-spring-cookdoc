import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 8px;
	gap: 8px;
`;

const Label = styled.label`
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;

	letter-spacing: 0.05em;

	color: #000000;
`;

const TextAreaInput = styled.textarea`
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 0.05em;
	resize: none;
	border: 1px solid #d6d6d6;
	border-radius: 16px;
	padding: 8px 8px 8px 16px;
	height: 100px;
	&::placeholder {
		color: #ababab;
	}
`;

interface Props {
	id?: string;
	label?: string;
	placeholder?: string;
}

export function TextArea({ id, label, placeholder }: Props) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<TextAreaInput id={id} placeholder={placeholder} />
		</Container>
	);
}
