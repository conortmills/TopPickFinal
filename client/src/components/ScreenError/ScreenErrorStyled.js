import styled from "styled-components";

export const WrapperError = styled.div`
 
  float: left;
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  
  background-color: white;
  border-radius: 5px;
  font-family: var(--font-body);
`;

export const Img = styled.div`
  margin: 10% auto;
`;

export const Message = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 15px;
`;

export const Indication = styled.div`
  font-size: 22px;
`;

export const Ahref = styled.a`
  font-size: 22px;
  margin-left: 5px;
  margin-right: 5px;
`;
