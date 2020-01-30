import styled from 'styled-components'

const Outer = styled.div`
    
    div.table{
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        display: table;
    }

    div.table-row{
        width: 100%;
        display: table-row;
    }

    div.dateLocation{
        margin-top: 2.5%;
    }

    #photo{
        width: 25%;
        display: table-cell;
    }

    #text{
        width: 40%;
        display: table-cell;
    }

    ul{
        text-align: left;
        padding-left: 1%;
        padding-right: 1%;
        list-style-type: square;
        list-style-position: inside;
    }

    li{
        font-size: 17px;
        font-weight: 400;
    }

    h4, p {
        font-weight: bold;
    }

    p{
        font-style: italic;
    }
`

export default Outer