import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  height:100%;
  padding: 0 30px;
`;

export const InfoContainer = styled.div`
  width:49.5%;
  height:100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  div{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    h3{
      font-size: 30px;
      margin-bottom:.9rem;
      color: #d1d1d1;
      font-weight: 800;
    }
    p{
      font-size:20px;
      color: #e9e9e9;
      font-weight: 300;
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

export const DescContainer = styled.div`
  width:49.5%;
  height:90%;
  align-self: center;
  h2{
    width:100%;
    text-align:center;
    color:#d1d1d1;
    font-size: 30px;
  }
  p{
    padding: 10px 100px;
    font-size:20px;
    color:#e9e9e9;
    height:80%;
    word-break: break-all;
  }
`;

export const Button = styled.button`
  width: 50%;
  height:20%;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.delete ? '#B11616' : '#FFC301'};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .8), 0 3px 10px 0 rgba(0, 0, 0, 0.6);
  font-size:18px;
  cursor: pointer;
`;
