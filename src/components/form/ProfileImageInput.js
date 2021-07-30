import { useEffect, useState } from "react";
import image from "../../img/cameraPhoto.svg";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
//
export const ProfileImageInput = ({
  name,
  value,
  handleChange,
  placeHolder,
  handleBlur,
}) => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageURL, setProfileImageURL] = useState(null || value);

  const handleFileSelected = (e) => {
    setProfileImage(e.target.files[0]);
    // }
  };

  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setProfileImageURL(reader.result);
    });

    if (profileImage) {
      reader.readAsDataURL(profileImage);
    }

    return () => {
      reader.removeEventListener("load", () => {});
    };
  }, [profileImage]);

  useEffect(() => {
    handleChange({ target: { name, value: profileImageURL } });
  }, [profileImageURL]);

  return (
    <ProfileImageInputStyled>
      <label htmlFor="image-profile">
        <PhotoPreview>
          <img src={profileImageURL ? profileImageURL : image} alt="" />
        </PhotoPreview>
        <span>{placeHolder}</span>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        id="image-profile"
        onChange={handleFileSelected}
        onBlur={handleBlur}
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
    }
  }

  input {
    display: none;
  }
`;
