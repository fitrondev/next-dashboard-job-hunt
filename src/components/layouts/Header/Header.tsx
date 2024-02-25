"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// icons
import { PlusIcon } from "lucide-react";

const Header = () => {
  const router = useRouter();

  const handlePostJob = () => {
    router.push("/post-a-job");
  };

  return (
    <header className="py-3 mb-8 border-b border-border flex items-center justify-between">
      <div className="flex flex-col">
        <div>Company</div>
        <h1 className="font-semibold">Twitter</h1>
      </div>

      <div>
        <Button className="rounded-md py-3 px-6" onClick={handlePostJob}>
          <PlusIcon className="mr-2 w-4 h-4" />
          Post a Job
        </Button>
      </div>
    </header>
  );
};
export default Header;
