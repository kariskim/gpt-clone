# React + TypeScript + Vite

1. 메인화면 구축
* ~~전체 레이아웃~~ 
* ~~left 레이아웃~~ 
* Contents 레이아웃
1) Top Dropdown => 모듈로 
2) card - 넓이 더 작게 
3) 각 영역 스크롤 처리 
4) 스크롤 내릴 때 더보기 버튼 
* 각 레이아웃 간 통신 
* 반응형 처리 
* SVG 처리 
* useCallback 사용 
* ~~card - animation 효과~~
2. 전체 아키텍처 구축 
* react-router 사용 
* pinia 사용해서 state 하게 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
