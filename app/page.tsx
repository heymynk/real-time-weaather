'use client'

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#87CEEB] via-[#4682B4] to-[#1C3B72] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <Text className="text-6xl font-bold text-center mb-10 text-gray-600">Weather AI</Text>
        <Subtitle className="text-xl text-center text-gray-700">
          Powered by OpenAI, Next.js, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#87CEFA] via-[#4682B4] to-[#1E3A61] rounded-lg p-6 shadow-md">
          {/* cityPicker */}
          <CityPicker/>
        </Card>
      </Card>
    </div>
  );
}
