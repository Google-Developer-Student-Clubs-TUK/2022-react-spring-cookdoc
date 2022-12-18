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

const GeneralInput = styled.input`
	font-weight: 500;
	font-size: 1rem;
	line-height: 1rem;
	letter-spacing: 0.05em;
	padding: 8px 16px 8px 16px;
	border: 1px solid #d6d6d6;
	border-radius: 16px;
	outline: none;
	&::placeholder {
		color: #ababab;
	}
`;

interface Props {
	id?: string;
	type?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
	maxLength?: number;
	min?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
}

export function Input({
	id,
	type,
	label,
	placeholder,
	value,
	readOnly,
	maxLength,
	min,
	onChange,
	onClick,
}: Props) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<GeneralInput
				id={id}
				type={type}
				placeholder={placeholder}
				spellCheck={false}
				autoComplete="off"
				readOnly={readOnly}
				maxLength={maxLength}
				value={value}
				onChange={onChange}
				onClick={onClick}
				min={min}
			/>
		</Container>
	);
}
