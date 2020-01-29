import styled from 'styled-components'

const Outer = styled.div`
    height: 100%
    padding-top: 10px;
    padding-bottom: 60px;

    h1, h2, h3, h4 {
        font-family: 'Overpass Mono', monospace , sans-serif;
    }

    h4 {
        align: center;
        text-align: center;
        width: 75%;
        word-wrap: break-word;
    }

    @media(max-width: 425px){
        

    }
`
export default Outer