import styled from 'styled-components'

const Outer = styled.div`
    height: 100%
    padding-top: 10px;
    padding-bottom: 60px;

    #intro {
        margin-top: 10px;
        margin-left: 36%;
    }

    h4 {
        align: center;
        text-align: center;
        width: 45%;
        word-wrap: break-word;
    }

    img {
        margin-top: 10px;
        border-radius: 50%;
    }

    @media(max-width: 425px){
        h1{
            margin-top: 100px;
            margin-bottom: 20px;
        }

        #intro{
            margin-top: 15px;
            margin-left: 12%;
        }

        h4{
            width: 90%;
        }

    }
`

export default Outer