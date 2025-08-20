import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";

function SequentialProgressBar() {

    const BAR_COUNT = 4;
    const [progressValue, setProgressValue] = useState(Array(BAR_COUNT).fill(0));
    const [currentStep, setCurrentStep] = useState(null);

    const [isRunning, setIsRunning] = useState(false);

    const handleSequence = () => {
        setProgressValue(Array(BAR_COUNT).fill(0));
        setCurrentStep(0);
        setIsRunning(true);
    }

    const handleResetSequence = () => {
        setIsRunning(false);
        setCurrentStep(null);
        setProgressValue(Array(BAR_COUNT).fill(0));
    }


    const getBarStatus=(getCurrentValue)=>{
        if(currentStep === null) {
            return "Not Started";
        }
        if(getCurrentValue < currentStep) {
            return "Completed";
        }
        if(getCurrentValue === currentStep) {
            return "In Progress";
        }

        return "Pending";
    }

    useEffect(()=>{
        if(!isRunning || currentStep === null || currentStep >= BAR_COUNT) return;

        const currentProgress = progressValue[currentStep];
        if(currentProgress >= 100) {
            if(currentStep < BAR_COUNT - 1) {
                setCurrentStep(currentStep + 1);
            }else{
                setIsRunning(false);
                setCurrentStep(null);
            }
            return;
        }

        const timer = setTimeout(() => {
            const newProgressValue = [...progressValue];
            newProgressValue[currentStep] = Math.min(currentProgress + 5, 100);
            setProgressValue(newProgressValue);
        },100)

        return()=> clearTimeout(timer);

    },[isRunning, currentStep, progressValue]);
    return ( 
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Sequential Progress Bar</h1>
            <div className="mt-5 space-y-8 p-4">
                {
                    progressValue.map((progress,value)=>(
                        <div key={value} className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-bold">Step {value+1}</span>
                                <span className={currentStep === value ? "text-blue-500" : value<(currentStep ||0 ) ? "text-green-500":"text-gray-500"}>
                                    {
                                        getBarStatus(value)
                                    }
                                </span>
                            </div>
                            <Progress
                            value={progress}
                            className={`h-2 ${currentStep === value ? "bg-blue-500" :  "bg-gray-300"}`}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="mt-6 flex justify-center space-x-4">
                <Button onClick={handleResetSequence}>Reset</Button>
                <Button onClick={handleSequence} disabled={isRunning}>Start Sequence</Button>
            </div>
        </div>
     );
}

export default SequentialProgressBar;