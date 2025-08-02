import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useFetchData } from "../useFetchData";
import LoadingState from "../components/loadingState";
import NoPage from "../components/Nopage";

const DetailsPage = () => {
  const { country } = useParams();
  const decodedName = decodeURIComponent(country);

  const { data, loading, isError } = useFetchData(decodedName);

  if (loading) return <LoadingState />;
  if (!data || isError) return <NoPage />;

  const isZionistEntity = data?.name?.common === "Israel";

  return (
    <div className="m-auto flex flex-col gap-[73px] px-5.5 sm:px-[84px]">
      <Link to={".."}>
        <IoIosArrowRoundBack className="rounded-[8px] bg-[var(--background-color-white)] text-4xl text-[var(--text-color-dark)]" />
      </Link>

      <div className="flex flex-col flex-wrap justify-between gap-[20px] md:flex-row md:items-center md:gap-5 lg:flex-row">
        <img
          src={data?.flags?.svg}
          alt={data?.flags?.alt || data?.name?.common}
          className="h-[100%] w-full rounded-[8px] md:w-[500px]"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] font-extrabold text-[var(--text-color-dark)]">
            {isZionistEntity ? "Occupied Palestinian Territory" : data?.name?.common || "No name"}
          </h1>

          {isZionistEntity ? (
            <div className="flex flex-col gap-[10px]">
              <div className="info-row">
                <p className="info-label">Victims of Occupation:</p>
                <p className="info-value">Over 100,000 Palestinian martyrs since 1948</p>
              </div>
              <div className="info-row">
                <p className="info-label">Crimes:</p>
                <p className="info-value">Bombing homes, killing civilians, forced displacement</p>
              </div>
              <div className="info-row">
                <p className="info-label">Status:</p>
                <p className="info-value">Zionist Entity - Not Recognized</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-between gap-[30px] md:flex-row md:items-center">
              <div className="flex flex-col gap-[10px]">
                <div className="info-row">
                  <p className="info-label">Native Name: </p>
                  <p className="info-value">{data?.name?.official || "N/A"}</p>
                </div>
                <div className="info-row">
                  <p className="info-label">Population: </p>
                  <p className="info-value">
                    {data?.population?.toLocaleString() || "N/A"}
                  </p>
                </div>
                <div className="info-row">
                  <p className="info-label">Region: </p>
                  <p className="info-value">{data?.region || "N/A"}</p>
                </div>
                <div className="info-row">
                  <p className="info-label">Sub Region: </p>
                  <p className="info-value">{data?.subregion || "N/A"}</p>
                </div>
                <div className="info-row">
                  <p className="info-label">Capital: </p>
                  <p className="info-value">{data?.capital?.[0] || "N/A"}</p>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="info-row">
                  <p className="info-label">Top Level Domain: </p>
                  <p className="info-value">{data?.tld?.[0] || "N/A"}</p>
                </div>
                <div className="info-row">
                  <p className="info-label">Currencies: </p>
                  <p className="info-value">
                    {data?.currencies
                      ? Object.values(data.currencies)
                          .map((cur) => cur.name)
                          .join(", ")
                      : "N/A"}
                  </p>
                </div>
                <div className="info-row">
                  <p className="info-label">Languages: </p>
                  <p className="info-value">
                    {data?.languages
                      ? Object.values(data.languages).join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
