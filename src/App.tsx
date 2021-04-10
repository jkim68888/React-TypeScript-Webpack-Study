import './style.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
    return <>
        <h1>React TypeScript Webpack Study - {process.env.NODE_ENV}</h1>
        <img src={IMAGE} alt="React Logo" width="300" height="300" />
        <img src={LOGO} alt="Star Logo" width="300" height="300" />
    </>
}