import styled from 'styled-components';
import image from '../../assets/Teste.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
	background-color: #282828;
	display:flex;
`;

export const ImgSection = styled.div`
	width: 50%;
	height: 100vh;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const LoginSection = styled.div`
	width: 50%;
	height: 100vh;
	display: flex;
	justify-content:center;
	align-items:center;
	align-content:center; 
`;

export const LoginForm = styled.div`
	width:60%;
	height:450px;
	background-color: #343434;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	h1{
		text-align:center;
		margin: 12px 5px;
		color: #e9e9e9;
	}
`;

export const LoginInput = styled.input`
	background: none;
	display:block;
	margin:45px auto;
	text-align:center;
	border: 2px solid #e9e9e9;
	padding: 25px 14px;
	width: 300px;
	outline: none;
	color: #e9e9e9;
	border-radius:50px;
	transition:0.25s;
	font-size:20px;
	:focus{
		width: 380px;
		border-color: #9FC782;
	}
`;

export const LoginButton = styled.input`
	background: none;
	display:block;
	margin:45px auto;
	text-align:center;
	border: 2px solid #9FC782;
	padding: 15px 40px;
	outline: none;
	color: #f4f4f4;
	border-radius:50px;
	transition:0.25s;
	font-size:20px;
	cursor: pointer;
	:hover{
		background-color: #9FC782
	}
`
