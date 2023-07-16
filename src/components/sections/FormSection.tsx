import { FC } from "react";
import Card from "../ui/Card";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = ({}) => {
  return (
    <Card className="col-span-3 md:col-span-5 md:row-span-2 aspect-3/1 lg:aspect-5/1 flex flex-col justify-center items-center">
      <span>Form</span>
    </Card>
  );
};

export default FormSection;
