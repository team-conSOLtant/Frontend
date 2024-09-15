# 📈 SOL 학생 로드맵 - Front-end

💡 선후배 연결을 통한 고객의 취업과 재산 관리를 해주는 SOL 학생 로드맵 서비스 입니다.

```git
⚡ 2024.08.16 ~ 2024.08.31
```

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

<br />

### &nbsp;&nbsp; 컴포넌트 분리 및 재활용<br />


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

> ▪️ 위와 같이 DB Table을 기준으로 컴포넌트를 나누었습니다.</br>
> ▪️ 각 Table별로 Section, Form, Item 컴포넌트로 구분하였습니다.

MakePortfolioPage와 PortfolioPage 모두에서 Section 컴포넌트를 사용합니다.

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

<div style="display: flex; justify-content: space-between;">
  <div>
    <img src="image-1.png" alt="Image 1" style="width: 90%;">
  </div>
  <div>
    <img src="image-2.png" alt="Image 2" style="width: 95%;">
  </div>
</div>

</br>

> ▪️ 추후 유지 보수시 Section 컴포넌트 하나만 수정하면 두 개의 페이지에 모두 적용되는 효과를 기대할 수 있습니다.



<br />

## 📌주요 기능
1. [검색](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#1-%EA%B2%80%EC%83%89)
2. [메인화면 원형 스크롤](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#2-%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9B%90%ED%98%95-%EC%8A%A4%ED%81%AC%EB%A1%A4)
3. [DTO를 이용한 데이터 양식 일관화](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#3-dto%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%96%91%EC%8B%9D-%EC%9D%BC%EA%B4%80%ED%99%94)

<br />

## 1. 검색

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


## 2. 메인화면 원형 스크롤

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

## 3. DTO를 이용한 데이터 양식 일관화

### 기능

- DTO를 이용하여 데이터 양식을 일관화

### 구현방법 : 

> class로 DTO를 구현하였고, Axios로 데이터를 받아오면 DTO에 넣어 관리하였습니다. </br>
> 다음과 같은 파일 구조를 갖고, 그 중 하나인 AwardDTO입니다.

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


```js
export default class AwardDTO {
  static lastKey = 0;
  constructor(
    awardId = null,
    portfolioId = null,
    title = null,
    content = null,
    awardGrade = null,
    awardOrganization = null,
    acquisitionDate = null
  ) {
    this.key = AwardDTO.lastKey++;
    this.awardId = awardId;
    this.portfolioId = portfolioId;
    this.title = title;
    this.content = content;
    this.awardGrade = awardGrade;
    this.awardOrganization = awardOrganization;
    this.acquisitionDate = acquisitionDate;
  }
}
```

### Trouble Shooting

> 초기에는 DTO없이 모든 데이터를 JSON 형식으로 관리하였습니다.</br>
> 이렇게 구현하니 제가 짠 코드임에도 헷갈리고 유지보수하기 어려웠습니다.


### Solution

> BackEnd에서 사용하는 DTO를 적용하면 좋을 것 같아 DTO를 따로 구현하였습니다.

### Insight

> 데이터 양식이 헷갈릴 때, DTO 파일만 확인하면 되었기 때문에 개발 속도가 빨라질 수 있었습니다. </br>
> 덕분에 데이터 양식을 맞추고 정해두는 것의 중요성을 배웠습니다.

<br />

## 📝느낀점

### 김준우
> 하나의 페이지에 많은 데이터를 담고 있어서 자칫하면 코드가 너무 길어질 수 있다고 생각했습니다. 그래서 읽기 쉽고 이해하기 쉬운 코드를 짜기 위해서는 컴포넌트를 잘 분리하는 것이 중요하다고 생각했었습니다.
덕분에 컴포넌트 분리는 성공적이었지만, 데이터 양식을 일관화하지 못해 시간 소요가 많았습니다. 또한 데이터의 흐름을 고려하지 않고 개발하여서 뒤늦게 구현 로직을 변경해야 하는 경우도 생겼습니다.</br>
잘한 점, 못한 점이 모두 있었지만 데이터 양식, 데이터 플로우를 고려한 개발을 해야함을 배웠기에 의미있는 프로젝트였습니다.

### 지수영
>
