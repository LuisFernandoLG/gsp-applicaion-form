import { useRef } from "react";
import styled from "styled-components";
//
export const InputForm = ({
  type,
  placeHolder,
  name,
  value,
  handleChange,
  handleBlur,
  errors,
}) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <InputStyled onClick={handleFocus} errors={errors}>
      <input
        onChange={handleChange}
        type={type}
        value={value}
        name={name}
        id={name}
        ref={inputRef}
        onBlur={handleBlur}
      />
      <label htmlFor={name}>{placeHolder}</label>
      <div className="bar"></div>
      {errors && <p className="error">{errors}</p>}
    </InputStyled>
  );
};

const InputStyled = styled.div`
  padding: 2rem 0 1rem 1rem;
  border-radius: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  overflow: hidden;

  height: min-content;

  box-shadow: ${({ theme: { colors }, errors }) =>
    errors ? colors.boxShadowError : colors.boxShadowLight};

  input {
    width: 95%;
    margin-right: auto;
    height: 100%;
    font-size: 1rem;
    color: ${({ theme: { colors } }) => colors.color2};
    font-weight: 400;
    padding: 10px 0 0 0;
  }

  label {
    font-weight: 800;
    position: absolute;
    left: 1rem;
    top: 50%;
    font-size: 1rem;
    color: ${({ theme: { colors }, errors }) =>
      errors ? colors.errorColor : colors.tertiaryColor};
    transition: transform 0.3s ease;
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-120%);
  }

  input:focus + label {
    transform: translateY(-120%);

    color: ${({ theme: { colors }, errors }) =>
      errors ? colors.errorColor : colors.secondaryColor};
  }

  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;

    transform: translateX(-110%);
    background: ${({ theme: { colors }, errors }) =>
      errors ? colors.errorColor : colors.secondaryColor};

    transition: transform 0.3s ease;
    z-index: 20;
  }

  input:focus + label + .bar {
    transform: translateX(0%) translateY(2px);
  }

  .error {
    margin: 0 0;
    font-size: 0.9rem;
    color: ${({ theme: { colors } }) => colors.errorColor};
    font-weight: 600;
    text-align: center;
  }

  input:focus + label + div + p {
    display: none;
  }

  /* .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    
    z-index: -1;
  } */
`;
