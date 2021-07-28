import { useState } from "react";
import styled from "styled-components";
import { ApplicantCard } from "../ApplicantCard";

const applicantsInitial = [
  {
    id: 1,
    name: "Luis Fernando",
    lastName: "López",
    secondLastName: "Gutiérrez",
  },
  {
    id: 2,
    name: "Carlos",
    lastName: "Fernandez",
    secondLastName: "Salgado",
  },
  {
    id: 3,
    name: "Jesús",
    lastName: "Torres",
    secondLastName: "De la cruz",
  },
];

const ApplicationsPage = () => {
  const [applicants, setApplicants] = useState(applicantsInitial);

  return (
    <div>
      <Title>Postulantes</Title>
      <ApplicantWrapper>
        {applicants.map(({ id, name, lastName, secondLastName }) => (
          <ApplicantCard
            key={id}
            name={name}
            secondLastName={secondLastName}
            lastName={lastName}
          />
        ))}
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

export default ApplicationsPage;
