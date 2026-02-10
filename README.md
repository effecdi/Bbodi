# 🎨 Bbodi Project (프로젝트명)

> **"사용자 경험(UX)을 최우선으로 고려한 디자인과 웹 표준을 준수하는 퍼블리싱"**
> 
> 안녕하세요, **9년 차 프리랜서 UI/UX 디자이너 겸 퍼블리셔** 이현정의 프로젝트 저장소입니다.  
> 기획부터 디자인, 마크업, 반응형 구현까지의 전 과정을 주도적으로 수행했습니다.

<br/>

## 📌 Project Overview (프로젝트 개요)
**Bbodi**는 [프로젝트의 핵심 목적을 한 문장으로 적어주세요. 예: 사용자의 친근한 경험을 유도하는 인터랙티브 웹 서비스]입니다.
단순한 정보 전달을 넘어, 심미적인 디자인과 견고한 마크업 구조를 통해 **디자인과 개발의 간극을 줄이는 것**을 목표로 했습니다.

* **작업 기간**: 202X.XX ~ 202X.XX
* **참여도**: 기획 & 디자인 (100%), 퍼블리싱 (100%)
* **주요 타겟**: [예: 2030 모바일 사용자 / 공공 서비스 이용자 등]

<br/>

## 🛠 Tech Stack (사용 기술)
디자이너의 의도를 100% 구현하고, 유지보수가 용이한 코드를 작성하기 위해 다음 기술을 사용했습니다.

| Category | Stacks |
| :--- | :--- |
| **Design** | <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white"/> |
| **Publishing** | <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white"/> |
| **Script** | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/> |
| **Collab** | <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"/> |

<br/>

## 🎨 Design Guidelines (디자인 가이드라인)
일관된 사용자 경험을 제공하기 위해 자체적인 디자인 시스템을 구축하고 적용했습니다.

### 1. Color Palette (컬러 시스템)
브랜드 아이덴티티를 나타내는 메인 컬러와 정보 전달을 위한 보조 컬러를 정의했습니다.

| Primary | Secondary | Background | Text |
| :---: | :---: | :---: | :---: |
| ![#FF5733](https://via.placeholder.com/15/FF5733/000000?text=+) `#FF5733` | ![#33FF57](https://via.placeholder.com/15/33FF57/000000?text=+) `#33FF57` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` | ![#333333](https://via.placeholder.com/15/333333/000000?text=+) `#333333` |
> *[수정 팁: 위 코드의 #색상코드를 실제 프로젝트 색상으로 바꾸시면 네모 박스 색이 바뀝니다]*

### 2. Typography (타이포그래피)
가독성과 심미성을 고려하여 **[사용 폰트명, 예: Pretendard]**를 메인 서체로 사용했습니다.
* **Headings**: Bold / 24px ~ 32px
* **Body**: Regular / 14px ~ 16px (웹 접근성 준수 크기)

<br/>

## ✨ Key Features (퍼블리싱 주요 특징)
단순 구현을 넘어, 품질과 접근성을 고려한 전문적인 퍼블리싱을 수행했습니다.

1.  **Semantic Markup (시맨틱 마크업)**
    * `header`, `main`, `footer`, `article` 등 의미론적 태그를 사용하여 SEO 및 스크린 리더 접근성을 최적화했습니다.
2.  **Responsive Web (반응형 웹)**
    * Media Query를 활용하여 Mobile(360px)부터 Desktop(1920px)까지 유연하게 대응합니다.
3.  **Cross Browsing (크로스 브라우징)**
    * Chrome, Safari, Edge, Firefox 등 주요 브라우저에서 동일한 UI 경험을 보장합니다.
4.  **Web Accessibility (웹 접근성)**
    * 이미지 대체 텍스트(`alt`) 제공 및 키보드 포커싱 처리를 통해 정보 격차를 줄였습니다.

<br/>

## 📂 Directory Structure (폴더 구조)
유지보수의 효율성을 위해 자산(Assets)과 스타일(Styles)을 체계적으로 분리했습니다.
```bash
Bbodi/
├── index.html
├── assets/
│   ├── images/       # 이미지 리소스
│   └── fonts/        # 폰트 파일
├── css/
│   ├── reset.css     # 브라우저 기본 스타일 초기화
│   ├── style.css     # 메인 스타일 시트
│   └── responsive.css # 반응형 미디어 쿼리
└── js/
    └── main.js       # UI 인터랙션 스크립트
