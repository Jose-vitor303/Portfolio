import styled from 'styled-components';


export const StyledButton = styled.button`

    background-color : var(--button-color);
    color :  var(--letter-color);
    width : 150px;
    height : 50px;
    border : 1px;
    border-radius : 5px;
    cursor: pointer;
    font-size : 16px;
    letter-spacing : 2px;
    
    &:hover {
        color : var(--button-color);
        background-color : var(--letter-color);
    }
    
   
`