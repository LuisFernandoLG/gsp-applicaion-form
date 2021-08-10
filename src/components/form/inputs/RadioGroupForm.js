import styled from "styled-components";
import { Wrapper } from "./../../Wrapper";

export const RadioGroupForm = ({
  name,
  placeholder,
  errors,
  options,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <RadioGroupFormStyled flex gap="1rem" directionColumn errors={errors}>
      <h3>{placeholder}</h3>
      <Wrapper
        className="options"
        flex
        justifyContent="center"
        gap="1rem"
        alignItems="center"
      >
        {options.map((option) => {
          return (
            <Wrapper key={`${name}-${option}-id`} flex gap="0.5em">
              <input
                type="radio"
                name={name}
                onChange={handleChange}
                value={option}
                checked={option === value}
                onBlur={handleBlur}
              />
              <label htmlFor={`${name}-${option}`}> {option}</label>
            </Wrapper>
          );
        })}
      </Wrapper>
      <p className="error">{errors}</p>
    </RadioGroupFormStyled>
  );
};

const RadioGroupFormStyled = styled(Wrapper)`
  box-shadow: ${({ theme: { colors }, errors }) =>
    errors ? colors.boxShadowError : colors.boxShadowLight};
  padding: 0.5rem 0 1rem 0.5rem;
  border-radius: 1rem;
  position: relative;

  overflow: hidden;

  input:focus::before {
    transform: translateX(0);
  }

  input:checked + label {
    color: ${({ theme: { colors } }) => colors.color2};
    font-weight: 800;
  }

  label {
    color: ${({ theme: { colors } }) => colors.tertiaryColor};
  }

  input::before {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    display: block;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.1875rem;
    width: 100%;
    background: ${({ theme: { colors }, errors }) =>
      errors ? colors.errorColor : colors.secondaryColor};
  }

  h3 {
    text-align: center;
    color: ${({ theme: { colors } }) => colors.tertiaryColor};
  }

  .options {
  }

  .error {
    color: ${({ theme: { colors } }) => colors.errorColor};
    font-weight: 600;
    text-align: center;
  }
`;
