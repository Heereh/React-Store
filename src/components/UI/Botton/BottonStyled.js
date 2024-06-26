import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
	padding: 0.5rem 1rem;
	outline: none;
	border: none;
	border-radius: ${({ radius }) => `${radius}px`};
	background-color: var(--skyblue-txt);
	color: black;
	text-transform: uppercase;
	font-weight: 400;
	cursor: pointer;

	&:hover {
		opacity: 95%;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	${({ secondary }) =>
		secondary &&
		css`
			background: #252525;
			& span {
			}
		`}
`;
