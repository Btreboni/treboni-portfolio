import styled from 'styled-components'

const Outer = styled.li`

    div.box {
        width: 25%;
        height: 25%;
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #ffffff;
        margin: 0px 30px 30px 10px;

        display: inline-block;
        font-family: Roboto;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.77);  
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        

        &:last-child {
            margin-bottom: 0;
        }

        @media only screen and (max-width: 767px) {
            padding: 20px;
            margin: 0 10px 30px;
        }

        &.half {
            width: calc(50% - 34px);
            @media (max-width: 767px) {
            width: 100%;
            }
        }

    }

    img{
        // width: 75px;
        // height: 75px;
    }
`

export default Outer