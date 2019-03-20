import styled from 'styled-components'

const Outer = styled.div`
    min-height: 100%;
    width: 100%

    li {
        display: inline;
        margin: 5px 40px 5px 40px;
    }

    #java-logo {
        width: 159px;
        height: 250px;
    }

    #c-logo{
        width: 180px;
        height: 180px;
    }

    #react-logo {
        width: 380px;
        height: 180px;
    }

    #sql-logo {
        width: 200px;
        height: 200px;
    }

    #ang-logo {
        width: 300px;
        height: 300px;
    }

    #azure-logo {
        width: 275px;
        height: 175px;
    }

    #git-logo {
        width: 300px;
        height: 200px;
    }

    #html-logo {
        width: 280px;
        height: 280px;
    }

    #js-logo {
        width: 180px;
        height: 180px;
    }

    @media(max-width: 1024px) {
        #java-logo {
            width: 100px;
            height: 175px;
        }

        #c-logo{
            width: 125px;
            height: 125px;
        }

        #react-logo {
            width: 200px;
            height: 125px; 
        }

        #sql-logo {
            width: 180px;
            height: 180px;
        }

        #ang-logo {
            width: 180px;
            height: 180px;
        }

        #azure-logo {
            width: 200px;
            height: 150px;
        }

        #git-logo {
            width: 300px;
            height: 200px;
        }

        #html-logo {
            width: 200px;
            height: 200px;
        }

        #js-logo {
            width: 125px;
            height: 125px;
        }
    }

    @media(max-width: 768px){

        #rowOne li {
            margin: 20px;
        }

        #rowTwo li {
            margin: 22px;
        }

        #java-logo {
            width: 100px;
            height: 150px;
        }

        #c-logo{
            width: 100px;
            height: 100px;
        }

        #react-logo {
            width: 150px;
            height: 100px; 
        }

        #sql-logo {
            width: 90px;
            height: 90px;
        }

        #ang-logo {
            width: 150px;
            height: 150px;
        }

        #azure-logo {
            width: 130px;
            height: 75px;
        }

        #git-logo {
            width: 300px;
            height: 200px;
        }

        #html-logo {
            width: 140px;
            height: 140px;
        }

        #js-logo {
            width: 90px;
            height: 90px;
        }
    }

    @media(max-width: 425px){

        li {
            display: block;    
            margin: 10px 0px 10px 0px;
        }

        #java-logo {
            width: 110px;
            height: 175px;
        }

        #c-logo{
            width: 125px;
            height: 125px;
        }

        #react-logo {
            width: 250px;
            height: 120px; 
        }

        #sql-logo {
            width: 150px;
            height: 150px;
        }

        #ang-logo {
            margin-top: 0px;
            margin-bottom: 0px;
            width: 200px;
            height: 200px;
        }

        #azure-logo {
            width: 200px;
            height: 125px;
            margin-bottom: 50px;
        }

        #git-logo {
            width: 300px;
            height: 200px;
        }

        #html-logo {
            width: 200px;
            height: 200px;
        }

        #js-logo {
            width: 120px;
            height: 120px;
        }
    }

    @media(max-width: 320px){

        h1{
            margin-top: 75px;
            margin-bottom: 50px;
        }

        li {
            display: block;    
            margin: 15px 0px 15px 0px;
        }

        #java-logo {
            width: 110px;
            height: 175px;
        }

        #c-logo{
            width: 120px;
            height: 120px;
        }

        #react-logo {
            width: 225px;
            height: 100px; 
        }

        #sql-logo {
            width: 150px;
            height: 150px;
        }

        #ang-logo {
            margin-top: 0px;
            margin-bottom: 0px;
            width: 200px;
            height: 200px;
        }

        #azure-logo {
            width: 200px;
            height: 125px;
            margin-bottom: 50px;
        }

        #git-logo {
            width: 300px;
            height: 200px;
        }

        #html-logo {
            width: 200px;
            height: 200px;
        }

        #js-logo {
            width: 120px;
            height: 120px;
        }
    }
`

export default Outer