import styled from 'styled-components'

const Outer = styled.div`
    border: 2px solid orange;
    height: 100%;
    width: 100%;

    div.join{
        
        display: table;
        margin: 1em 0em .5em 0em;
    }

    div.tableRow{
        display: table-row;
    }

    #photo{
        height: 100%;
        width: 25%;
        display: table-cell;
        border: 2px solid red;
    }

    #text{
        width: 50%;
        height: 100%;
        display: table-cell;
        border: 2px solid blue;
    }

    ul{
        padding: 2px;
        text-align: left;
        list-style-type: square;
        list-style-position: inside;
        border: 2px solid green;
    }

    li{
        border: 2px solid red;
    }
    

`

export default Outer