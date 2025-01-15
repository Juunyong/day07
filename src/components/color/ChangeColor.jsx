import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/modules/changeColorSlice';

const ChangeColor = () => {
    const { color } = useSelector((state) => state.colorChangeR);
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: color }}> ChangeColor : {color} </h2>
            <p> 행동이 동일하고 값이 많으면 ? </p>
            <p>
                <button onClick={() => dispatch(changeColor('red'))}>red</button>
                <button onClick={() => dispatch(changeColor('green'))}>green</button>
                <button onClick={() => dispatch(changeColor('blue'))}>blue</button>
                <button onClick={() => dispatch(changeColor('pink'))}>pink</button>
                <button onClick={() => dispatch(changeColor('yellow'))}>yellow</button>
                <button onClick={() => dispatch(changeColor('skyblue'))}>skyblue</button>
            </p>
        </div>
    );
};

export default ChangeColor;
