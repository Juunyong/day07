import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Counter from './components/count/Counter';
import GlobalStyle from './styled/reset';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Color />
            <hr />
            <ChangeColor />
            <hr />
            <Counter />
            <hr />
            <Count />
        </>
    );
};

export default App;
