import styled, {css} from 'styled-components';

const Outer = styled.div`
    display: flex;
    height: 4em;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    font-size: 1.4em;
    outline: 1px solid #888;

    ${({isOperator})=> 
    isOperator ? 
      css`
        
        background-color: #fe9241;
        color: #fff;
        
      `
    : 
      css`
        background-color: #A9A9A9;
        color: #black;
      `
    }
`

export default Outer