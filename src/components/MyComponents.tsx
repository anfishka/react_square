import React, { FC } from "react";
import StyledButton from "../StyledButton";

interface MyComponentProps{ }

const MyComponent: FC<MyComponentProps> = () => (
    <>
        <StyledButton variant="contained" children={'Click me'} />
         <StyledButton variant="text" children={'Click !!!'} />
    </>
)

export default MyComponent