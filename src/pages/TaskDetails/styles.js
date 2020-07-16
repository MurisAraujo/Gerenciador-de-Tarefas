import styled from 'styled-components';


export const Container = styled.div`
  background-color: #343434;
  width: 100%;
  min-height:100vh;
  max-height:1000vh;
`;

export const NavBar = styled.div`
	width: 100%;
	height: 5vh;
	background-color: #282828;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
	display: flex;
	justify-content: space-between;
	padding:0 50px;
	position: relative;
	a{
		width: 100%;
		align-self: center;
		text-align: center;
		text-decoration: none;
		h3{
			font-size: 20;
			color: #e9e9e9;
			font-weight: 400;
		}
	}
`;

export const RouterArear = styled.div`
	width:100%;
	height:95vh;
`;

