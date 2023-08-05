"use client";

import { Lead, usePostLead } from "@/lib/sendLead";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../ui/Card";
import { Input } from "../ui/Input";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = ({}) => {
  const { register, handleSubmit } = useForm<Lead>();
  const { postData, error, isLoading } = usePostLead();

  const URL = `${process.env.API_URL}/leads/lead`;

  const onSubmit: SubmitHandler<Lead> = (lead: Lead) => {
    postData(URL, lead)
      .then((response) => {
        console.log("Posted data:", response);
        // Handle success
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle error
      });
  };

  return (
    <Card className="col-span-3 md:col-span-5 md:row-span-1 aspect-auto flex flex-col justify-center items-center p-2 lg:px-10 lg:py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-2 flex-nowrap"
      >
        <Input
          title="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <Input
          title="name"
          placeholder="Lastname"
          {...register("lastname", { required: true })}
        />
        <Input
          title="name"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {isLoading ? (
          <button className="flex flex-nowrap gap-1">
            <span className="loading loading-spinner text-slate-100"></span>
            Sending
          </button>
        ) : (
          <button type="submit">SEND</button>
        )}
      </form>
      {error && {}}
    </Card>
  );
};

export default FormSection;
