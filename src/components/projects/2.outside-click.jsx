import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
function OutSideClick() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption,setSelectedOption] = useState("Select any option")
    const dropDownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        if(!isOpen) return;
        
        const handleClickOutside = (event) => {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            console.log(event.target,dropDownRef.current);
            setIsOpen(false);
            }
        };
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
    },[isOpen])
    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Close Dropdown on OutSideClick</h1>
            <div className='relative mt-6' ref={dropDownRef}>
                <Button onClick={toggleDropdown} variant={'outline'} className="w-full justify-between">
                    {selectedOption}
                    <ChevronDown className={`ml-2 h-4 w-4 ${isOpen ? "rotate-180" : ""}`} />
                </Button>
                {isOpen && (
                    <div className="absolute mt-2 w-full rounded-md border bg-white z-10 shadow-md">
                        {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                            <button 
                            onClick={()=>{
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                                key={index}
                                setSelectedOption={option}
                                className="block w-full px-4 py-2 text-left text-sm bg-white text-black hover:bg-black hover:text-white rounded-md"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}

export default OutSideClick;