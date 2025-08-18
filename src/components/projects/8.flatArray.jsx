import { useEffect, useState } from "react";
import { categoryTree } from "../../lib/index";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

function FlatArray() {
  const [flatCategories, setFlatCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const flattenCategories = (categories) => {
    const result = [];

    const processCategory = (category) => {
      const { children, ...rest } = category;
      result.push(rest);

      if (children && children.length > 0) {
        for (const child of children) {
          processCategory(child);
        }
      }
    };

    for (const singleCategory of categories) {
      processCategory(singleCategory);
    }

    return result;
  };

  useEffect(() => {
    const result = flattenCategories(categoryTree);
    setFlatCategories(result);
  }, []);

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1>Flat Array</h1>
      <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger>
            <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="All">All categories</SelectItem>
            {
                flatCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default FlatArray;
