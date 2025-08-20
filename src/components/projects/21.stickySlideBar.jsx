import { useRef, useState } from "react";

function StickySlideBar() {

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const sideBarRef = useRef(null);



    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-4">Sticky Slide Bar</h2>
            <div ref={headerRef} className="bg-blue-600 text-white p-4 mt-6 ">
                <h1 className="text-3xl">Site Header</h1>
            </div>
        </div>
     );
}

export default StickySlideBar;