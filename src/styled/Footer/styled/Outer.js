import styled from 'styled-components'

const Outer = styled.footer`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    position: absolute;
    height: 5%;
    bottom: 0;
    
    clear: both;
    width: 100%;

    ul {
        text-align: center;
        padding: 5px;
    }

    li {
        margin: 0px 10px 0px 0px;   
        display: inline;
    }

    a {
        font-size: 20px;
    }
`
export default Outer