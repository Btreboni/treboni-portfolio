import styled from 'styled-components'

const Outer = styled.div`

    height: 100%;
    width: 100%

    @media(min-width: 768px){
        #hmb-logo {
            margin-top: 15px;
        }
    
        #sg-logo {
            width: 200px;
            height: 200px;
        }
    
        #homeside-logo {
            background-color: none;
        }
    
        ul {
            margin-left: 50px;
        }
    
        li {
            display: inline;
            margin: 5px 60px 5px 60px;
        }
    }

    @media(max-width: 767px){

        h2 {
            margin-top: 35px;
            margin-left: 10px;
        }

        #hmb-logo {
            
            width: 130px;
            height: 100px;
        }
    
        #sg-logo {
            margin-left: -10px;
            width: 200px;
            height: 200px;
        }
    
        #homeside-logo {
            width: 200px;
            height: 200px;
        }

        img {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    
        ul {
            margin-left: 50px;
        }
    
        li {
            display: inline;
            
        }
    }
`
export default Outer