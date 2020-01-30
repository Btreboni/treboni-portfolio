import styled from 'styled-components'

const Outer = styled.div`
    width: 100%;
    height: 100%;

    div.join{
        display: table;
    }

    div.tableRow{
        display: table-row;
    }

    #photo{
        width: 25%;
        height: 100%;
        display: table-cell;
    }

    #text{
        width: 50%;
        height: 100%;
        display: table-cell;
    }

    ul{
        padding-left: 1%;
        padding-right: 1%;
        text-align: left;
        list-style-type: square;
        list-style-position: inside;
    }

    div.dateLocation{
        margin-top: 2.5%;
    }
`

export default Outer