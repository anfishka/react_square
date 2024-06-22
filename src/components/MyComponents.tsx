import React, { FC } from "react";
import StyledButton from "../StyledButton";
import './MyComponent.css'

interface MyComponentProps{ }

const MyComponent: FC<MyComponentProps> = () => (
    <div className="main_container">
        <StyledButton variant="contained" children={'Click me'} />
         <StyledButton variant="text" children={'Click !!!'} />
    </div>
)

export default MyComponent