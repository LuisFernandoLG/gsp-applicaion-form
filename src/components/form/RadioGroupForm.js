import styled from "styled-components";
import { Wrapper } from "./../Wrapper";

export const RadioGroupForm = ({
  name,
  placeholder,
  options,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <RadioGroupFormStyled flex gap="1rem" directionColumn>
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
              <label htmlFor={`${name}-${option}`}> {option}</label>
              <input
                placeholder={placeholder}
                type="radio"
                name={name}
                id={`${name}-${option}`}
                onChange={handleChange}
                value={option}
                defaultChecked={value === option}
                onBlur={handleBlur}
              />
            </Wrapper>
          );
        })}
      </Wrapper>
    </RadioGroupFormStyled>
  );
};

const RadioGroupFormStyled = styled(Wrapper)`
  box-shadow: 0 0.625rem 1.875rem -1.25rem gray;
  padding: 0.5rem 0 1rem 0.5rem;
  border-radius: 1rem;

  input {
    padding: 100px;
  }

  h3 {
    text-align: center;
  }
  .options {
  }
`;
