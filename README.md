# 📈 SOL 학생 로드맵 - Front-end
```git
⚡ 2024.08.16 ~ 2024.08.31
```
&nbsp;&nbsp; <strong>SOL 학생 로드맵: </strong> 
학생/선후배 life 여정 Data 기반으로 포트폴리오와 모범 금융 로드맵을 제공하는 고객 락인(Lock-in) 금융 플랫폼
<br />



- [Gemini, Tmap API 활용 여행지 추천](https://github.com/TongueTripVogue/Tongue_Front?tab=readme-ov-file#1-gemini-tmap-api-%ED%99%9C%EC%9A%A9-%EC%97%AC%ED%96%89%EC%A7%80-%EC%B6%94%EC%B2%9C)


<div align="center">
   <img src="https://github.com/TongueTripVogue/Tongue_Front/assets/101400650/3e934931-9925-4c00-8963-e4309671611d"  width="600" >
      <br />
      <a href="https://youtu.be/30pMGAV7OHY?si=3gT0Z4cGARxQhAgo">서비스 시연 영상</a>
</div>

## ⭐ Using Stacks <br/>
```git
📌 Vue, Gemini API, Tmap API, Vite, HTML, CSS, Tailwind, JavaScript, axios
```

### &nbsp;&nbsp; Vue 사용 이유<br />
> ▪️ SPA(Single Page Applicatione)로 구조가 가벼운 반응형 시스템 제공 <br/>
> ▪️ 사용자 경험을 향상시키고 애플리케이션의 성능 개선의 장점이 존재

### &nbsp;&nbsp; Gemini API 사용 이유<br />
> ▪️ Google 엔진 검색 기반인 Gemini API를 활용하여 최신 정보와 사용자 정보를 실시간으로 최적화 일정 결과 제공

<br />

## 1. Gemini, Tmap API 활용 여행지 추천
>
<div align="center">
      <img src="https://github.com/TongueTripVogue/Tongue_Front/assets/101400650/e6929108-f669-4651-9278-9e118c996aec"  width="600" >
</div>
<br />

### 기능 
- Gemini로 `사용자 정보(일정, 예산, 장소, 이동 수단 등)` 고려하여 일정 추천
- Tmap API로 실시간 경유지 제공 및 해당 반경 호텔, 편의점 등 정보 제공
- 실시간 일정 `drag & drop`으로 추가 및 수정 가능

### 구현방법 :
> Gemini prompt, 사용자 일정 json 형태로 제공 받는 prompt
   ``` js
      const genAI = new GoogleGenerativeAI(VITE_GEMINI_SERVICEKEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
   
      async function run() {
        let prompt = "";
        prompt += `${demand.location} ${demand.days - 1}박${demand.days}일 여행 코스 알려줘.`;
        prompt += `일정은 최대 3개씩 하루에 두 번, ${demand.days * 3}총 개만 알려줘.`;
        prompt += "걷기 다니기 좋은 곳 출발 지점과 도착지점을 함께 추천해줘.";
        prompt += "각 일정에는 날짜(1), 장소, 이동 수단(버스, 도보, 차량) 중 하나, 장소 간단한 설명, 예상 비용(1000).";
        prompt += "json format으로 추천해줘, 컬럼명은 영어, value는 한국어로 제공해줘";
        prompt += `컬럼명는 다음과 같아, 날짜는 "day",장소는 "loc", 이동 수단은 "transport", 도착 장소에 대한 간단한 설명은 "des".`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
         
        console.log(text);
        const jsonData = text.split("```")[1].split("json")[1];
        console.log(JSON.parse(jsonData));
        return JSON.parse(jsonData);
      }
   ```

<br />

> js 생성자 활용하여 일관된 정보를 back server에 post 전송
   ```js
   // 생성자
   class Plan {
     day;
     loc;
     transport;
     des;
     cost;
     lat;
     lon;
     address;
     id;
   
     constructor(day, loc, transport, des, cost) {
       this.day = day;
       ...
       if (cost == null) {this.cost = 0;
       } else {this.cost = cost;}
     }
   }
   
   // 계획 저장
   const sendPlanList = () => {
     instance.defaults.headers.common["Authorization"] = sessionStorage.getItem("userToken");
     ...
   
     instance
       .post("/travel/regist", planList.value, {
         params: sendParams,
       })
       .then((res) => {
         router.push({ name: "mypage" });
       })
       .catch((err) => {
         console.log(err);
       });
   };
   ```
<br/>

### FE 기술 스택

- **react**: `^18.3.1`

- **@reduxjs/toolkit**: `^2.2.7`

- **react-redux**: `^9.1.2`

- **axios**: `^1.7.4`

- **chart.js**: `^4.4.3`

- **react-router**: `^6.26.1`

- **react-router-dom**: `^6.26.1`

- **styled-components**: `^6.1.12`

- **tailwindcss**: `^3.4.10`

### 빌드 및 실행 방법

서비스는 [https://consoltant.site](https://consoltant.site/) 에 배포되어 있습니다.

```
npm install
npm start
```
