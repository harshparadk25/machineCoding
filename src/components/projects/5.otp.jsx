import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function OtpInput() {
    const OTP_LENGTH=6;

    const [otp,setOtp] = useState(Array(OTP_LENGTH).fill(''));
    const inputRefs = useRef([])

    useEffect(()=>{
        inputRefs.current = inputRefs.current.slice(0,OTP_LENGTH)
    },[]);

    const handleOtpChange = (getCurrentInputIndex,getCurrentInputVale)=>{
        if(getCurrentInputVale.length >1){
            getCurrentInputVale = getCurrentInputVale.slice(-1);
        }
        const newOtp = [...otp];
        newOtp[getCurrentInputIndex] = getCurrentInputVale;

        setOtp(newOtp);
        if(getCurrentInputVale && getCurrentInputIndex<OTP_LENGTH-1){
            inputRefs.current[getCurrentInputIndex+1]?.focus();
        }
    }

    const handleKeyDown=(index,event)=>{
        if(event.key === "Backspace" && !otp[index] && index>0){
            inputRefs.current[index-1]?.focus();
        }
    }
    return ( 

        <div className="flex mt-10 mb-5 flex-col pt-[150px] justify-center bg-gray-50">
            <h1>OTP Input</h1>
            <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
          <Input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            className="w-12 h-12 text-center text-lg mb-5"
            autoFocus={index === 0}
            onChange={(event)=> handleOtpChange(index,event.target.value)}
            onKeyDown={(event)=> handleKeyDown(index,event)}
            ref={(e)=>{
                inputRefs.current[index]=e;
            }}
          />
        ))}
            </div>
            <Button disabled={otp.some((digit) => digit === "")}>Verify</Button>
        </div>
     );
}

export default OtpInput;