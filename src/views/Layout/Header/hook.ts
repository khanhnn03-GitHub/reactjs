import {useEffect, useState} from "react";

const useOutsideAlerter = (ref: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handlerClickCart() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            console.log(event);
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setIsOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return {isOpen, handlerClickCart};
}
export default useOutsideAlerter;