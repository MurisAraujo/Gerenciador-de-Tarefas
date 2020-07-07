import styled from 'styled-components';

export const Container = styled.div`
  width: 65%;
  height: 15%;
  background-color: #282828;
  border-radius: 15px;
  margin: 20px auto;
  position: relative;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6), 0 3px 10px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const PriorityFlag = styled.div`
    width: 5%;
    height: 100%;
    background-color: ${props => props.value === 0 ? "#5FA130" : props.value === 1 ? "#FFC301" : "#B11616"};
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
`;

export const TaskTitle = styled.h2`
    position: absolute;
    font-size:20px;
    top: 8px;
    left: 28px;
    color: #e9e9e9;
    width:40%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const TaskProgress = styled.h2`
    font-weight: 400;
    position: absolute;
    font-size:20px;
    top: 8px;
    right:28px;
    color: #e9e9e9;
`;

export const TaskDepartament = styled.h2`
    position: absolute;
    font-size:18px;
    bottom: 8px;
    left: 28px;
    color: #e9e9e9;
    font-weight: 400;
`

export const TaskDate = styled.h2`
    font-weight: 400;
    position: absolute;
    font-size:18px;
    bottom: 8px;
    right:28px;
    color: #e9e9e9;
    width: 53%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
