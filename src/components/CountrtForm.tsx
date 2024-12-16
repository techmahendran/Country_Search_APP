import React from "react";
import { useForm } from "react-hook-form";
import SearchButton from "./Button";

type FormData = {
  country: string;
};

const CountryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex justify-between items-center">
        <div className="w-full mr-3">
          <input
            type="text"
            placeholder="Enter a country name here"
            className={`border w-full p-2.5 rounded-md ${
              errors.country
                ? "border-red-500"
                : "border-grey-700 focus:border-green-500"
            }`}
            {...register("country", { required: "Country name is required" })}
          />
        </div>
        <SearchButton disabled={!!errors.country} />
      </div>
      {errors.country?.message && (
        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
      )}
    </form>
  );
};

export default CountryForm;
