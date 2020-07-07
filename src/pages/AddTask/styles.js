import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  background: #282828;
	display:flex;
	justify-content:center;
`;

export const Form = styled.div`
	width: 45%;
	height: 70%;
	align-self: center;
	display:flex;
	flex-wrap: wrap;
	h3{
		font-size: 24px;
		color:#e9e9e9;
		width:100%;
	}
	textarea{
		width: 90%;
		font-size: 16px;
		background: #343434;
		border-radius: 20px;
		border: none;
		padding: 0px 20px;
		color:#d1d1d1;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
		margin: 10px;
	}
	select{
		width:85%;
		height: 60%;
		background: #343434;
		border-radius: 20px;
		border: none;
		padding: 0px 10px;
		color:#d1d1d1;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
		margin: 10px 5px;
	}
`

export const Input = styled.input`
	width: 90%;	
	height: 10%;
	font-size: 16px;
	background: #343434;
	border-radius: 50px;
	border: none;
	padding: 0px 20px;
	color:#d1d1d1;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
	margin: 10px;
`

export const DateInput = styled(Input)`
	width: 100%;
	height: 50%;
`

export const Button = styled.button`
	background: none;
  display:block;
  margin:50px auto;
  text-align:center;
  border: 2px solid #9FC782;
  padding: 15px 10px;
  width:25%;
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

export const BackBtn = styled.button`
	background: none;
  display:block;
  text-align:center;
  border: 2px solid #9FC782;
  padding: 15px 10px;
  width:150px;
  outline: none;
  border-radius:50px;
  transition:0.25s;
  font-size:20px;
	position: absolute;
	color: #f4f4f4;
	top: 20px;
	left: 20px;
  cursor: pointer;
    :hover{
      background-color: #9FC782
    }
`
