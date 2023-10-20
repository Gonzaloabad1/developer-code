import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa el componente Link para crear enlaces

const StyledButton = styled(Link)`
  border: 2px solid black;
  border-radius: 10px;
  padding: ${(props) =>
    props.size === "large"
      ? "18px 24px"
      : props.size === "small"
      ? "4px 8px"
      : "8px 14px"};
  font-weight: 700;
  letter-spacing: 4px;
  background-color: ${(props) =>
    props.variant === "success"
      ? "Yellow"
      : props.variant === "warning"
      ? "lightgreen"
      : "orange"};
  transition: 0.4s;
  &:hover {
    border: ${(props) =>
      props.variant === "success"
        ? "2px solid green"
        : props.variant === "warning"
        ? "2px solid crimson"
        : "2px solid black"};
  }
`;

const Button = ({ children, to, variant, size }) => {
  return (
    <StyledButton to={to} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;