"use client";

import TextFields from "@/components/TextFields";
import Button from "@/components/Button";
import {useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkbox from "@/components/Checkbox";
import UseYupForm from "@/components/UseYupForm";
import Selectbox from "@/components/Selectbox";

type FormData = {

  firstName: string;
  age: number;
  email: string;
};

export default function Home() {


  const { register, handleSubmit, errors } = UseYupForm();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <>

    <section className="w-full max-w-xs mx-auto my-10">

      <form onSubmit={handleSubmit(onSubmit)}>

      <TextFields label="First Name" 
      {...register("firstName")}
      />
      <span>
        {errors.firstName?.message}
      </span>

      <TextFields label="Last Name" />

      <TextFields 
      label="Age" 
      type="number" 
      {...register("age")}
      />
      <span>
        {errors.age?.message}
      </span>

      <Selectbox 
      label="Pet"
      {...register("pet")}
      options={[
        { value: "none", label: "None" },
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
        { value: "bird", label: "Bird" },
        { value: "fish", label: "Fish" },
        { value: "reptile", label: "Reptile" },
        { value: "other", label: "Other" }
      ]}
      />
      <span>
        {errors.pet?.message}
      </span>

      <TextFields 
      label="Email"
      type="email"
      {...register("email")}
      />
      <span>
      {errors.email?.message}
      </span>

      <Checkbox
      label="Accept our terms"
      {...register('terms')}
      />
      <span>
      {errors.terms?.message}
      </span>

      <Button />

      </form>
    </section>
    </>
  );
}