import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  padding:0 20px;
`;

export const VinculatedUsersArea = styled.div`
  width: 49.5%;
  height:100%;
  align-self: center;
  padding:45px;
  h2{
    color: #d1d1d1;
    width:100%;
    text-align:center;
  }
  position: relative;
  overflow-y: auto;
	::-webkit-scrollbar{
		display:none;
	}
`;

export const NotVinculatedUsersArea = styled(VinculatedUsersArea)`
  input{
    width: 70%; 
    height: 40px;
    background: none;
    display:block;
    margin:20px auto;
    border: 2px solid #e9e9e9;
    padding: 25px 14px;
    outline: none;
    color: #e9e9e9;
    border-radius:50px;
    transition:0.25s;
    font-size:20px;
      :focus{
        width: 75%;
        border-color: #9FC782;
      }
    }
`;

export const Divisor = styled.div`
  width:.25%;
  background-color:#e9e9e9;
  height:90%;
  align-self: center;
  border-radius:10px;
`;

export const UserCard = styled.div`
  width: 50%;
  height: 8%;
  background-color:#282828;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  display:flex;
  position:relative;
  h3{
    width:80%;
    align-self: center;
    padding: 0 15px;
    color:#e9e9e9;
    font-size: 20px; 
    font-weight: 500;
  }
  @media (max-height: 700px) {
    height: 15%;
    width: 60%;
  }
`;

export const Button = styled.button`
  width: 12%;
  height: 65%;
  background-color: #343434;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius : 5px;
  position:absolute;
  right: 10px;
  top:12px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border:none;
`;

export const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #282828;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 3px 10px 0 rgba(0, 0, 0, 0.8);
  border-radius : 50px;
  position: fixed;
  bottom:10px;
  ${props => props.right ? "right: 30px" : null};
  cursor: pointer;
`;
