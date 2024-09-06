# 📈 SOL 학생 로드맵 - Front-end

```git
⚡ 2024.08.16 ~ 2024.08.31
```

&nbsp;&nbsp; <strong>SOL 학생 로드맵: </strong>
학생/선후배 life 여정 Data 기반으로 포트폴리오와 모범 금융 로드맵을 제공하는 고객 락인(Lock-in) 금융 플랫폼
<br />

- [메인화면 원형 스크롤](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#1-%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4-%EC%9B%90%ED%98%95-%EC%8A%A4%ED%81%AC%EB%A1%A4)
- [컴포넌트 재활용](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#2-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9E%AC%ED%99%9C%EC%9A%A9)
- [DTO를 이용한 어댑터 패턴 구현](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#3-dto%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%96%B4%EB%8C%91%ED%84%B0-%ED%8C%A8%ED%84%B4-%EA%B5%AC%ED%98%84)
- [검색](https://github.com/team-conSOLtant/Frontend?tab=readme-ov-file#4-%EA%B2%80%EC%83%89)

## ⭐ Using Stacks <br/>

```git
📌 React, Redux, chart.js, Gemini API, Vite, HTML, CSS, Tailwind, Styled Components,JavaScript, axios
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

## 1. 회원가입 시 계좌 생성 및 1원 인증

## 2. 메인화면 원형 스크롤

## 1. 메인화면 원형 스크롤

<div align="center">
      <img src="https://github.com/user-attachments/assets/fb31a3cc-a99c-497a-8ec8-56568c99a678"  width="600" >
</div>
<br />

### 기능

- 마우스 스크롤 이벤트로 원형 메뉴 자동 이동 기능
- 메뉴 이동에 따라 다른 페이지 렌더링
- 메뉴 이동에 따라 전체 메인 페이지 테마 색 적용

### 구현방법 :

> 화면 크기에 따른 원 지름(Radius) 계산 및 설정

```js
const [radius, setRadius] = useState(0); // 반지름을 상태로 관리

useEffect(() => {
  updateRadius(); // 초기 반지름 설정
  window.addEventListener("resize", updateRadius); // 화면 크기 변경 시 반지름 업데이트
  return () => window.removeEventListener("resize", updateRadius);
}, []);

const updateRadius = () => {
  const newRadius = window.innerWidth * 0.57; // 화면 크기에 맞게 반지름 설정
  console.log("Calculated radius:", newRadius); // radius 값을 확인하기 위해 로그 추가
  if (newRadius < 675) {
    setRadius(675);
  } else {
    setRadius(newRadius);
  }
};
```

<br />

> 원 지름에 따른 메뉴 위치 설정

```js
{
  /* 원형 스크롤 구현 */
}
{
  infos &&
    infos.map((info, index) => {
      const angleStep = Math.PI / 36;
      const itemAngle = (index - infos.length + 1) * angleStep;
      const x = (radius + 90) * Math.cos(itemAngle);
      const y = (radius + 90) * Math.sin(itemAngle);

      return (
        <div
          key={index}
          className={`absolute rounded-full bg-white shadow-lg flex justify-center items-center transition-transform ease-out duration-300`}
          style={{
            width: `${radius * 2}px`, // radius를 기준으로 width 설정
            height: `${radius * 2}px`, // radius를 기준으로 height 설정
            transform: `rotate(${angle}deg)`,
            left: "-25rem", // 원래 중심 위치로 유지
            boxShadow: `0px 0px 15px ${infos[itemIndex].rgba}`, // 현재 인덱스에 따른 그림자 색상 적용
          }}
        >
          <div
            key={index}
            className={`absolute flex justify-center items-center transition-transform ease-out duration-300`}
            style={{
              width: "10rem",
              height: "3rem",
              transform: `translate(${x}px, ${y}px) rotate(${itemAngle}rad)`,
            }}
          ></div>
        </div>
      );
    });
}
```

<br />

> 스크롤 이벤트 감지에 따라 index값 변경

```js
const handleScroll = (event) => {
  // infos가 존재하지 않으면 handleScroll 실행 안 함
  if (!infos || !infos.length) return;

  const scrollableDiv = document.querySelector(".scrollable-container");
  if (scrollableDiv && scrollableDiv.contains(event.target)) {
    return; // 스크롤이 특정 컨테이너 내에서 발생하면, 부모의 스크롤 이벤트를 무시
  }

  if (event.deltaY > 0) {
    // Scroll down (upward movement in UI)
    if (itemIndex > 0) {
      setAngle((prevAngle) => prevAngle + 5);
      setItemIndex((prevIndex) => prevIndex - 1);
    }
  } else {
    // Scroll up (downward movement in UI)
    if (itemIndex < infos.length - 1) {
      setAngle((prevAngle) => prevAngle - 5);
      setItemIndex((prevIndex) => prevIndex + 1);
    }
  }
};

useEffect(() => {
  window.addEventListener("wheel", handleScroll);
  return () => {
    window.removeEventListener("wheel", handleScroll);
  };
}, [itemIndex, infos]);
```

<br/>

### Trouble Shooting

> 메인화면 전체의 ScrollEvent 감지로 인해 하위 컴포넌트 요소였던 장바구니 내의 ScrollEvent가 감지되지 않는 문제 발생

### Solution

> event.stopPropagation()으로 ScrollEvent의 상속을 끊어줌

```js
const handleWheel = (event) => {
  event.stopPropagation();
};
```

### Insight

> event도 상속이 된다는 것을 배웠으며 같은 페이지 내에 event 충돌에 대해 유의 해서 코드를 작성해야한다는 것을 배움
> <br />

## 3. 컴포넌트 재활용

**3.1.** MakePortfolioPage와 PortfolioPage의 화면 구성이 비슷하기 때문에 각 Section을 구분하여 양 페이지에 사용하였습니다.

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

**3.2.** Section의 Header가 모두 동일한 양식이었기에 SectionHeader를 따로 컴포넌트로 구분하였습니다.

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

- 위와 같이 AwardItem, AwardForm 등을 Portfolio 페이지와 MakePortfolioPage에서 모두 사용하여

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

### 예시

#### ActivityDTO

```js
export default class ActivityDTO {
  static lastKey = 0;
  constructor(
    activityId = null,
    portfolioId = null,
    title = null,
    content = null,
    startDate = null,
    endDate = null,
    activityType = null,
    contentTitle = null
  ) {
    this.key = ActivityDTO.lastKey++;
    this.activityId = activityId;
    this.portfolioId = portfolioId;
    this.title = title;
    this.content = content;
    this.startDate = startDate;
    this.endDate = endDate;
    this.activityType = activityType;
    this.contentTitle = contentTitle;
  }
}
```

#### AwardDTO

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

## 4. 검색

<div align="center">
      <img src="https://github.com/user-attachments/assets/fb31a3cc-a99c-497a-8ec8-56568c99a678"  width="600" >
</div>

<br />

### 기능

- 검색란 입력시 자동 검색
- 무한 스크롤

### 구현방법:

> 키보드 이벤트 감지하여 state update 후 값 전달하여 axios 실행

```js
const fetchSearchResults = useCallback(
  async (cursor = "") => {
    const searchParams = {
      keyword,
      isEmployed,
      minGpa,
      maxGpa,
    };
    const response = await getSearch(cursor, size, searchParams);
    if (response && response.result) {
      setLast(response.result.last);
      setSearchedList((prevList) => [...prevList, ...response.result.content]);
    }
  },
  [keyword, isEmployed, minGpa, maxGpa, size]
);

useEffect(() => {
  fetchSearchResults();
}, [fetchSearchResults]);
```

<br />

> scroll 화면의 마지막 부분 감지하며 검색결과 최종 item인지(last) 확인 후 최종 item이 아니라면 가작 마지막으로 불러온 item id로 검색 api 불러오기

```js
const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !last && searchedList.length > 0) {
      const lastIndex = searchedList.length - 1;
      fetchSearchResults(searchedList[lastIndex].portfolioId);
    }
  }, [inView, last, searchedList, fetchSearchResults]);

  useEffect(() => {
    fetchSearchResults(); // 상태가 변경될 때마다 새로운 검색 결과를 가져옴
  }, [keyword, isEmployed, minGpa, maxGpa]);

return(
      {searchedList &&
          searchedList.map((portfolio, index) => {
            return (
              <SearchItem key={index} portfolio={portfolio} index={index} />
            );
          })}
        {searchedList.length > 0 && <div ref={ref}></div>}
)

```

<br />

### Trouble Shooting

> 검색 api를 호출 할 때마다 이전 입력 값이 반영되면서 검색 데이터가 한템포 밀리는 현상 발생

### Solution

> callback 함수를 사용하여 검색 api 호출 전 데이터 업데이트 완료

```js
const fetchSearchResults = useCallback(
  async (cursor = "") => {
    const searchParams = {
      keyword,
      isEmployed,
      minGpa,
      maxGpa,
    };
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

> 상태변화가 다양하게 일어나고 비동기 렌더링으로 인해 원하는 순서대로 데이터 반영이 되지 않음을 배웠으며 이를 useCallBack 함수를 사용하여 컴포넌트의 리렌더링 건너뛰어서 Memoized 콜백에서 상태 업데이트할 수 있음을 배웠습니다.
> <br />
