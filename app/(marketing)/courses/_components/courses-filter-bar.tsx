"use client";

import { useState } from "react";

const CoursesFilterBar = () => {

    // desiceds show level values or category values
    const [show, setShow] = useState<"level" | "category">("level");


    // 
    return (
        <div className="w-full flex flex-col gap-8">
            {/* filter items  and sort select */}
            <div>
                
            </div>
            {/* filter values */}
        </div>
    )
}

export default CoursesFilterBar