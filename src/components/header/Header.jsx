import { useRef, useEffect} from "react";
import "./Header.css"
import {StyledButton} from "../Button.style";



const Header = ()=>{

    const primaryHeaderRef = useRef(null);

    useEffect(() => {
        const primaryHeader = primaryHeaderRef.current;

        const scrollWatcher = document.createElement("div");
        scrollWatcher.setAttribute("data-scroll-watcher", "");
        primaryHeader.before(scrollWatcher);

        const navObserver = new IntersectionObserver(
            (entries) => {
                primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
            }
        );

        navObserver.observe(scrollWatcher);

        return () => {
            navObserver.disconnect();
        };
    }, []);

    return (

        <header ref={primaryHeaderRef} className="header">
            <div className="header-section">
                <StyledButton><a href="#contact">CONTACT</a></StyledButton>
            </div>
        </header>
    )
}

export default Header;