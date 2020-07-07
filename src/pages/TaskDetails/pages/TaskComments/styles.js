import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from{
    width: 30%;
  }
  to{
    width: 0;
  }
`

const fadeIn = keyframes`
  from{
    width: 0;
  }
  to{
    width: 30%;
  }
`

export const Container = styled.div`
  z-index: 1;
  position:absolute;
	width: ${props => props.state === false ? '0%' : '30%'};
  height: 95%;
  background: #282828;
  ${props => props.state === false ? `visibility: hidden` : `display: block`};
  animation: ${props => props.state === false ? fadeOut : fadeIn} .5s linear;
  transition: visibility 1s linear;
  opacity: 1;
`;

export const TitleChat = styled.h2`
	${props => props.state === false ? `display: none` : `display: block`};
	width: 100%;
	height:5%;
	color: #5FA130;
	font-size: 28px;
	text-align:center;
`

export const MsgArea = styled.div`
	${props => props.state === false ? `display: none` : `display: block`};
	width: 100%;
	height: 85%;
	overflow-y: auto;
	::-webkit-scrollbar{
		display:none;
	}
	
`

export const InputArea = styled.div`
	${props => props.state === false ? `display: none` : `display: flex`};
	width: 100%;
	height: 10%;
	input{
    width: 65%; 
    height: 40px;
    background: none;
    display:block;
    margin:10px auto;
    border: 2px solid #e9e9e9;
    padding: 25px 14px;
    outline: none;
    color: #e9e9e9;
    border-radius:50px;
    transition:0.25s;
    font-size:20px;
		align-self:center;
      :focus{
        width: 70%;
        border-color: #9FC782;
      }
    }
`

export const Submit = styled.button`
  background: none;
  display:block;
  margin:10px auto;
  text-align:center;
  border: 2px solid #9FC782;
  width:20%;
  outline: none;
  color: #f4f4f4;
  border-radius:50px;
  transition:0.25s;
  font-size:20px;
  cursor: pointer;
    :hover{
      background-color: #9FC782
    }
`;

export const Comment = styled.div`
	padding: 0 5px;
	width: 65%;
	margin: 10px auto;
	background-color: #343434;
	border-radius: 10px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
	cursor: pointer;
	h1{
		color: #e9e9e9;
		font-size: 22px;
		margin: 5px 5px;
	}
	h2{
		color: #d1d1d1;
		font-size:18px;
		font-weight:500;
		margin: 5px 15px;
		width:90%;
		word-break: break-all;
	}
	h3{
		color: #d1d1d1;
		font-size:20px;
		margin: 5px 5px;
	}
`

