# 📈 SOL 학생 로드맵 - Front-end

💡 선후배 연결을 통한 고객의 취업과 재산 관리를 해주는 SOL 학생 로드맵 서비스 입니다.

```git
⚡ 2024.08.16 ~ 2024.08.31
```

<br />

- [메인화면 원형 스크롤](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#1-%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9B%90%ED%98%95-%EC%8A%A4%ED%81%AC%EB%A1%A4)
- [컴포넌트 재활용](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#2-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9E%AC%ED%99%9C%EC%9A%A9)
- [DTO를 이용한 어댑터 패턴 구현](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#3-dto%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%96%91%EC%8B%9D-%EC%9D%BC%EA%B4%80%ED%99%94)
- [검색](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#4-%EA%B2%80%EC%83%89)

## ⭐ Using Stacks <br/>

```git
📌 React, Redux, chart.js, Vite, Tailwind, Styled Components, JavaScript, axios
```

### 빌드 및 실행 방법

서비스는 [https://consoltant.site](https://consoltant.site/) 에 배포되어 있습니다.

```
npm install
npm start
```

<br />

### &nbsp;&nbsp; React 사용 이유<br />

> ▪️ SPA(Single Page Applicatione)로 구조가 가벼운 반응형 시스템 제공 <br/>
> ▪️ JSX를 사용하여 컴포넌트 커스터마이징이나 자유도 면에서 Vue의 템플릿보다 확장성이 좋음

### &nbsp;&nbsp; Chart.js 사용 이유<br />

> ▪️

<br />

## 1. 메인화면 원형 스크롤

<div align="center">
      <img src="https://github.com/user-attachments/assets/c643ce22-04f8-4997-b53e-c531ff18df21"  width="600" >
</div>
<br />

### 기능

- 마우스 스크롤 이벤트로 원형 메뉴 자동 이동 기능
- 메뉴 이동에 따라 다른 페이지 렌더링 및 테마 색 적용

### 구현방법 :

> 화면 크기에 따른 원 지름(Radius)을 계산하여 설정했습니다.

```js
const [radius, setRadius] = useState(0); // 반지름을 상태로 관리

useEffect(() => {
  updateRadius(); // 초기 반지름 설정
  window.addEventListener("resize", updateRadius); // 화면 크기 변경 시 반지름 업데이트
  return () => window.removeEventListener("resize", updateRadius);
}, []);

const updateRadius = () => {
  const newRadius = window.innerWidth * 0.57; // 화면 크기에 맞게 반지름 설정
  setRadius(newRadius);
};
```

<br />

> 불러온 메뉴 목록의 길이로 각 메뉴 아이템의 위치 각도를 계산했습니다. <br />
> 화면 크기에 따라 계산된 원의 지름과 아이템별 위치 각도를 사용하여 cos/sin 값으로 x, y 좌표 계산하여 설정했습니다.

```js
{
  infos && infos.map((info, index) => {
      const angleStep = Math.PI / 36;
      const itemAngle = (index - infos.length + 1) * angleStep;
      const x = (radius + 90) * Math.cos(itemAngle);
      const y = (radius + 90) * Math.sin(itemAngle);
  }
}
```

<br />

> 스크롤 이벤트 감지에 따라 index값 변경

```js
  if (event.deltaY > 0) {// Scroll down
    if (itemIndex > 0) {
      setAngle((prevAngle) => prevAngle + 5);
      setItemIndex((prevIndex) => prevIndex - 1);
    }
  } else {// Scroll up
    if (itemIndex < infos.length - 1) {
      setAngle((prevAngle) => prevAngle - 5);
      setItemIndex((prevIndex) => prevIndex + 1);
    }
  }

```

### Trouble Shooting

> 메인화면 전체의 ScrollEvent 감지로 인해 하위 컴포넌트 요소였던 장바구니 내의 ScrollEvent가 감지되지 않는 문제가 발생했습니다.

### Solution

> event.stopPropagation()으로 ScrollEvent의 상속을 끊어주었습니다.

```js
const handleWheel = (event) => {
  event.stopPropagation();
};
```

### Insight

> event도 상속이 된다는 것을 배웠으며 같은 페이지 내 event 충돌에 유의해서 코드를 작성해야한다는 것을 배웠습니다.

<br />

## 2. 컴포넌트 재활용

```bash
components/portfolio/
│
├── activity/
│   ├── ActivityForm.jsx
│   ├── ActivityItem.jsx
│   └── ActivitySection.jsx
│
├── award and certification/
│   ├── AwardCertificationSection.jsx
│   ├── AwardForm.jsx
│   ├── AwardItem.jsx
│   ├── CertificationForm.jsx
│   └── CertificationItem.jsx
│
├── controller/
│   ├── CommentController.jsx
│   ├── PortfolioController.jsx
│   └── PortfolioControllerItem.jsx
│
├── education and career/
│   ├── CareerForm.jsx
│   ├── CareerItem.jsx
│   ├── EducationCareerSection.jsx
│   ├── EducationForm.jsx
│   └── EducationItem.jsx
│
├── makeportfolio/
│   ├── Card.jsx
│   ├── ItemTypes.jsx
│   ├── KeywordSection.jsx
│   ├── ProfileSection.jsx
│   ├── SearchItem.jsx
│   └── SectionTitle.jsx
│
├── project/
│   ├── ProjectForm.jsx
│   ├── ProjectItem.jsx
│   ├── ProjectSection.jsx
│   ├── ProfileViewSection.jsx
│   └── SectionHeader.jsx

```

> 위와 같이 DB Table을 기준으로 컴포넌트를 나누었습니다.

**2.1.** MakePortfolioPage와 PortfolioPage의 화면 구성이 비슷하기 때문에 각 Section을 구분하여 양 페이지에 사용하였습니다.

- /pages/PortfolioPage.jsx

```js
<AwardCertificationSection
  isEdit={false}
  certificationItems={certificationItems}
  setCertificationItems={setCertificationItems}
  awardItems={awardItems}
  setAwardItems={setAwardItems}
/>
```

- /pages/MakePortfolioPage.jsx

```js
<AwardCertificationSection
  id="awardAndCertification"
  isEdit={true}
  certificationItems={certificationItems}
  setCertificationItems={setCertificationItems}
  awardItems={awardItems}
  setAwardItems={setAwardItems}
/>
```

> 이를 통해 유지 보수를 용이하게 개발하였습니다.

**2.2.** Section의 Header가 모두 동일한 양식이었기에 SectionHeader를 따로 컴포넌트로 구분하였습니다.

- /components/portfolio/project/SectionHeader.jsx

```js
function SectionHeader(props) {
  return (
    <SectionHeaderStyle>
      <SectionTitleText>{props.title}</SectionTitleText>
      <SectionTitleIcon src={props.image} />
    </SectionHeaderStyle>
  );
}
export default SectionHeader;
```

### PortfolioPage.jsx & MakePortfolioPage.jsx

<div style="display: flex; justify-content: space-between;">
  <div>
    <img src="image-1.png" alt="Image 1" style="width: 90%;">
  </div>
  <div>
    <img src="image-2.png" alt="Image 2" style="width: 95%;">
  </div>
</div>

> 위와 같이 AwardSection을 양 페이지에 모두 사용하였습니다.

## 3. DTO를 이용한 데이터 양식 일관화

- DTO를 이용하여 데이터 양식을 일관화하였습니다.

### DTO 파일 구조

```bash
/dto
  ├── ActivityDTO.js
  ├── AwardDTO.js
  ├── CareerDTO.js
  ├── CertificationDTO.js
  ├── CourseDTO.js
  ├── ProjectDTO.js
  ├── ProjectContentDTO.js
  ├── ProjectLanguageDTO.js
  └── ProjectUserDTO.js
```

<br />

## 4. 검색

<div align="center">
      <img src="https://github.com/user-attachments/assets/e50985c3-cbd0-4dca-bb31-3cf224c56ff9"  width="600" >
</div>

<br />

### 기능
- 무한 스크롤

### 구현방법:

> scroll 화면의 마지막 부분 감지하며 검색 결과 최종 item인지(last) 확인했습니다. <br />
> 최종 item이 아니라면 가장 마지막으로 불러온 item id로 검색 api를 불러왔습니다.

```js
const [ref, inView] = useInView();

useEffect(() => {
    if (inView && !last && searchedList.length > 0) {
      const lastIndex = searchedList.length - 1;
      fetchSearchResults(searchedList[lastIndex].portfolioId);
    }
}, [inView, last, searchedList, fetchSearchResults]);

return(
      {searchedList && searchedList.map((portfolio, index) => {
            return (<SearchItem key={index} portfolio={portfolio} index={index} />);
      `})}
      {searchedList.length > 0 && <div ref={ref}></div>}
)

```

### Trouble Shooting

> 검색 api 호출 시 이전 검색 값이 반영되면서 검색 데이터가 한 템포 밀리는 현상이 발생했습니다.

### Solution

> callback 함수를 사용하여 검색 api 호출 전 데이터의 업데이트를 완료했습니다.

```js
const fetchSearchResults = useCallback(
  async (cursor = "") => {
    const searchParams = { keyword, isEmployed, minGpa, maxGpa,};
    const response = await getSearch(cursor, size, searchParams);
    if (response && response.result) {
      setLast(response.result.last);
      setSearchedList((prevList) => [...prevList, ...response.result.content]);
    }
  },
  [keyword, isEmployed, minGpa, maxGpa, size]
);
```

### Insight

> 상태변화가 다양하게 일어나고 비동기 렌더링으로 인해 원하는 순서대로 데이터 반영이 되지 않음을 배웠습니다. <br />
> 이를 useCallBack 함수를 사용하여 컴포넌트의 리렌더링을 건너뛰어 Memoized 콜백에서 상태 업데이트할 수 있음을 배웠습니다.

<br />
