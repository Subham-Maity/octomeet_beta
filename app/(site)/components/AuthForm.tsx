"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
    }
    if (variant === "LOGIN") {
      //NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //NextAuth SignIn
  };
  return (
    <div
      className="
   mt-8
   sm:mx-auto
   sm:w-full
   sm:max-w-md
   "
    >
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" id="email" register={register} />
        </form>
      </div>
    </div>
  );
};
