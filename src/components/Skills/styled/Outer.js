import styled from 'styled-components'

const Outer = styled.div`
    height: 100%;
    width: 100%

    li {
        display: inline;
        margin: 5px 40px 5px 40px;
    }

    #java-logo {
        width: 200px;
        height: 250px;
    }

    #c-logo{
        width: 200px;
        height: 200px;
    }

    #react-logo {
        width: 400px;
        height: 200px;
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
        width: 300px;
        height: 200px;
    }

    #git-logo {
        width: 300px;
        height: 200px;
    }

    #html-logo {
        width: 300px;
        height: 300px;
    }

    #js-logo {
        width: 200px;
        height: 200px;
    }

    @media(max-width: 1024px) {

        li {
            display: inline;
            margin: 5px 40px 5px 40px;
        }

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
            width: 200px;
            height: 200px;
        }

        #ang-logo {
            width: 300px;
            height: 300px;
        }

        #azure-logo {
            width: 300px;
            height: 200px;
        }

        #git-logo {
            width: 300px;
            height: 200px;
        }

        #html-logo {
            width: 300px;
            height: 300px;
        }

        #js-logo {
            width: 200px;
            height: 200px;
        }
    }
`

export default Outer