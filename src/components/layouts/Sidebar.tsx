"use client";

import SidebarMenu from "./SidebarMenu";
import SidebarSetting from "./SidebarSetting";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="pb-12 min-h-screen sticky top-0 left-0">
      <div className="py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>

          <SidebarMenu />
        </div>
      </div>

      <div className="py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>

          <SidebarSetting />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
