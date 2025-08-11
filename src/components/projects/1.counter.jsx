import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Minus, Plus, Redo2, Undo2 } from 'lucide-react';
function Counter() {

    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0);

    const currentValue = history[position];
    const addToHistory = (newValue) => {

        const newHistory = history.slice(0, position + 1);
        setHistory([...newHistory, newValue]);
        setPosition(newHistory.length);
    }

    const Undo=()=>{
        if(position>0){
            setPosition(position-1);
        }
    }

    const Redo=()=>{
        if(position<history.length-1){
            setPosition(position + 1);
        }
    }
    const decrement = () => {
        addToHistory(currentValue - 1);
    }

    const increment = () => { 
        addToHistory(currentValue + 1)
     }

    console.log(history, position);

    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1 className='text-4xl'>Counter with Undo/Redo</h1>
            <div className='flex flex-col mt-5 justify-center gap-4'>
                <div className='flex justify-center items-center'>
                    <div className="text-7xl  tabular-nums">
                        {currentValue}
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <Button disabled={currentValue===0} onClick={decrement}>
                        <Minus className='h-4 w-4' />
                    </Button>
                    <Button disabled={currentValue===9} onClick={increment}>
                        <Plus className='h-4 w-4' />
                    </Button>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <Button disabled={position===0} onClick={Undo} variant={"secondary"}>
                        Undo
                        <Undo2 className='h-4 w-4' />
                    </Button>
                    <div className='text-sm text-muted-foreground'>
                        {position + 1} / {history.length}
                    </div>
                    <Button disabled={position===history.length-1} onClick={Redo} variant={"secondary"}>
                        Redo
                        <Redo2 className='w-4 h-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Counter;