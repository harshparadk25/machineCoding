import { Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
function InlineEditable() {
    const [items, setItems] = useState([
        {
            id: 1, text: 'Hello',
        },
        {
            id: 2, text: 'Harsh',
        },
        {
            id:3, text: "Technical"
        }
    ]);

    const [currentId, setCurrentId] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);
    const inputRef = useRef(null);

    const handleEdit = (id, text) => {
        setCurrentId(id);
        setCurrentValue(text);
    }

    const handleBlur = () => {
       if(currentId!==null){
        saveChanges();
       }
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            saveChanges();
        }else if(event.key==="Escape"){
            setCurrentId(null);
        }
    };

   const saveChanges=()=>{
    if(currentId!==null){
        setItems(
          items.map(item=> item.id === currentId ? {...item,text:currentValue}:item)
        )
        setCurrentId(null);
    }
   };

    useEffect(() => {
        if (currentId !== null && inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentId])



    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Inline Editable Input</h1>
            <div className="mt-10 flex flex-col gap-4">
                {items.map((item) => (
                    currentId === item.id ? <Input
                        ref={inputRef}
                        value={currentValue}
                        onChange={(event) => {
                            setCurrentValue(event.target.value)
                        }}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        className="w-full" /> :
                        <div onClick={() => handleEdit(item.id, item.text)} key={item.id} className="p-4 flex justify-between items-center cursor-pointer group mb-2 bg-muted-foreground">
                            <span className="text-white">{item.text}</span>
                            <Pencil className=" text-white h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                ))

                }
            </div>
        </div>
    );
}

export default InlineEditable;