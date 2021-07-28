import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::before, *::after{
        margin: 0;
        padding:0;
        box-sizing:border-box;
    }

    
    input, button{
        border:none;
        outline:none;
        background: transparent;
    }
    
    button{
        cursor:pointer;
    }
    
    body{
        /* font-family: helvetica; */
        font-family: "Montserrat", sans-serif;
        width: 90%;
        max-width: 1400px;
        margin: 1.25rem auto;

        /* background: ${({ theme: { colors } }) => colors.primaryColor}; */
    }
    
    input[type="date"]{
    }

    a{
        text-decoration: none;
    }
    
    
    input[tpye="radio"]{
        cursor: pointer;
        cursor: pointer;
        
    }

    @media screen and (max-width: 450px){
        html{
            font-size: 14px;
        }
    }

`;
