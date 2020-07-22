import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  height: 5%;
  background-color: #282828;
  border-radius: 15px;
  margin: 8px auto;
  display: flex;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8), 0 3px 10px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  @media (max-width: 1370px) {
    width: 90%;
  }
`;

export const PriorityFlag = styled.div`
    width: 5%;
    height: 100%;
    background-color: ${props => props.value === 0 ? "#5FA130" : props.value === 1 ? "#FFC301" : "#B11616"};
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    margin-right: 2px;
`;

export const TaskTitle = styled.h2`
    font-size:16px;
    color: #e9e9e9;
    width: 30%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-self: center;
    margin-right: 5px;
    text-decoration: none;
`;

export const TaskDepartament = styled.h2`

    font-size:18px;
    bottom: 8px;
    left: 28px;
    color: #e9e9e9;
    font-weight: 400;
    width: 23%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-self: center;
    margin-right:10px;
    text-align:center;
`;

export const TaskDate = styled.h2`
    font-weight: 400;
    font-size:15px;
    color: #e9e9e9;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 40%;
    text-align:center;
    align-self: center;
`;
