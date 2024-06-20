import React,{FC} from "react";
import styled from "styled-components"

interface ButtonProps {
  variant: 'contained' | 'text';
  bgColor?: string;
  textColor?: string;
  children?: any;
}

const ButtonStyles = styled.button<ButtonProps>`
all:unset;
display:flex;
justify-content:center;
align-items:center;
text-aligh:center;
width:300px; 
height:300px; 
  background-color: ${props => props.variant === 'contained' ? props.bgColor || 'red' : 'blue'};
  color: ${props => props.variant === 'contained' ? props.textColor || 'white' : 'black'};

`
const StyledButton: React.FC<ButtonProps> = ({  variant, children }) => {
  return (
    <ButtonStyles variant={variant} >
      {children}
    </ButtonStyles>
  );
};

export default StyledButton