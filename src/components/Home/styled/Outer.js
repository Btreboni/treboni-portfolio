import styled from 'styled-components'

const Outer = styled.div`
    min-height: 100%
    padding-top: 20px;
    padding-bottom: 60px;

    #intro {
        margin-top: 10px;
        margin-left: 34%;
    }

    h2{
        display: none;
    }

    h4 {
        align: center;
        text-align: center;
        width: 50%;
        word-wrap: break-word;
    }

    img {
        margin-top: 10px;
        border-radius: 50%;
    }

    @media(max-width: 768px){
        #intro{
            margin-top: 25px;
            margin-left: 13%;   
        }

        h4{
            width: 90%;
        }
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

    @media(max-width: 320px) {
        padding-top: 100px;

        h1 {
            display: none;
        }

        h2{
            display: initial;
            
        }

        img{
            margin-top: 20px;
            margin-bottom: 15px;
        }
        
        #intro{
            width: 90%;
        }
    }
`

export default Outer