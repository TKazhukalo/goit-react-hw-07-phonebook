import styled from '@emotion/styled';

export const ContactItem=styled.li`
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin-bottom: 10px;
    font-size:16;
`
export const Button=styled.button`
    width: 100px;
    height:30px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    line-height: 1.5;
    letter-spacing: 0.04em;  
    font-size:14px;
    background-color:#08984d;
    color:#fff;
    &:hover{
    box-shadow: 0 0 0 2px green, 0 0 13px #333;
    color:#234e49;
   }
`
export const ListItem = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 0;
    align-items: center;
`