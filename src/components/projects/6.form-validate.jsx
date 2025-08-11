import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";




function FormValidation() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age:"",
    })

    const [error,setError] = useState({});
    const validate = () => {
        const newError = {};
        if (!form.name) {
            newError.name = "Name is required";
        }
        if (!form.email) {
            newError.email = "Email is required";
        }
        if (!form.age) {
            newError.age = "Age is required";
        }
        return newError;
    }
    const [submitted, setSubmitted] = useState(false);

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            setSubmitted(false);
            return;
        }else{
            setSubmitted(true);
        }
    }

    const handleOnChange = (e) => {
        const {name,value} =e.target;
        setForm((prev)=>({
            ...prev,
            [name]: value
        }))

        setError((prev)=>({
            ...prev,
            [name]: "",
        }))
    }

    return ( 
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Validate Form</h1>
            <form onSubmit={handleFormOnSubmit} className="space-y-4">
                <div className="flex flex-col gap-3">
                    <Label>Name</Label>
                <Input
                name="name"
                value={form.name}
                type="text"
                onChange = {handleOnChange}
                className={'w-full px-3 py-2 border border-gray-300 rounded-md text-sm' }
                placeholder="Enter your name"
                />
                {error.name &&( <p className="text-red-500 text-sm">{error.name}</p>)}
                </div>
                 <div className="flex flex-col gap-3">
                    <Label>Email</Label>
                <Input
                name="email"
                value={form.email}
                type="email"
                onChange = {handleOnChange}
                className={'w-full px-3 py-2 border border-gray-300 rounded-md text-sm' }
                placeholder="Enter your name"
                />
                {error.email && (<p className="text-red-500 text-sm">{error.email}</p>)}
                </div>
                 <div className="flex flex-col gap-3">
                    <Label>Age</Label>
                <Input
                name="age"
                value={form.age}
                type="text"
                onChange = {handleOnChange}
                className={'w-full px-3 py-2 border border-gray-300 rounded-md text-sm' }
                placeholder="Enter your name"
                />
                {error.age && (<p className="text-red-500 text-sm">{error.age}</p>)}
                </div>
                <Button className="mt-5" type="submit">Submit</Button>
            </form>
            {
                submitted && (
                <div className="mt-5 p-4 bg-green-100 text-green-800 rounded-md">
                    Form submitted successfully!
                </div>
                )
            }
        </div>
     );
}

export default FormValidation;