import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
	return <InputTrello  {...props} />
}
const InputTrello = styled.input`
	padding: 0.8rem 1rem;
	border: none;
	outline: none;
	color: black;
	font-size: 11px;
	background-color: #bbbbbb;
	border: 2px solid ${props=>props.isValidInput ? 'red' : '#bbbbbb'};
	transition: 0.2s;
  cursor: pointer;
	&::placeholder {
		color: #bbbbbb;
	}
	&:focus {
		border-color: ${props=>props.isValidInput ? 'orange' : '#bbbbbb'};
	}
  &:focus{
		background: white
	}
`

export default Input
