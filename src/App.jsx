import { Button } from "@/components/ui/button"
import Counter from "./components/projects/1.counter";
import "./App.css";
import OutSideClick from "./components/projects/2.outside-click";
import InlineEditable from "./components/projects/3.inline-editable";
import TempConvertor from "./components/projects/4.temp-convertor";
import OtpInput from "./components/projects/5.otp";
import FormValidation from "./components/projects/6.form-validate";
import CustomTabs from "./components/projects/7.custom-tabs";
import FlatArray from "./components/projects/8.flatArray";
import FlattenObjectInspector from "./components/projects/10.flatten-object-inspector";
import DeepClone from "./components/projects/11.DeepClone";
import ProductProvider from "./components/context/product-context";
import ProductList from "./components/projects/13.product-list";
import KanbanBoard from "./components/projects/14.kunbanBoard";
import StringCompression from "./components/projects/15.stringCompression";
import DebounceSearch from "./components/projects/16.debounce";
import MultiStepForm from "./components/projects/17.multiStepFrom";
import CustomPromiseAll from "./components/projects/18.customPromiseAll";
import TodoList from "./components/projects/19.todo-list";
import SequentialProgressBar from "./components/projects/20.sequential-bar";
import StickySlideBar from "./components/projects/21.stickySlideBar";
import PasswordStrength from "./components/projects/22.password-check";
import HorizontalScrollMenu from "./components/projects/23.horizontal-scroll";
import DynamicForm from "./components/projects/24.dynamic-form";
import FileExplorer from "./components/projects/25.file-explorer";
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
       {/* <FlatArray/> */}
       {/* <FlattenObjectInspector/> */}
       {/* <DeepClone/> */}
       {/* <ProductProvider>
        <ProductList/>
       </ProductProvider> */}
        {/* <KanbanBoard/> */}
        {/* <StringCompression/> */}
        {/* <DebounceSearch/> */}
        {/* <MultiStepForm/> */}
        {/* <CustomPromiseAll/> */}
        {/* <TodoList /> */}
        {/* <SequentialProgressBar /> */}
        {/* <StickySlideBar /> */}
        {/* <PasswordStrength/> */}
        {/* <HorizontalScrollMenu/> */}
        {/* <DynamicForm/> */}
        <FileExplorer/>
      </main>
    </div>
  )
}

export default App;