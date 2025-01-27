"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";

// Define the expected structure for `results`
type WeatherResults = {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
  };
};

type Props = {
  city: string;
  results: WeatherResults; 
  lat: string;
  long: string;
};

function InformationPanel({ city, lat, long, results }: Props) {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Set date and time on the client-side only
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-gb", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setCurrentTime(
      date.toLocaleTimeString("en-gb", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1C3B72] via-[#4682B4] to-[#87CEEB] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-sm text-white mt-4 text-center">
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">{currentDate}</p>
          <p className="font-light">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">{currentTime}</p>
      </div>

      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div>
          {/* Image */}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />

          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}˚C
            </p>
            <p className="text-right font-light text-lg">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gradient-to-br from-[#87CEEB] via-[#4682B4] to-[#1C3B72]">
          <SunIcon className="h-10 w-10 text-white" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 rounded-md bg-gradient-to-br from-[#87CEEB] via-[#4682B4] to-[#1C3B72]">
          <MoonIcon className="h-10 w-10 text-white" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
