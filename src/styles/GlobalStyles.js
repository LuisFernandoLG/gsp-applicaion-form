import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::before, *::after{
        margin: 0;
        padding:0;
        box-sizing:border-box;
    }

    
    body{
        
        font-family: "Montserrat", sans-serif;
        width: 95%;
        max-width: 1400px;
        margin: 0 auto;
        margin-bottom: 5.125rem;
    }
    
    
    input{
        border:none;
        outline:none;
        background: transparent;
    }
    
    
    button{
        cursor:pointer;
        border:none;
    }
    input[type="date"]{
    }

    a{
        text-decoration: none;
    }

    button{    
    &:focus{
    outline : 3px solid ${({ theme: { colors } }) => colors.secondaryColor};

        outline-offset: 5px;
  }
    }
    
    
    input[tpye="radio"]{
        cursor: pointer;
        cursor: pointer;
        
    }

    @media screen and (max-width: 550px){
        html{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 480px){
        html{
            /* font-size: 10px; */
        }

    }

    

`;
