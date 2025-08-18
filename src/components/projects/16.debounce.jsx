import { useState } from "react";
import {Card,CardHeader,CardTitle , CardContent} from "@/components/ui/card";
function DebounceSearch() {

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] =useState([]);

    return ( 
        <div>
            <h1 className="text-xl font-bold mb-4">Debounce Search</h1>
            <div className="flex flex-col items-center">
                <Card className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
                    <CardHeader>
                        <CardTitle>
                            Product Search
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <input placeholder="Search for product"
                        value={searchTerm}
                        onChange={(e)=> setSearchTerm(e.target.value)}/>
                    </CardContent>

                </Card>
            </div>

        </div>
     );
}

export default DebounceSearch;