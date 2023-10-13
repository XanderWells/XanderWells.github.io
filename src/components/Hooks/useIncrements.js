import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function useIncrements(enabled) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    
    const storedValue = useRef(1);

    const getValue = () => {
        if (enabled) {
            const valueToReturn = storedValue.current;
            storedValue.current = storedValue.current + 1
            return valueToReturn
        } else {
            storedValue.current = 1
            return 0;
        }
        
    }

    return [getValue];
}

export default useIncrements