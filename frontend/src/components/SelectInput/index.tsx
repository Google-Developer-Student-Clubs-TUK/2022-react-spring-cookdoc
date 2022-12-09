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
	font-size: 16px;
	line-height: 16px;

	letter-spacing: 0.05em;

	color: #000000;
`;

const SelectInput = styled.select`
	font-weight: 500;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 0.05em;
	padding: 8px 16px 8px 16px;
	border: 1px solid #d6d6d6;
	border-radius: 16px;
	appearance: none;
	outline: none;
	background: #ffffff url('/select-arrow.svg') no-repeat right 9px center;
	cursor: pointer;
	option:first-of-type {
		display: none;
	}
	&:required:invalid {
		color: #9e9e9e;
	}
`;

interface Props {
	id?: string;
	label?: string;
	placeholder?: string;
	children?: JSX.Element[];
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({
	id,
	label,
	placeholder,
	children,
	value,
	onChange,
}: Props) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<SelectInput
				id={id}
				required
				placeholder={placeholder}
				spellCheck={false}
				value={value}
				onChange={onChange}
			>
				{children}
			</SelectInput>
		</Container>
	);
}
