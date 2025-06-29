import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCard = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
            <div>
                <h1 className="font-md text-lg">Company Name</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">Job Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex items-center mt-4 gap-2">
                <Badge className="text-blue-500 font-bold" variant={'ghost'}>12 Positions</Badge>
                <Badge className="text-[#f83002] font-bold" variant={'ghost'}>Part time</Badge>
                <Badge className="text-[#7209B7] font-bold" variant={'ghost'}>24 LPA</Badge>
            </div>
        </div>
    );
};

export default LatestJobCard;
