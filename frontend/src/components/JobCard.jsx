import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button
          variant={"outline"}
          className={"rounded-full cursor-pointer"}
          size={"icon"}
        >
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          consectetur molestiae modi atque natus ut placeat distinctio impedit
          nostrum minus.
        </p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge className="text-blue-500 font-bold" variant={"ghost"}>
          12 Positions
        </Badge>
        <Badge className="text-[#f83002] font-bold" variant={"ghost"}>
          Part time
        </Badge>
        <Badge className="text-[#7209B7] font-bold" variant={"ghost"}>
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant={"outline"}>Details</Button>
        <Button className={"bg-[#7209B7] text-white"}>Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
