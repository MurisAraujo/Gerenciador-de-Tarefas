import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
`;

export const FileContainer = styled.div`
  width: 100%;
  height: 93%;
  overflow-y: auto;
  display:flex;
  flex-wrap:wrap;
  ::-webkit-scrollbar{
		display:none;
	}
  h3{
    color: #e9e9e9;
    width:80%;
  }
`

export const InputContainer = styled.div`
  width:100%;
  height: 7%;
`

export const Image = styled.img`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 3px 10px 0 rgba(0, 0, 0, 0.30);
  max-width:30%;
  max-height: 400px;
  margin:3%;
  cursor:pointer;
`
