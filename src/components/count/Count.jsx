import { useDispatch, useSelector } from 'react-redux';
import { countDecrement, countIncrement } from '../../store/modules/countSlice';

const Count = () => {
    const count = useSelector((state) => state.countR.count);
    //const {count} = useSelector((state) => state.countR)
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ fontSize: 40 }}> 숫자 : {count} </h2>
            <p>
                <button onClick={() => dispatch(countIncrement())}>증가</button>
                <button onClick={() => dispatch(countDecrement())}>감소</button>
            </p>
            <p>
                <button onClick={() => dispatch(countIncrement(10))}>10씩 증가</button>
                <button onClick={() => dispatch(countDecrement(10))}>10씩 감소</button>
            </p>
            <p>
                <button onClick={() => dispatch(countIncrement(50))}>50씩 증가</button>
                <button onClick={() => dispatch(countDecrement(50))}>50씩 감소</button>
            </p>
        </div>
    );
};

export default Count;
