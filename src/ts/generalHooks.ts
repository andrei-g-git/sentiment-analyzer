import { useState, useEffect } from "react";

export const useCount = (changingValue: any) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    },
        [changingValue]
    );

    return count;
}