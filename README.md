# Getting Started with Create React App

`npx create-react-app app-name`

### In the project directory, you can run:

### `npm start`

### Runs the app in the development mode. Open [http://localhost:3000]

### `npm test`

### Launches the test runner

### `npm run build`

### Deployment

create-react-app has testing library

*** Error ****
Warning: ReactDOMTestUtils.act is deprecated in favor of React.act. Import act from react instead of react-dom/test-utils. See https://react.dev/warnings/react-dom-test-utils for more info

answer:

1. Update Testing Library
npm install @testing-library/react@latest
2. check react latest version
npm install react@latest react-dom@latest
3. if you want to use `act` Manually Import act from `react` library
      import { act } from 'react';
      act(() => {
      render(<App />); 
      });



