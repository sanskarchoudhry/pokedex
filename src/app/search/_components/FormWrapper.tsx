"use client";
import { FormProvider, useForm } from "react-hook-form";

export default function FormWrapper({ children }: { children: JSX.Element }) {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
}
