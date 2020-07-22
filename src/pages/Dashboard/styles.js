import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
	height:100vh;
  background-color: #343434;
`;

export const Header = styled.div`
  width:100%;
	height: 80px;
	padding: 5px 28px;
	display:flex;
`;

export const NewTaskBtn = styled.button`
	width:146px;
	height: 50px;
	background-color: transparent;
	border: 3px solid #e9e9e9;
	border-radius: 8px;
	color: #e9e9e9;
	font-size: 20px;
	font-weight: bold;
	align-self: center;
	cursor: pointer;
	margin:1px;
	:hover{
		border-color: #9FC782;
	}
`;

export const NewTaskDiv = styled.div`
	width: 50%;
	height: 100%;
	display:flex;
`;

export const LogOutDiv = styled.div`
	width: 50%;
	display:flex;
	justify-content: flex-end;
`;

export const LogOutBtn = styled.button`
	height: 43px;
	width: 43px;
	background-color: transparent;
	border: 3px solid #e9e9e9 ;
	border-radius: 5px;
	align-self:center;
	cursor: pointer;
	:hover{
		border-color: #B11616;
	}	
`;

export const UserName = styled.h1`
	font-size:24px;
	align-self: center;
	margin-right: 2%;
	color: #e9e9e9;
	font-weight: 500;
`;

export const ContainerTask = styled.div`
	width:100%;
	padding:20px;
	height: 85%;
	display:flex;
`;

export const TaskArea = styled.div`
	width:33%;
	height: 100%;
	margin:0 0.5%;
`;

export const Divisor = styled.div`
	width: 0.5%;
	height: 90%;
	align-self: center;
	background-color: #e9e9e9;
	border-radius: 3px;
`;

export const TaskTitle = styled.h2`
	width:100%;
	height: 5%;
	text-align:center;
	color: #e9e9e9;
	font-size: 24px;
`;

export const TaskDiv = styled.div`
	width: 100%;
	height: 95%;
	padding: 5% 0;
	overflow-y: auto;
	::-webkit-scrollbar{
		display:none;
	}
`;
