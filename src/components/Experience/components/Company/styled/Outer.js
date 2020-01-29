import styled from 'styled-components'

const Outer = styled.div`
    height: 100%;
    width: 100%;

    div.join{
        height: 50px;
        width: 100%
        display: inline-block;
        margin: 1em 0em .5em 0em;
    }

    #photo{
        height: 100%;
        border: 2px solid red;
        width: 25%;
    }

    #text{
        height: 100%;
        border: 2px solid blue;
        width: 45%;
    }

`

export default Outer