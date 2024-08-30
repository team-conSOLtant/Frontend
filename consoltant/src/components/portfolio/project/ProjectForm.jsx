import React, { useState } from "react";
import styled from "styled-components";
import RangeDatePicker from "../../common/RangeDatePicker";
import ProjectLanguageDTO from "../../../dto/ProjectLanguageDTO";
import ProjectContentDTO from "../../../dto/ProjectContentDTO";

const ProjectTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ProjectLeftTop = styled.div`
  width: 70%;
`;
const ProjectRightTop = styled.div`
  width: 20%;
`;

const ProjectItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  width: 40rem;
  font-size: 1rem;
  border: #b9d5ff 0.1rem solid;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0;
`;

const ProjectLabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ProjectInputMargin = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
  width: calc(100% - 1.5rem);
  margin-left: 1.5rem;
`;
const ProjectInputMarginWithButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100%-1.5rem);
  margin-left: 1.5rem;
  justify-content: space-between;
  align-items: center;
`;
const ProjectInputMarginWithButton = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;

  padding-left: 0.3rem;
  width: 94%;
`;
const PlusButtonLarge = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #c7c7c7;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 1.1rem;
  line-height: 1.2rem;
`;

const ProjectInputLarge = styled.textarea`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding: 0.1rem 0.5rem;
  align-items: baseline;
  width: 94%;
  height: 5rem;
  resize: none; /* 크기 조절 비활성화 */
  margin-left: 1.5rem;
  font-size: 0.9rem;
`;

const BulletPoint = styled.div`
  background-color: #d9d9d9;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  margin: 0.3rem;
`;
const ProjectSelectedKeywordContainer = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
  margin-left: 1.5rem;
`;

const ProjectTeamComposition = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
  margin-left: 1.5rem;
`;

const LanguageTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(185, 213, 255, 0.3);
  width: auto;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  margin: 0 0.2rem;
  padding: 0 0.3rem;
  border-radius: 0.5rem;
`;
const LanguageTag = styled.div``;
const LanguageTagDeleteButton = styled.div`
  margin-left: 0.2rem;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(185, 213, 255, 0.3);
  width: auto;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  margin: 0 0.2rem;
  padding: 0 0.3rem;
  border-radius: 0.5rem;
`;

const PlusButton = styled.div`
  background-color: gray;
  color: white;
  text-align: center;
  line-height: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
`;
const SubmitButton = styled.div`
  width: 100%;
  background-color: #b9d5ff;
  color: white;
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2rem;
  margin-bottom: 0.3rem;
`;

const ProjectDescriptionLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DatePickerStyle = styled.input``;

function ProjectForm({ data, updateForm, submitForm }) {
  // const [introductionCount, setIntroductionCount] = useState();
  const [languageWord, setlanguageWord] = useState("");
  const [contentForms, setContentForms] = useState([]);

  const _changeTitle = (value) => {
    updateForm({ ...data, title: value });
  };
  // const _changeKeyword = (value) => {
  //   updateForm({ ...data, contents: value });
  // };
  const _changeDescription = (value) => {
    updateForm({ ...data, description: value });
  };
  const _changeOrganization = (value) => {
    updateForm({ ...data, awardOrganization: value });
  };
  const _changeProjectUrl = (value) => {
    updateForm({ ...data, projectUrl: value });
  };
  const _changeStartDate = (value) => {
    updateForm({ ...data, startDate: value });
  };
  const _changeEndDate = (value) => {
    updateForm({ ...data, endDate: value });
  };

  const _addLanguageWord = () => {
    console.log(
      " data.language data.language data.language data.language data.language data.language",
      [...data.language, new ProjectLanguageDTO(languageWord)]
    );
    updateForm({
      ...data,
      language: [...data.language, new ProjectLanguageDTO(languageWord)],
    });
    setlanguageWord();
  };

  const _deleteWordTag = (key) => {
    console.log(key);
    console.log(data.language);
    updateForm({
      ...data,
      language: data.language.filter((dto) => dto.key !== key),
    });
  };
  const _addContent = () => {
    // setDescription({
    //   title: description.title,
    //   contents: ["", ...description.contents],
    // });
    setContentForms([...contentForms, new ProjectContentDTO()]);
  };
  const _changeContent = (dto, newContent) => {
    setContentForms((prevForms) =>
      prevForms.map((form) =>
        dto.key === form.key
          ? { ...form, content: newContent } // updatedForm을 직접 정의하여 content 값 수정
          : form
      )
    );
    console.log("contentFormscontentFormscontentForms", contentForms);
  };
  const handleUpdateAndSubmit = async () => {
    try {
      // updateForm이 프로미스를 반환한다고 가정
      console.log("datadatadatadatadatadatadata", data);

      console.log(contentForms);
      await updateForm({ ...data, contents: contentForms }); // updateForm이 완료될 때까지 기다림
      console.log("datadatadatadatadatadatadata", data);
      submitForm(); // updateForm이 완료된 후 submitForm 실행
    } catch (error) {
      console.error("업데이트 중 오류 발생:", error); // 에러 처리
    }
  };
  return (
    <ProjectItemStyle>
      <ProjectTop>
        <ProjectLeftTop>
          <ProjectDescriptionLine>
            <BulletPoint />
            프로젝트명
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="프로젝트명을 입력해주세요"
            value={data?.title}
            onChange={(e) => _changeTitle(e.target.value)}
          />
          <ProjectDescriptionLine>
            <BulletPoint />
            키워드
          </ProjectDescriptionLine>
          <ProjectInputMarginWithButtonContainer>
            <ProjectInputMarginWithButton
              placeholder="키워드를 입력해주세요"
              value={languageWord}
              onChange={(e) => setlanguageWord(e.target.value)}
            />
            <PlusButtonLarge onClick={_addLanguageWord}>+</PlusButtonLarge>
          </ProjectInputMarginWithButtonContainer>
          <ProjectSelectedKeywordContainer>
            {data.language?.map((wordDTO) => (
              <LanguageTagContainer>
                <LanguageTag>{wordDTO.word}</LanguageTag>
                <LanguageTagDeleteButton
                  onClick={() => _deleteWordTag(wordDTO.key)}
                >
                  x
                </LanguageTagDeleteButton>
              </LanguageTagContainer>
            ))}
          </ProjectSelectedKeywordContainer>

          <ProjectDescriptionLine>
            <BulletPoint />
            프로젝트 소개
            <PlusButtonLarge onClick={_addContent}>+</PlusButtonLarge>
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="소개 제목을 입력해주세요"
            value={data?.description}
            onChange={(e) => _changeDescription(e.target.value)}
          />
          {contentForms.map((dto) => (
            <ProjectInputLarge
              placeholder="소개 상세내용을 입력해주세요"
              value={dto.content}
              onChange={(e) => _changeContent(dto, e.target.value)}
            />
          ))}
          <ProjectDescriptionLine>
            <BulletPoint />팀 구성
          </ProjectDescriptionLine>
          <ProjectInputMargin placeholder="팀 구성원을 이메일로 추가해보세요" />
          <ProjectTeamComposition>
            {["@김준우", "@고다현", "@이동열"].map((text) => (
              <Tag>{text}</Tag>
            ))}
          </ProjectTeamComposition>
          <ProjectDescriptionLine>
            <BulletPoint />
            URL
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="URL을 입력해주세요"
            value={data?.projectUrl}
            onChange={(e) => _changeProjectUrl(e.target.value)}
          />
        </ProjectLeftTop>
        <ProjectRightTop>
          <DatePickerStyle
            type="date"
            value={data.startDate}
            onChange={(e) => _changeStartDate(e.target.value)}
          ></DatePickerStyle>
          <DatePickerStyle
            type="date"
            value={data.endDate}
            onChange={(e) => _changeEndDate(e.target.value)}
          ></DatePickerStyle>
        </ProjectRightTop>
      </ProjectTop>
      {/* <ProjectIntroduction>
        <ProjectIntroductionTitle>프로젝트 소개</ProjectIntroductionTitle>
        <ProjectIntroductionContentContainer>
          <ProjectInputContainer>
            <BulletPoint />
            <ProjectInput
              placeholder="프로젝트에 대해 간단한 소개를 적어주세요"
              value={description.title}
            />
          </ProjectInputContainer>
        </ProjectIntroductionContentContainer>
      </ProjectIntroduction> */}
      <ProjectLabelStyle></ProjectLabelStyle>

      <ProjectLabelStyle></ProjectLabelStyle>
      <SubmitButton onClick={handleUpdateAndSubmit}>제출</SubmitButton>
    </ProjectItemStyle>
  );
}

export default ProjectForm;
