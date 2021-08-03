import image from "../../img/cameraPhoto.svg";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
//
export const ProfileImageInput = ({
  name,
  value,
  handleChangeFiles,
  placeHolder,
  errors,
}) => {
  const handleFileSelected = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
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
  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
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
        errors
          ? (errors.error && colors.errorColor) || colors.tertiaryColor
          : colors.tertiaryColor};
    }
  }

  input {
    display: none;
  }
`;
