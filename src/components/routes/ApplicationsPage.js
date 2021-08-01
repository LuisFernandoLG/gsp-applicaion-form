import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { ApplicantCard } from "../ApplicantCard";
import { ApplicantCardShadow } from "../ApplicantCardShadow";

const initialAppForms = [];
const initialAppFormShadows = [1, 2, 3, 4, 5];

const ApplicationsPage = () => {
  const [applicants, setApplicants] = useState(initialAppForms);
  const { get, isLoading } = useFetch();

  useEffect(() => {
    const fetchAppForms = async () => {
      const appForms = await get("http://localhost:8000/forms");
      console.log(appForms);
      setApplicants(appForms || []);
    };

    fetchAppForms();
  }, []);

  return (
    <div>
      <Title>Postulantes</Title>
      <ApplicantWrapper>
        {isLoading &&
          initialAppFormShadows.map((_, id) => {
            return <ApplicantCardShadow key={id} />;
          })}

        {/* {isLoading && "CARGANDOOOOOOOOO"} */}
        {!isLoading &&
          applicants.map(
            ({
              id,
              personalInfoName,
              personalInfoLastName,
              personalInfoSecondLastName,
              personalInfoPhoto,
              signAcceptPublicImage,
            }) => (
              <ApplicantCard
                key={id}
                publicPhoto={signAcceptPublicImage}
                img={personalInfoPhoto}
                name={personalInfoName}
                lastName={personalInfoLastName}
                secondLastName={personalInfoSecondLastName}
              />
            )
          )}

        {!isLoading && applicants.length === 0 && (
          <MainMessage>No hay ninguna solicitudes :(</MainMessage>
        )}
      </ApplicantWrapper>
    </div>
  );
};

const Title = styled.h2`
  margin-top: 2rem;
  text-align: center;
`;

const ApplicantWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  gap: 1.5625rem;
`;

const MainMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.25rem;
`;

export default ApplicationsPage;
