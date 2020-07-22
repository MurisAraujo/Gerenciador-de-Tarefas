import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  padding:0 20px;
`;

export const CheckedListArea = styled.div`
  width: 49.5%;
  height:100%;
  padding: 45px;
  align-self: center;
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

export const CheckListArea = styled(CheckedListArea)`
  div{
    display:flex;
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
    
  }
`;

export const Submit = styled.button`
  background: none;
  display:block;
  margin:20px auto;
  text-align:center;
  border: 2px solid #9FC782;
  padding: 15px 10px;
  width:15%;
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

export const Divisor = styled.div`
  width:.25%;
  background-color:#e9e9e9;
  height:90%;
  align-self: center;
  border-radius:10px;
`;

export const Item = styled.div`
  width: 55%;
  min-height: 8%;
  background-color:#282828;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  display:flex;
  position:relative;
  h3{
    width:40%;
    align-self: center;
    padding: 0 15px;
    color:#e9e9e9;
    font-size: 20px; 
    font-weight: 500;
    margin: 0 auto;
    text-align:center;
    word-break:normal;
  }
  @media (max-height: 700px) {
    width: 60%;
    min-height: 12%;
  }
`;

export const Button = styled.button`
  width: 12%;
  height: 45px;
  background-color: #343434;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius : 5px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border:none;
  align-self: center;
  margin: 0 10px;
  color:#d1d1d1;
`;
