"use client";

import { Lead, usePostLead } from "@/lib/sendLead";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../ui/Card";
import { Input } from "../ui/Input";
import toast, { Toaster } from "react-hot-toast";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = ({}) => {
  const { register, handleSubmit } = useForm<Lead>();
  const { postData, error, isLoading } = usePostLead();
  const [sended, setSended] = useState(false);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/leads/lead`;
  const onSubmit: SubmitHandler<Lead> = async (lead: Lead) => {
    try {
      const response = await postData(URL, lead);

      if (response?.status === "Lead created succesfully") {
        setSended(true);
        toast.success("Alllllllllright! Information sended");
      }
    } catch (error) {
      toast.error("Sorry buddy, technical problems");
    }
  };

  return (
    <>
      <Card
        variant={"dark"}
        className="col-span-3 md:row-span-1 aspect-auto flex flex-col justify-center items-center p-2 lg:px-10 py-6 lg:py-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-2 flex-nowrap"
        >
          <Input
            className="border-white"
            title="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <Input
            title="name"
            className="border-white"
            placeholder="Lastname"
            {...register("lastname", { required: true })}
          />
          <Input
            title="name"
            className="border-white"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {isLoading ? (
            <button className="flex flex-nowrap gap-1">
              <span className="loading loading-spinner text-slate-100"></span>
              Sending
            </button>
          ) : (
            <button
              className="h-10 rounded-md py-2 px-3 bg-blue-600 hover:bg-blue-400 active:border-blue-600 active:border-2"
              type="submit"
            >
              SEND
            </button>
          )}
        </form>
        {sended && (
          <div className="mt-4 rounded-xl bg-green-400/10  text-base text-green-100 px-4 py-3 flex">
            <span className="m-auto">
              Great! Information on way. You will get a confirmation email.{" "}
            </span>
          </div>
        )}
      </Card>
      <Toaster position="bottom-right" />
    </>
  );
};

export default FormSection;
