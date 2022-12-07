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

const GeneralInput = styled.input`
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 0.05em;
	padding: 8px 8px 8px 16px;
	border: 1px solid #d6d6d6;
	border-radius: 16px;
	outline: none;
	&::placeholder {
		color: #ababab;
	}
`;

interface Props {
	id?: string;
	label?: string;
	placeholder?: string;
}

export function Input({ id, label, placeholder }: Props) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<GeneralInput id={id} placeholder={placeholder} />
		</Container>
	);
}
