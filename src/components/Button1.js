import styled from "styled-components"

const Button1 = styled.button`
background-color: #5846f6;
border: 1px solid #5846f6;
border-radius: 22px;
color: #fff;
text-align: center;
width: 35rem;
height: 2.6rem;
font-size: medium;
margin-bottom: 0.7rem;
cursor: pointer;

&& :hover {
    background-color: violet;
}
`

export { Button1 }