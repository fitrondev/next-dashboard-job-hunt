"use client";

import { Button } from "../ui/button";

// icons
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";

const SidebarSetting = () => {
  return (
    <nav className="space-y-3">
      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none hover:text-primary"
      >
        <IoSettingsOutline className="mr-2 text-lg" />
        Settings
      </Button>

      <Button
        variant={"ghost"}
        className="w-full justify-start rounded-none text-red-500 hover:bg-red-200 hover:text-red-500"
      >
        <HiOutlineLogout className="mr-2 text-lg" />
        Logout{" "}
      </Button>
    </nav>
  );
};
export default SidebarSetting;
