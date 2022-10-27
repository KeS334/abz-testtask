import React from 'react';
import Preloader from "./Preloader";
import usePositions from "../services/Positions";

interface RadioInputProps {
    currentPositionId: number,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioInput = ({currentPositionId, changeHandler}:RadioInputProps) => {

    const {positions, isPositionsLoaded} = usePositions();

    return (
        <>
            <p className="form-block__radio-title">Select your position</p>
            <div className="form-block__radio-list">
                {
                    isPositionsLoaded?
                    (positions.map(item =>
                        <div className="form-block__radio-item" key={item.id}>
                            <input
                                type="radio"
                                id={"position-" + item.id}
                                name="position_id"
                                value={item.id}
                                checked={(item.id===currentPositionId)}
                                onChange={changeHandler}
                            />
                            <label htmlFor={"position-" + item.id}>{item.name}</label>
                        </div>)):<Preloader/>
                }
            </div>
        </>
    );
};

export default RadioInput;
