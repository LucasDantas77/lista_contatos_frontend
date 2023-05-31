import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    list-style: none;
    font-family: sans-serif;
}

button{
    cursor:pointer;

}

a{
    cursor:pointer;
}


:root{
--color-primary: #ff577f;
--color-primary-focus: #ff427f;
--color-primary-negative: #59323f;
--grey-4: #121214;
--grey-3: #212529;
--grey-2: #343b41;
--grey-1: #868e96;
--sucess: #3fe864;
--negative: #e83f5b;
}

`