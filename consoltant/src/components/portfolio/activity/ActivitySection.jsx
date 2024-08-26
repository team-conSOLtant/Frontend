import React from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import ActivityForm from "./ActivityForm";
import ActivityItem from "./ActivityItem";

const ActivitySectionStyle = styled.div`
  width: 100%;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ActivitySection({ isEdit, activities }) {
  return (
    <ActivitySectionStyle>
      <SectionHeader title={"대외활동"} image={"/Community.svg"} />
      <SectionBody>
        {isEdit && <ActivityForm />}
        {activities && activities.map((data) => <ActivityItem data={data} />)}
      </SectionBody>
    </ActivitySectionStyle>
  );
}

export default ActivitySection;
