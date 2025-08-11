import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

function CustomTabs() {
  const tabs = [
    { id: "tab1", title: "Dashboard", content: "Admin Dashboard" },
    { id: "tab2", title: "Products", content: "Admin Products" },
    { id: "tab3", title: "Settings", content: "Admin Settings" },
  ];

  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const handleTabClick = (index) => {
    setActive(index);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        setActive((prev) => (prev + 1) % tabs.length);
        break;
      case "ArrowLeft":
        e.preventDefault();
        setActive((prev) => (prev - 1 + tabs.length) % tabs.length);
        break;
      
      default:
        break;
    }
  };

  useEffect(() => {
    tabRefs.current[active]?.focus();
  }, [active]);

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1 className="text-center mb-4 font-bold text-lg">
        Custom Tabs with Keyboard Support
      </h1>
      <Card className="w-[500px] mx-auto p-4">
        <CardContent className="p-6">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="flex space-x-2 mb-4"
            onKeyDown={handleKeyDown}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                role="tab"
                id={`${tab.id}-tab`}
                aria-selected={active === index}
                aria-controls={`${tab.id}-panel`}
                tabIndex={active === index ? 0 : -1}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  active === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-4 border rounded-md">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={`${tab.id}-panel`}
                aria-labelledby={`${tab.id}-tab`}
                hidden={active !== index}
                className={`p-5 rounded-md ${
                  active === index ? "block" : "hidden"
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomTabs;
