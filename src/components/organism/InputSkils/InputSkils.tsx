import React, { useRef, useState } from "react";
import { jobFormSchema } from "@/lib/form-schema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// component
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// icons
import { PlusIcon } from "lucide-react";

type InputSkilsProps = {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
};

const InputSkils: React.FC<InputSkilsProps> = ({ form }) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;

    if (value === "") {
      return;
    }

    const newValue: any = [...values, value];

    setValues(newValue);

    form.setValue("requiredSkills", newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);

    setValues(skills);
    form.setValue("requiredSkills", skills);
  };

  return (
    <FormField
      control={form.control}
      name="categoryId"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">Add Skills</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Skills
              </Button>

              {isHide && (
                <div className="my4 flex gap-4">
                  <Input ref={inputRef} className="w-[240px]" />
                  <Button type="button" onClick={handleSaveValue}>
                    Save
                  </Button>
                </div>
              )}

              <div className="space-x-3">
                {values.map((item: string, index: number) => (
                  <Badge
                    variant="outline"
                    key={index}
                    onClick={() => handleDeleteValue(item)}
                    className="cursor-pointer"
                  >
                    {item}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Badge>
                ))}
              </div>
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default InputSkils;
