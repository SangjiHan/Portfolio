![header](https://capsule-render.vercel.app/api?type=Rounded&color=0:FA8072,100:FA8072&height=160&text=강남%20맛집%20추천&fontColor=FFFFFF&fontSize=40&width=700&fontAlignY=50)


<br />

# 👋 소개

> 강남 맛집 추천 사이트에 오신 것을 환영합니다! <br />
> 이 사이트는 맛집을 종류별, 지역별로 구분하여 쉽게 찾을 수 있도록 도와줍니다. <br />
> 회원 가입 후에는 직접 맛집 리뷰를 작성하고, 맛집을 신청하거나 저장할 수 있는 기능도 제공됩니다. <br />

<br />

# 🧑‍🤝‍🧑 팀원 소개

- **유영현 (팀장)** : 형상 관리 및 사용자 페이지 기능 구현 담당
- **박일규** : 관리자 페이지 UI/UX 디자인 및 기능 구현 담당
- **이혜민** : 사용자 페이지 UI/UX 디자인 및 전체 프론트엔드 디자인 담당
- **한상지** : 데이터베이스 설계 및 연동, 리뷰/검색/가게 리스트 기능 구현 담당
  
<br />

# 프로젝트 기간
> 2024.07 ~ 2024.08

<br />

# 개발 도구
- 개발 언어 <img src="https://img.shields.io/badge/HTML5-F16529?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 badge"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 badge"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript badge"> <img src="https://img.shields.io/badge/JAVA-F7E03C?style=for-the-badge&logo=java&logoColor=000000" alt="JAVA badge"><img src="https://img.shields.io/badge/JSP-red?style=for-the-badge&logo=jsp&logoColor=gray" alt="JSP badge"> <br />
- 개발 환경 <img src="https://img.shields.io/badge/STS4-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Tool Suite 4 badge"> <br />
- 데이터베이스 <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white&color=4479A1" alt="MySQL badge"> <br />
- 빌드 <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white&color=02303A" alt="Gradle badge"> <br />
- 형상 관리 <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white&color=F05032" alt="Git badge"> <br />
- 프레임워크 : <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot badge"> <img src="https://img.shields.io/badge/JPA-0074CC?style=for-the-badge&logo=java&logoColor=white" alt="JPA badge"> <img src="https://img.shields.io/badge/MyBatis-00205B?style=for-the-badge&logo=mybatis&logoColor=white" alt="MyBatis badge"> <br />
 <br />


# 파일 설치 가이드
- 프로젝트의 모든 파일을 다운로드하여 로컬 환경에 저장합니다. <br />
- [Spring Tool Suite 4 공식 웹사이트](https://spring.io/tools)에서 STS4를 다운로드하고 설치합니다. <br />
- [JDK 17 다운로드 페이지](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)에서 JDK 17을 다운로드하여 설치합니다. <br />
- JDK 설치 후, 환경변수 JAVA_HOME을 JDK가 설치된 경로로 설정합니다. <br />
- [Lombok 공식 웹사이트](https://projectlombok.org/)에서 Lombok JAR 파일을 다운로드합니다. <br />
- 다운로드한 Lombok JAR 파일을 STS4의 dropins 폴더에 복사합니다. (예: C:\Program Files\SpringToolSuite4\dropins) <br />
- [MySQL 공식 웹사이트](https://dev.mysql.com)에서 MySQL을 다운로드하여 설치합니다. <br />
- MySQL 설치 후, yummy라는 사용자와 yummy라는 데이터베이스를 생성합니다. <br />
- 설치가 완료된 STS4를 실행합니다. <br />
- 웹 브라우저를 열고 http://localhost:8085를 입력하여 애플리케이션이 정상적으로 실행되는지 확인합니다. <br />
<br />

# 프로젝트 소개

## 시스템 구조도
> ![그림1](https://github.com/user-attachments/assets/3820996c-70b3-4ed2-9f1f-7a64c10787cf) <br />
> - 퍼블릭 페이지: 로그인이 필요 없는 공개 페이지로, 누구나 접근할 수 있습니다. <br />
> - 사용자 페이지: 사용자 전용 페이지로, 로그인 후에만 접근 가능하며, 개인화된 기능을 제공합니다. <br />
> - 관리자 페이지: 관리자가 시스템을 운영하고 관리할 수 있는 페이지로, 사용자와 데이터 관리를 위한 기능을 포함합니다. <br />


<br />

## 데이터 베이스
> ![그림2](https://github.com/user-attachments/assets/5aca5ecb-a7b9-4cfa-966a-70319036adc3) <br />
> - CUID 형식: 데이터베이스는 CUID(Compact Unique Identifier) 형식을 사용하여 고유한 식별자를 생성합니다. <br />
> - 기본키 및 외래키: 테이블 간의 관계를 정의하고 데이터의 무결성을 유지하기 위해 기본키와 외래키를 설정했습니다. <br />
> - 연동과 무결성: 테이블 간의 연동이 용이하며, 데이터 무결성을 효과적으로 유지하도록 설계되었습니다. <br />

<br />

## 1. 🌞: Weather

> 실시간 날씨 정보 제공 사이트 
>
> - 개발기간 : 2024.06
> - 핵심 역할 : 오픈 API를 활용한 실시간 날씨 정보 제공 사이트
>
> 프론트엔드:
> Language: HTML, CSS, JavaScript <br />
>
> [프로젝트 상세 설명](https://github.com/SangjiHan/Weather)  


<br />

## 2. 🎥: MovieCloud

>  영화 정보 제공 사이트
>
> - 개발기간 : 2024.02 - 2024.06
> - 핵심 역할 : 오픈 API를 활용한 영화 정보 제공 사이트
>   
> 프론트엔드:
> Language: HTML, CSS, JavaScript
> 
> [프로젝트 상세 설명](https://github.com/SangjiHan/MovieCloud)

<br />

## 3. 👱: ChatService

> 웹 채팅 사이트
>
> - 개발기간 : 2024.05 - 2024.06
> - 핵심 역할 : 실시간 웹 채팅 사이트, DB 구축, 친구 추가 기능, 서버 생성 기능, Restful API
>   
> 프론트엔드:
> Language: HTML, CSS, JavaScript
> 
> 백엔드:
> Language: Java, JSP
> Frameworks: Spring Boot, JPA, WebSocket
>Database: Oracle
> 
> [프로젝트 상세 설명](https://github.com/SangjiHan/chatService)

<br />

## 4. 🥘: yummy

>  강남 맛집 추천 사이트
>
> - 개발기간 : 2024.07 - 2024.08
> - 핵심 역할 : DB 생성 및 연동, 맛집 검색 기능, 랜덤 리스트 출력 기능, 맛집 저장 기능, 리뷰 작성 기능
>   
> 프론트엔드:
> Language: HTML, CSS, JavaScript
> 
> 백엔드:
> Language: Java, JSP
> Frameworks: Spring Boot, JPA
> Database: MySQL
> 
> [프로젝트 상세 설명](https://github.com/davidtwo000/green-yummy-project)

<br />

# 📝 Stack
> 제가 사용할 수 있는 기술입니다

### Front-end

<div>
    <img src="https://img.shields.io/badge/HTML5-F16529?style=for-the-badge&logo=html5&logoColor=white&color=F16529" alt="HTML5 badge">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&color=1572B6" alt="CSS3 badge">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000&color=F7DF1E" alt="JavaScript badge">
    <img src="https://img.shields.io/badge/JSP-F7E03C?style=for-the-badge&logo=java&logoColor=000000&color=F7E03C" alt="JSP badge">
</div>

### Back-end

<div>
    <img src="https://img.shields.io/badge/Java-F89820?style=for-the-badge&logo=java&logoColor=white&color=F89820" alt="Java badge">
    
    <img src="https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=java&logoColor=white&color=007396" alt="JPA badge">
    <img src="https://img.shields.io/badge/WebSocket-00BFAE?style=for-the-badge&logo=WebSocket&logoColor=white&color=00BFAE" alt="WebSocket badge">
    <img src="https://img.shields.io/badge/Python-306998?style=for-the-badge&logo=python&logoColor=white&color=306998" alt="Python badge">
</div>

### Database

<div>
    <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white&color=F80000" alt="Oracle badge">
    
</div>

### Build Tools

<div>
    <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white&color=C71A36" alt="Maven badge">
    
</div>

### Version Control

<div>
    
</div>
