import {useEffect, useState} from "react";
import {IPosition} from "../models";

const usePositions = () => {

    const [positions, setPositions] = useState<IPosition[]>([]);
    const [isPositionsLoaded, setIsPositionsLoaded] = useState(false)

    function getPositions() {
        setIsPositionsLoaded(false)
        try {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
                .then(response => response.json())
                .then(data => {
                    setPositions(data.positions)
                    setIsPositionsLoaded(true)
                })
        } catch (error) {
            console.log("Users error: ", error)
        }
    }

    useEffect(() =>{
        getPositions()
    }, [])

    return {positions, isPositionsLoaded}
};

export default usePositions;
