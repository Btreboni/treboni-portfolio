import styled from 'styled-components'

const Outer = styled.div`
    margin: 13% auto 0px auto;
    display: in-line;

    .kataListButton {
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: white;
    }

    button{
        padding: 8px;
        color: black;
        margin: 1.5%;
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