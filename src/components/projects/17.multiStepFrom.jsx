
import { useState } from "react";
import{ Button }from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const steps =[
    {
        id: 1,
        title: "Name",
    },
    {
        id: 2,
        title: "Address",
    },{
        id: 3,
        title: "Review",
    }
]

function MultiStepForm() {

    const [currentStep, setCurrentStep] =useState(1);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData =>({
            ...prevData,
            [name]: value,

        }))
    };

    const next = () => {
        if (currentStep < steps.length && isCurrentStepValid()) {
            setCurrentStep(prev => prev + 1);
        }
    };
    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }   
    };

    const isCurrentStepValid = () => {
       switch (currentStep) {
            case 1:
                return formData.name.trim() !== "";
            case 2:
                return formData.address.trim() !== "";
            case 3:
                return true;
            default:
                return false;
        }
    }



    return ( 
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
            <h1>Multi-Step Form</h1>
            <p>This is a multi-step form component.</p>

            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    {steps.map(step =>
                        <div className="text-center" key={step.id}>
                            <Button className={`w-8 h-8 rounded-full flex items-center justify-center ${step.id === currentStep ? 'bg-blue-500 text-white':step.id < currentStep ? 'bg-green-500 text-white' : 'bg-gra'}`}>{step.id}</Button>
                            <p className="text-xs mt-0 text-center">{step.title}</p>

                        </div>
                    )}
                </div>
                <div className="mt-2 h-1 bg-gray-200 w-full">
                    <div className="h-1 bg-blue-600"
                    style={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}/>

                    
                </div>

            </div>
            <div>
                {
                    currentStep ===1 && (
                        <div className="flex flex-col gap-4 mt-4">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleOnChange}
                            placeholder="enter your name"/>
                        </div>
                    )
                }
                {
                    currentStep ===2 && (
                        <div className="flex flex-col gap-4 mt-4">
                            <Label htmlFor="address">Full Address</Label>
                            <Input id="address"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleOnChange}
                            placeholder="enter your address"/>
                        </div>
                    )
                }
                {
                    currentStep ===3 && (
                        <div className="flex flex-col gap-4 mt-4">
                            <Label >info</Label>
                           <div className="space-y-3">
                            <p>Name:{formData.name}</p>
                            <p>Address:{formData.address}</p>
                           </div>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-between gap-4 mt-4">
                <Button onClick={prev} disabled={currentStep===1}>Prev</Button>
                <Button onClick={currentStep ===3 ? ()=>alert("submitted") : ()=> next()} disabled={!isCurrentStepValid()}>{currentStep===3 ? "Submit" : "Next"}</Button>

            </div>
        </div>
     );
}

export default MultiStepForm;