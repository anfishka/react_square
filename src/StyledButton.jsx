import React from "react";
import styled from "styled-components"

const ButtonStyles = styled.button`border: 0.1rem solid black; width:300px; height:300px; background:red;`

const StyledButton = () => {
    return (
        <ButtonStyles>
            Hello World
        </ButtonStyles>
    )
}

export default StyledButton