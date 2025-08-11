import { Button } from "@/components/ui/button"
import Counter from "./components/projects/1.counter";
import "./App.css";
import OutSideClick from "./components/projects/2.outside-click";
import InlineEditable from "./components/projects/3.inline-editable";
import TempConvertor from "./components/projects/4.temp-convertor";
import OtpInput from "./components/projects/5.otp";
import FormValidation from "./components/projects/6.form-validate";
import CustomTabs from "./components/projects/7.custom-tabs";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">
            30 React Machine Coding Projects
          </h1>
        </div>
      </header>
      <main>
       {/* <Counter/> */}
        {/* <OutSideClick/> */}
        {/* <InlineEditable/> */}
        {/* <TempConvertor/> */}
        {/* <OtpInput/> */}
       {/*  <FormValidation/> */}
       {/* <CustomTabs/> */}
      </main>
    </div>
  )
}

export default App;