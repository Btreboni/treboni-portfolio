import styled from 'styled-components'

const Outer = styled.div`
    min-height: 100%
    padding-top: 15%;
    padding-bottom: 60px;

    img {
        border: 8px solid white;
        margin: 10px 0px 0 18%;
        border-radius: 50%;
        float: left;
        width: 18%;
        heigt: 18%;
        
    }

    h2,h1 {
        font-family: 'Overpass Mono', monospace , sans-serif;
    }

    // @media(max-width: 768px){
    //     #intro{
    //         margin-top: 25px;
    //         margin-left: 13%;   
    //     }

    //     h4{
    //         width: 90%;
    //     }
    // }    

    // @media(max-width: 425px){
    //     h1{
    //         margin-top: 100px;
    //         margin-bottom: 20px;
    //     }

    //     #intro{
    //         margin-top: 15px;
    //         margin-left: 12%;
    //     }

    //     h4{
    //         width: 90%;
    //     }

    // }

    // @media(max-width: 320px) {
    //     padding-top: 100px;

    //     h1 {
    //         display: none;
    //     }

    //     h2{
    //         display: initial;
            
    //     }

    //     img{
    //         margin-top: 20px;
    //         margin-bottom: 15px;
    //     }
        
    //     #intro{
    //         width: 90%;
    //     }
    // }
`

export default Outer