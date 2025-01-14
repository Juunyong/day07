import { useDispatch, useSelector } from 'react-redux';
import { onBlue, onGreen, onPink, onRed } from '../../store/modules/colorSlice';

const Color = () => {
    const color = useSelector((state) => state.colorR.color);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>1. UI 디자인 </h2>
            <h2 style={{ fontSize: 30, color: color }}>Color: {color}</h2>
            <p>
                <button onClick={() => dispatch(onGreen())}>green</button>
                <button onClick={() => dispatch(onRed())}>red</button>
                <button onClick={() => dispatch(onBlue())}>blue</button>
                <button onClick={() => dispatch(onPink())}>pink</button>
            </p>
        </div>
    );
};

export default Color;
