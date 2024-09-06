import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      city: city,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;
  console.log(results);

  return (
    <div>
      {/* Information Panel */}

      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-500">
              Last Updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString()}(
              {results.timezone})
            </p>
          </div>
          <div>
            {/* CalloutCard */}
            <CalloutCard message="This is where GPT- 3.5 Summary will go!" />
          </div>
          <div>
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}˚C`}
              color="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
