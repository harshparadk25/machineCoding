import { useEffect, useState } from "react";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


function PasswordStrength() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        calculateStrength(password);
    }, [password]);

    const calculateStrength = (password) => {
        if(!password) {
            setStrength(0);
            setMessage("");
            return;
        }
        let score=0;
        const feedbackItems = [];

        const lengthScore = Math.min(25,Math.floor(password.length * 2.5));
        score += lengthScore;


        const hasNumber = /\d/.test(password);
        if(hasNumber) {
            score += 25;
            feedbackItems.push("Contains a number");
        }

        const hasLowerCase = /[a-z]/.test(password);
        if(hasLowerCase) {
            score += 15;
            feedbackItems.push("Contains a lowercase letter");
        }
        const hasUpperCase = /[A-Z]/.test(password);
        if(hasUpperCase) {
            score += 15;
            feedbackItems.push("Contains an uppercase letter");
        }

        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        if(hasSpecialChar) {
            score += 20;
            feedbackItems.push("Contains a special character");
        }

        score = Math.min(100, score);

        setStrength(score);

        if(score < 25) {
            setMessage("Very Weak");
        }else if(score < 50) {
            setMessage("Weak");
        }else if(score < 75) {
            setMessage("Moderate");
        } else if(score < 90) {
            setMessage("Strong");
        }else {
            setMessage("Very Strong");
        }
    };

    console.log("Password Strength:", strength, "Message:", message);

    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-4">Password Strength Checker</h2>
            <div className="mt-5">
                <div className="space-y-4">
                    <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </Label>
                    <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);                    
                    }}
                    placeholder="Enter your password"
                    className="w-full max-w-md"
                    />
                </div>
                {
                    password && (
                        <div className="space-y-2">
                            <div className="flex items-center justify-between mt-4 ">
                                <span className="text-sm text-gray-600 dark:text-gray-400 mr-5">
                                    Strength: {strength}%
                                </span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    FeedBack: {message}
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
     );
}

export default PasswordStrength;