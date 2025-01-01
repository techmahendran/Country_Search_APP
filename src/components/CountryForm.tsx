import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SearchButton from "./Button";
import Result from "./Result";

type FormData = {
  country: string;
};

const CountryForm = () => {
  const [countryData, setCountryData] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    const { country } = formData;

    try {
      setErrorMessage(null);
      setCountryData(null); 

      const countryURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
      const response = await fetch(countryURL);

      if (!response.ok) {
        throw new Error("Country not found");
      }

      const data = await response.json();

      const countryInfo = {
        capital: data[0]?.capital?.[0],
        flags: data[0]?.flags?.svg,
        countryName: data[0]?.name?.common,
        continents: data[0]?.continents?.[0],
        currencies: Object.keys(data[0]?.currencies || {})[0],
        currencyName:
          data[0]?.currencies?.[Object.keys(data[0]?.currencies || {})[0]]
            ?.name,
        languages: Object.values(data[0]?.languages || {}).join(", "),
      };
      setCountryData(countryInfo);
    } catch (error) {
      setErrorMessage("Could not fetch data. Please check the country name.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      setCountryData(null);
    }
  };

  const validateCountryName = (value: string) => {
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return "Only letters and spaces are allowed in the country name";
    }
    if (value.trim().length < 2) {
      return "Enter a valid country name";
    }
    return true;
  };

  return (
    <>
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
              {...register("country", {
                required: "Country name is required",
                validate: validateCountryName,
              })}
            />
          </div>
          <SearchButton disabled={!!errors.country} />
        </div>
        {errors.country?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </form>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-4 font-bold">{errorMessage}</p>
      )}

      {countryData && <Result {...countryData} />}
    </>
  );
};

export default CountryForm;
