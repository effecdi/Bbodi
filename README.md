
🎨 Bbodi Portfolio (뽀디 포트폴리오)

> **"Design Meets Technology"**
> 
> 안녕하세요, **9년 차 프리랜서 UI/UX 디자이너 겸 퍼블리셔 이현정**입니다.  
> 본 프로젝트는 심미적인 디자인과 최신 웹 기술을 결합하여 제작한 개인 포트폴리오 웹사이트입니다.

<br/>

## 📌 Project Overview
이 포트폴리오는 단순한 작업물의 나열이 아닌, **디자이너로서의 감각**과 **프론트엔드 개발자로서의 기술력**을 동시에 보여주기 위해 제작되었습니다.

* **기획 및 디자인**: Figma를 활용한 UI/UX 설계 및 프로토타이핑
* **개발**: React 18 & TypeScript 기반의 컴포넌트 주도 개발 (CDD)
* **주요 특징**: Framer Motion을 활용한 인터랙티브 모션, Tailwind CSS를 통한 디자인 시스템 구축

<br/>

## 🛠 Tech Stack & Tools
최적의 사용자 경험(UX)과 개발 효율성을 위해 모던 웹 기술 스택을 선정했습니다.

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | <img src="https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> | 컴포넌트 재사용성 및 타입 안정성 확보 |
| **Styling** | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/> | Utility-First 방식의 디자인 시스템 적용 |
| **Animation** | <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white"/> | 자연스러운 스크롤 및 제스처 애니메이션 구현 |
| **Build** | <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> | HMR을 통한 빠른 개발 환경 구축 |
| **Routing** | <img src="https://img.shields.io/badge/Wouter-FF0000?style=flat-square&logo=npm&logoColor=white"/> | 번들 사이즈 최소화를 위한 경량 라우터 사용 |
| **Backend** | <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white"/> | API 서버 및 데이터 처리 |
| **Design** | <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/> | UI/UX 디자인 및 프로토타입 |

<br/>

## 📂 Directory Structure
유지보수성과 확장성을 고려하여 **관심사 분리(Separation of Concerns)** 원칙에 따라 폴더 구조를 설계했습니다.

```bash
src/
├── assets/              # 이미지, 폰트, 아이콘 등 정적 파일 관리
│   ├── images/          
│   └── icons/           
│
├── components/          # 재사용 가능한 UI 컴포넌트 (Atomic Design 고려)
│   ├── layout/          # Header, Footer, LayoutWrapper 등 구조 컴포넌트
│   ├── ui/              # Button, Card, Input 등 공통 디자인 시스템 컴포넌트
│   └── motion/          # Framer Motion이 적용된 애니메이션 래퍼 컴포넌트
│
├── pages/               # 라우팅 페이지 (Home, Projects, About, Contact)
│
├── hooks/               # 커스텀 훅 (useScroll, useWindowSize 등)
│
├── styles/              # 전역 스타일 및 Tailwind 설정 관리
│
├── utils/               # 유틸리티 함수 및 상수 데이터
│   ├── animation.ts     # Animation Variants 설정 분리
│   └── data.ts          # 프로젝트 리스트 데이터 (JSON)
│
├── types/               # TypeScript 타입 정의 (.d.ts)
│
├── App.tsx              # Wouter 라우팅 설정
└── main.tsx             # Entry Point
✨ Key Features (핵심 기능)1. Interactive UI/UXScroll Animations: Framer Motion을 활용하여 스크롤 시 요소들이 부드럽게 나타나는 InView 애니메이션을 구현했습니다.Page Transitions: Wouter와 AnimatePresence를 결합하여 페이지 전환 시 끊김 없는 시각적 경험을 제공합니다.2. Design System with TailwindConsistent Design: Figma에서 정의한 Color, Typography, Spacing 시스템을 tailwind.config.js에 테마로 등록하여 일관성 있게 적용했습니다.Responsive Layout: Mobile First 접근 방식을 통해 모바일, 태블릿, 데스크탑 등 모든 기기에서 최적화된 레이아웃을 제공합니다.3. Performance OptimizationLightweight Routing: 무거운 React Router 대신 1KB 미만의 Wouter를 사용하여 번들 크기를 줄이고 로딩 속도를 개선했습니다.Semantic Markup: 시맨틱 태그(section, article 등)를 적극 사용하여 웹 접근성(A11y)과 SEO를 고려했습니다.🎨 Design Guidelines사용자에게 신뢰감을 주는 모던하고 깔끔한 톤앤매너를 유지했습니다.Color PalettePrimarySecondaryBackgroundTextBlue-500Emerald-500WhiteGray-800(위 컬러는 예시이며, 실제 프로젝트의 메인 컬러로 수정하여 사용하세요)TypographyFont Family: Pretendard (가독성과 심미성이 우수한 산세리프 폰트)🚀 Getting Started이 프로젝트를 로컬 환경에서 실행하려면 아래 절차를 따라주세요.Bash# Repository 클론
git clone [https://github.com/effecdi/Bbodi_Portfolio.git](https://github.com/effecdi/Bbodi_Portfolio.git)

# 프로젝트 폴더로 이동
cd Bbodi_Portfolio

# 의존성 패키지 설치
npm install

# 개발 서버 실행
npm run dev
📬 Contact프로젝트와 관련된 문의사항이나 협업 제안은 언제든 환영합니다.Email: [본인의 이메일 주소를 입력해주세요]GitHub: https://github.com/effecdiBlog/Site: [운영 중인 블로그나 사이트가 있다면 입력해주세요]
