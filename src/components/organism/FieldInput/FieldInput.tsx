//components
import { Separator } from "@/components/ui/separator";

type FieldInputProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

const FieldInput: React.FC<FieldInputProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <>
      <div className="flex">
        <div className="w-[35%]">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-gray-500 w-80">{subtitle}</p>
        </div>

        {children}
      </div>

      <Separator />
    </>
  );
};
export default FieldInput;
