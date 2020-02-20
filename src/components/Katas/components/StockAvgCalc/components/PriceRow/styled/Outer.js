import styled from 'styled-components'

const Outer = styled.div`
    margin: auto;
    align-content: center;

    h1{
        margin: 1em;
    }
    
    .row{
        margin: auto;
        display: flex;
        align-content: center;  
    }

    .cell{
        margin: 1em;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid black;
    }
`

export default Outer