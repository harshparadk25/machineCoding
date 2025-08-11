import { useState } from "react";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label"
function TempConvertor() {

    const [celsius,setCelsius] = useState('');
     const [fahrenheit,setFahrenheit] = useState('');

     const CelsiusToFahren =(value)=>{
        return ((value*9)/5) +32;
     }

     const FahrenToCelsius=(value)=>{
        return ((value-32) *5)/9;
     }

     const handleCelsiusToFahren=(value)=>{
        setCelsius(value);

        if(value===""){
            setFahrenheit('');
        }else{
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
                const res = CelsiusToFahren(numValue);
                setFahrenheit(res.toFixed(2));
            }
        }
     }

     const handleFahrenToCelsius=(value)=>{
        setFahrenheit(value);

        if(value===""){
            setCelsius('');
        }else{
            const numValue=parseFloat(value);
            if(!isNaN(numValue)){
                const res = FahrenToCelsius();
                setCelsius(res.toFixed(2));
            }
        }
     }

     const formatValue=(value)=>{
        if(value==='') return '';
        const numValue = parseFloat(value);
        if(isNaN(numValue)) return value;

        if(Number.isInteger(numValue)){
            return numValue.toString();
        }
        return numValue.toFixed(2);
     }
    return ( 
        <div className="flex mt-10 flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Temperature Convertor</h1>
            <div className="flex flex-col justify-center items-center gap-5">
                <Label>Celsius
                </Label>
                <Input
                id="celsius"
                type="number"
                value={formatValue(celsius)}
                onChange={(event)=>{handleCelsiusToFahren(event.target.value)}}
                placeholder="0"
                />

                 <Label>Fahrenheit
                </Label>
                <Input
                id="fahrenheit"
                type="number"
                value={formatValue(fahrenheit)}
                onChange={(event)=>{handleFahrenToCelsius(event.target.value)}}
                placeholder="32"
                />
            </div>
        </div>
     );
}

export default TempConvertor;