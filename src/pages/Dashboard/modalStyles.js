import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  background-color: rgba(40, 40, 40, .7) ;
  visibility: ${props => props.value === true ? "visible" : "hidden"};
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const Filter = styled.div`
  width: 30%;
  background: #343434;
  z-index: 2;
  align-self: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6), 0 3px 10px 0 rgba(0, 0, 0, 0.3);
  h2{
    color: #e9e9e9;
    font-size: 30px;
    text-align:center;
  }
  select{
    width: 70%;
    height: 50px;
    margin: 1% 15%;
    border-radius: 10px;
    background: #282828;
    color: #e9e9e9;
    font-size: 15px;
  }
  @media (max-width: 1370px) {
    width: 40%;
  }
`;

export const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top:10px;
  @media (max-height: 900px){
    margin-top: 20px;
  }
`;

export const FilterBtn = styled.button`
  background: none;
  text-align:center;
  border: 2px solid #e9e9e9;
  padding: 15px 10px;
  width:27%;
  outline: none;
  color: #f4f4f4;
  border-radius:50px;
  transition:0.25s;
  font-size:20px;
  margin: 10px 0;
  cursor: pointer;
  :hover{
    border-color: ${props => props.isFilter === true ? "#9FC782" : "#B11616"};
  }
`;

