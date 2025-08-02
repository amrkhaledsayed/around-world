import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import EmptySearch from "./EmptySearch";

const CountryList = (props) => {
  const { data } = props;
  if (!data || data.length === 0) {
    return <EmptySearch />;
  }
  
  return (
    <div className="m-auto grid max-w-[95rem] gap-x-[40px] gap-y-12 px-6 sm:px-6 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-[84px]">
      {data.length && (
        data.map((country) => (
          <Link
            className="w-full"
            to={`/${encodeURIComponent(country.name.common)}`}
            key={country.name.official}
          >
            <CountryCard
              flag={country.flags.svg}
              name={
                country.name.common === "Israel"
                  ? "Occupied Palestine"
                  : country.name.common
              }
              population={country.population.toLocaleString()}
              region={country.region}
              capital={country.capital?.[0]}
            />
          </Link>
        ))
      ) 
      }
    </div>
  );
};

export default CountryList;
