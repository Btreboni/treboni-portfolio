import styled from 'styled-components'

const Outer = styled.div`

    min-height: 100%;
    width: 100%;

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

        #tos-logo {
            width: 150px;
            height: 150px;
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

    @media(max-width: 425px){
        li {
            display: block;
        }

        h2{
            margin-top: 75px;
            margin-left: 40px;
            width: 75%;
        }

        #sg-logo {
            margin-right: 70px;
            width: 200px;
            height: 200px;
        }

        #hmb-logo {   
            margin-right: 80px;
            width: 150px;
            height: 100px;
        }

        #homeside-logo {
            margin-top: 50px;
            margin-right: 68px;
            width: 300px;
            height: 135px;
        }

        #tos-logo {
            margin-top: 20px;
            margin-right: 65px;
            width: 200px;
            height: 200px;
        }
    }

    @media(max-width: 375px){
        li {
            display: block;
        }

        h2{
            margin-left: 40px;
            width: 75%;
        }

        #sg-logo {
            margin-right: 70px;
            
            width: 200px;
            height: 200px;
        }

        #hmb-logo {   
            margin-right: 80px;
            width: 140px;
            height: 80px;
        }

        #homeside-logo {
            margin-top: 50px;
            margin-right: 200px;
            margin-bottom: 20px;
            width: 300px;
            height: 135px;
        }

        #tos-logo {
            margin-top: 20px;
            margin-right: 65px;
            width: 200px;
            height: 200px;
        }
    }
`
export default Outer