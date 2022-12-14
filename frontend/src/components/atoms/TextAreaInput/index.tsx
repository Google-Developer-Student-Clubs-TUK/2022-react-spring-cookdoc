import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 8px 0px 8px 0px;
	gap: 8px;
`;

const Label = styled.label`
	font-weight: 700;
	font-size: 1rem;
	line-height: 1rem;

	letter-spacing: 0.05em;

	color: #000000;
`;

const TextAreaInput = styled.textarea`
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.2rem;
	letter-spacing: 0.05em;
	resize: none;
	border: 1px solid #d6d6d6;
	border-radius: 16px;
	padding: 8px 16px 8px 16px;
	height: 100px;
	&::placeholder {
		color: #ababab;
	}
	outline: none;
`;

interface Props {
	id?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ id, label, placeholder, value, onChange }: Props) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<TextAreaInput
				id={id}
				placeholder={placeholder}
				spellCheck={false}
				value={value}
				onChange={onChange}
			/>
		</Container>
	);
}
