import { useRef } from "react";
import {Card ,CardContent} from "../../components/ui/card"
import { horizontalMenuItems } from "../../lib";
import { Button } from "../ui/button";

function HorizontalScrollBar() {

    const scrollRef = useRef(null);

    return ( 
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>
                horizontalScrollBar
            </h1> 

            <Card>
                <CardContent>
                    <div className="relative">
                        <div ref={scrollRef}>
                            {
                                horizontalMenuItems.map(item => (
                                    <Button key={item}
                                    variant={'outline'}
                                    className={`whitespace-nowrap rounded-full text-sm h-9 px-4 bg-muted/50 hover:bg-muted`}>
                                        {item}
                                        
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
     );
}

export default HorizontalScrollBar;