"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { jobFormSchema } from "@/lib/form-schema";

// components
import { Separator } from "@/components/ui/separator";

// icons
import { ArrowLeftIcon } from "lucide-react";
import PostJobForm from "@/components/layouts/PostJob/PostJobForm";

type PostJobPageProps = {};

const PostJobPage: React.FC<PostJobPageProps> = () => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  // Define form.
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {},
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof jobFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-500">
          List out your top perks and benefits.
        </div>
      </div>

      <Separator />

      <PostJobForm
        form={form}
        onSubmit={onSubmit}
        editorLoaded={editorLoaded}
      />
    </>
  );
};
export default PostJobPage;
