"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";

type Props = {
  city: string;
  results: string;
  lat: string;
  long: string;
};

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#1C3B72] via-[#4682B4] to-[#87CEEB] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-sm text-white">
          Long/Lat: {long} , {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-gb", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-light">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-gb", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div>
          {/* Image */}
          <Image
          src = {`https://www.weatherbit.io/static/img/icons/${
            weatherCodeToString[results.current_weather.weathercode].icon
          }.png`}
          alt={weatherCodeToString[results.current_weather.weathercode].label}
          width={75}
          height={75}
          />

          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold"> {results.current_weather.temperature.toFixed(1)}˚C</p>
            <p className="text-right font-light text-lg">
            {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;