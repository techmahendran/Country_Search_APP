import React from "react";
import Image from "next/image";

type CountryValues = {
  capital: string;
  flags: string;
  countryName: string;
  continents: string;
  currencies: string;
  currencyName: string;
  languages: string;
};

const Result = ({
  capital,
  flags,
  countryName,
  continents,
  currencies,
  currencyName,
  languages,
}: CountryValues) => {
  return (
    <section className="mt-6">
      <div className="img mb-4 flex justify-center flex-col items-center">
        <Image
          src={flags}
          width={150}
          height={100}
          alt={`${countryName} Flag`}
        />
        <h2 className="mt-3 font-bold text-xl uppercase">{countryName}</h2>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <h4 className="font-bold w-[200px]">Capital:</h4>
          <span className=" w-[200px]">{capital}</span>
        </div>
        <div className="flex items-center">
          <h4 className="font-bold w-[200px]">Continents:</h4>
          <span className=" w-[200px]">{continents}</span>
        </div>
        <div className="flex items-center">
          <h4 className="font-bold w-[200px]">Currency:</h4>
          <span className=" w-[200px]">
            {currencies} - {currencyName}
          </span>
        </div>
        <div className="flex items-center">
          <h4 className="font-bold w-[200px]">Languages:</h4>
          <span className=" w-[200px]">{languages}</span>
        </div>
      </div>
    </section>
  );
};

export default Result;
