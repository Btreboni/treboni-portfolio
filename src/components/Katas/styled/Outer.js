import styled from 'styled-components'

const Outer = styled.div`
    margin: 8% auto 0px auto;

    button{
        padding: 8px;
        color: black;
        border-radius: 12px;
        background-color: white;
        border: 2px solid black;
        transition-duration: 0.4s;
    }

    button:hover {
        color: white;
        font-weight: bold;
        background-color: black;
    }
`

export default Outer