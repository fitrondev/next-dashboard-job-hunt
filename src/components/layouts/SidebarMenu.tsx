"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

// icons
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";

const SidebarMenu = () => {
  const router = useRouter();

  return (
    <nav className="space-y-3">
      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
        onClick={() => router.push("/")}
      >
        <IoHomeOutline className="mr-2 text-lg" />
        Home
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <MdOutlineEmail className="mr-2 text-lg" />
        Messages
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <RiBuilding2Line className="mr-2 text-lg" />
        Company Profile
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <FiUsers className="mr-2 text-lg" />
        All Application
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <HiOutlineDocumentText className="mr-2 text-lg" />
        Job Listing
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <LuCalendarDays className="mr-2 text-lg" />
        My Schedule
      </Button>
    </nav>
  );
};
export default SidebarMenu;
