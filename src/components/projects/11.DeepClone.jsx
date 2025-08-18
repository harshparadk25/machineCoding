import { useState } from "react";
import { Button } from "@/components/ui/button";

function DeepClone() {

    const [input, setInput] = useState('');
    const [original, setOriginal] = useState(null);
    const [clone, setClone] = useState(null);

    const deepClone = (obj) => {
        if(obj === null || typeof obj !== 'object') {
            return obj;
        }
        const clonedObj = Array.isArray(obj) ? [] : {};

        for (let key in obj) {
                clonedObj[key] = deepClone(obj[key]);
        }
        return clonedObj;
    }

    const handleDeepClone = () => {
        try {
            const parsedInput = JSON.parse(input);
            setOriginal(parsedInput);

            const cloneObject = deepClone(parsedInput);
            setClone(cloneObject);
            
        }catch (error) {
            console.error("Error parsing JSON:", error);
            return;
        }
    }

    return ( 
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Deep Clone</h1>
            <div className="mt-5">
                <textarea
                className="w-full h-64 p-3 border border-gray-300 rounded text-sm resize-none"
                placeholder="Enter your JSON here"
                value={input}
                onChange={(event)=> setInput(event.target.value)}
                />
                <Button onClick={handleDeepClone} className="mt-6">Start Deep Clone</Button>

                <div className="flex flex-col gap-6">
                   <div>
                     {
                        original && (
                            <div>
                                <h2 className="text-lg font-semibold mt-4">Original Object</h2>
                                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(original, null, 2)}</pre>
                            </div>
                        )
                    }
                   </div>
                    {
                        clone && (
                            <div>
                                <h2 className="text-lg font-semibold mt-4">clone Object</h2>
                                <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(clone, null, 2)}</pre>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default DeepClone;