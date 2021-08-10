import image from "../../../img/cameraPhoto.svg";
import styled from "styled-components";
import { Wrapper } from "../../Wrapper";

export const ProfileImageInput = ({
  name,
  value,
  placeHolder,
  errors,
  handleChangeFiles,
}) => {
  const handleFileSelected = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", (_) => {
      handleChangeFiles({ name, value: reader.result });
    });

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <ProfileImageInputStyled errors={errors}>
      <label htmlFor="image-profile">
        <PhotoPreview>
          <img src={value ? value : image} alt="user" />
        </PhotoPreview>
        <span>{placeHolder}</span>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        id="image-profile"
        onChange={handleFileSelected}
      />
      <p className="error">{errors}</p>
    </ProfileImageInputStyled>
  );
};

const PhotoPreview = styled(Wrapper)`
  cursor: pointer;

  img {
    width: auto;
    height: 12.5rem;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const ProfileImageInputStyled = styled(Wrapper)`
  grid-column: 1 / -1;
  box-shadow: ${({ theme: { colors }, errors }) =>
    errors ? colors.boxShadowError : colors.boxShadowLight};
  padding: 1.2rem;

  label {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    cursor: pointer;
    border-radius: 1rem;
    padding: 1rem;

    span {
      font-size: 1.2rem;
      text-align: center;
      text-decoration: underline;
      font-weight: 600;

      color: ${({ theme: { colors }, errors }) =>
        errors ? colors.errorColor : colors.tertiaryColor};
    }
  }

  input {
    display: none;
  }

  .error {
    color: ${({ theme: { colors } }) => colors.errorColor};
    font-weight: 600;
    text-align: center;
  }
`;
