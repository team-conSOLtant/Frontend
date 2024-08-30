import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import ActivityForm from "./ActivityForm";
import ActivityItem from "./ActivityItem";
import ActivityDTO from "../../../dto/ActivityDTO";

const ActivitySectionStyle = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
`;

const PlusBoxContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxStyle = styled.div`
  height: 80%;
  width: 60%;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxButton = styled.div`
  --ball-size: 1.5rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 2rem;
  background-color: #c7c7c7;
  text-align: center;
  color: white;
  font-family: "OneShinhanBold";
`;

function ActivitySection({ isEdit, activityItems, setActivityItems }) {
  const [activityForms, setActivityForms] = useState([new ActivityDTO()]);

  const addActivityForm = () => {
    setActivityForms([...activityForms, new ActivityDTO()]);
  };

  const updateActivityForm = (updatedForm) => {
    setActivityForms((prevForms) =>
      prevForms.map((form) =>
        form.key === updatedForm.key ? updatedForm : form
      )
    );
  };

  const submitActivityForm = (newForm) => {
    setActivityItems([...activityItems, newForm]);
    setActivityForms(activityForms.filter((form) => form.key !== newForm.key));
  };

  const editActivityItem = (data) => {
    setActivityForms([...activityForms, data]);
    setActivityItems(activityItems.filter((item) => item.key !== data.key));
  };

  const deleteActivityItem = (data) => {
    setActivityItems(activityItems.filter((item) => item.key !== data.key));
  };

  // const editCertificationItem = (data) => {
  //   setActivityForms([...activityForms, data]);
  //   setActivityItems(activityItems.filter((item) => item.key !== data.key));
  // };

  // const deleteCertificationItem = (data) => {
  //   setActivityItems(activityItems.filter((item) => item.key !== data.key));
  // };

  return (
    <ActivitySectionStyle>
      <SectionHeader title={"대외활동"} image={"/Community.svg"} />
      <SectionBody>
        {isEdit && (
          <PlusBoxContainer>
            <PlusBoxStyle onClick={addActivityForm}>
              <PlusBoxButton>+</PlusBoxButton>
            </PlusBoxStyle>
          </PlusBoxContainer>
        )}
        {isEdit &&
          activityForms.length > 0 &&
          activityForms.map((data) => (
            <ActivityForm
              key={data.key}
              data={data}
              updateForm={updateActivityForm}
              submitForm={() => submitActivityForm(data)}
            />
          ))}
        {activityItems.map((data) => (
          <ActivityItem
            isEdit={isEdit}
            data={data}
            key={data.key}
            editItem={() => editActivityItem(data)}
            deleteItem={() => deleteActivityItem(data)}
          />
        ))}
      </SectionBody>
    </ActivitySectionStyle>
  );
}

export default ActivitySection;
