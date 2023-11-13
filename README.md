# next.js로 포트폴리오 사이트 만들기
Next.js는 React 기반의 웹 프레임워크로, React 애플리케이션을 빠르고 간편하게 개발하고 배포할 수 있도록 도와주는 도구입니다. Next.js는 SSR(서버 사이드 렌더링), 코드 분할, 자동 경로 기반 라우팅, API 라우팅, 스태틱 파일 서비스 등의 기능을 제공하여 개발자가 유연하고 성능이 우수한 웹 애플리케이션을 구축할 수 있도록 합니다.

1. 서버 사이드 렌더링 (SSR): Next.js는 기본적으로 서버 사이드 렌더링을 지원합니다. 이는 서버에서 초기 렌더링을 수행하여 페이지를 클라이언트로 전송함으로써 초기 로딩 속도를 향상시키고 SEO 최적화를 가능케 합니다.

2. 코드 분할 (Code Splitting): Next.js는 페이지 간에 코드 분할을 자동으로 처리합니다. 필요한 코드만 로드되므로 초기 페이지 로딩 속도가 향상되고 사용자 경험이 향상됩니다.

3. 자동 경로 기반 라우팅: 파일 시스템 기반의 경로를 사용하여 페이지와 컴포넌트를 자동으로 매핑합니다. 이를 통해 라우팅을 간편하게 설정할 수 있습니다.

4. API 라우팅: /pages/api 디렉터리에 API 엔드포인트를 만들 수 있습니다. 이는 서버리스 함수로 동작하며, 데이터를 처리하고 클라이언트에게 전달할 수 있습니다.

5. 스태틱 파일 서비스: public 디렉터리를 통해 정적 파일을 제공할 수 있습니다. 이를 통해 이미지, CSS 파일, 자바스크립트 파일 등을 간편하게 제공할 수 있습니다.

6. 환경 변수 지원: .env 파일을 사용하여 환경 변수를 설정하고, 클라이언트 및 서버에서 환경 변수를 사용할 수 있습니다.

7. 빠른 개발 환경: Next.js는 빠른 개발 환경을 제공하며, 변경 내용을 실시간으로 반영하여 빠르게 피드백을 확인할 수 있습니다.

8. 통합된 CSS 지원: CSS 모듈, Sass, Less, 스타일드 컴포넌트 등 다양한 CSS 스타일링 옵션을 지원합니다.

Next.js는 React 기반이므로 React의 컴포넌트 기반 구조와 생태계를 그대로 사용할 수 있습니다. 이러한 특징들은 Next.js를 이용하여 현대적이고 성능이 우수한 웹 애플리케이션을 쉽게 구축할 수 있도록 도와줍니다.


## next 실행

- next.js 파일 생성: `mkdir next-project`
- 해당 파일로 들어가기: `cd next-project`
- 최신 next 설치: `npx create-next-app@latest`
1. Ok to proceed? (y) `y`
2. √ What is your project named? ... .
3. √ Would you like to use TypeScript? ... `No` / Yes
4. √ Would you like to use ESLint? ... No / `Yes`
5. √ Would you like to use Tailwind CSS? ... `No` / Yes
6. √ Would you like to use `src/` directory? ... No / `Yes`
7. √ Would you like to use App Router? (recommended) ... No / `Yes`
8. √ Would you like to customize the default import alias (@/*)? ... No / `Yes`
9. √ What import alias would you like configured? ... `@`/*

## 플러그인 설치
- gsap 설치 : `npm install gsap`
- sass 설치 : `npm install sass`
- lenis 설치 : `npm install @studio-freight/lenis`

## 파일 정리
- public: favicon.svg 생성 나머지 삭제
- src: assets, components, constants, utils 파일 생성
- app: layout.js, page,js, page.module.css 제외하고 삭제

## 페이지 생성
- 폴더 안에 jsx파일 생성 예: about 폴더 - about.jsx 파일 생성