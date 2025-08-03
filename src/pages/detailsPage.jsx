import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useFetchData } from "../utils/useFetchData";
import LoadingState from "../components/loadingState";
import NoPage from "../components/Nopage";
import { useTranslation } from "react-i18next";

const DetailsPage = () => {
  const { t } = useTranslation();
  const { country } = useParams();
  const decodedName = decodeURIComponent(country);

  const { data, loading, isError } = useFetchData(decodedName);

  if (loading) return <LoadingState />;
  if (!data || isError) return <NoPage />;
  console.log(data);

  const isZionistEntity = data?.name?.common?.toLowerCase() === "israel";

  const countryName = data?.name?.common;
  const nativeName = data?.name?.official;
  const population = data?.population;
  const region = data?.region;
  const capital = data?.capital?.[0];
  const tld = data?.tld?.[0];
  const currencies = data?.currencies;

  const translateKey = (prefix, key) => {
    return key ? t(`${prefix}.${key}`, { defaultValue: key }) : "N/A";
  };

  return (
    <div className="flex flex-col gap-[73px] px-5.5 sm:px-[84px]">
      <Link to={".."}>
        <IoIosArrowRoundBack className="rounded-[8px] bg-[var(--background-color-white)] text-4xl text-[var(--text-color-dark)] rtl:rotate-180" />
      </Link>

      <div className="flex max-w-[276px] flex-col flex-wrap justify-between sm:max-w-full md:flex-row md:items-start md:gap-5 lg:flex-row">
        <img
          src={
            data?.flags?.svg === "https://flagcdn.com/il.svg"
              ? "https://placehold.co/276x200/2c333e/FFFFFF.png"
              : data?.flags?.svg
          }
          alt={data?.flags?.alt || countryName}
          className="h-[100%] max-w-[276px] rounded-[8px] object-cover md:w-full md:max-w-[500px]"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold text-[var(--text-color-dark)]">
            {isZionistEntity
              ? t("Occupied Palestinian")
              : translateKey("Countries", countryName)}
          </h1>

          {isZionistEntity ? (
            <div className="flex flex-col gap-[10px]">
              <span className="info-label">
                {t("Victims of Occupation")}:
                <p className="info-value">
                  {t("Over 157,000 Palestinian martyrs since 1948")}
                </p>
              </span>

              <p className="info-label">
                {t("Crimes")}:
                <p className="info-value">
                  {t("Bombing homes, killing civilians, forced displacement")}
                </p>
              </p>

              <p className="info-label">
                {t("Status")}
                <p className="info-value">
                  :{t("Zionist Entity - Not Recognized")}
                </p>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-between gap-[30px] md:flex-row md:items-center">
              <div className="flex flex-col gap-[10px]">
                <p className="info-label">
                  {t("Native Name")}:
                  <p className="info-value">
                    {translateKey("NativeNames", nativeName)}
                  </p>
                </p>

                <p className="info-label">
                  {t("Population")}:
                  <p className="info-value">
                    {population ? population.toLocaleString() : "N/A"}
                  </p>
                </p>

                <p className="info-label">
                  {t("Region")}:
                  <p className="info-value">
                    {translateKey("Regions", region)}
                  </p>
                </p>
                <p className="info-label">
                  {t("Sub Region")}:
                  <p className="info-value">
                    {translateKey("Regions", region)}
                  </p>
                </p>
                <p className="info-label">
                  {t("Capital")}:
                  <p className="info-value">
                    {translateKey("Capitals", capital)}
                  </p>
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="info-label">
                  {t("Top Level Domain")}:
                  <p className="info-value">{tld || "N/A"}</p>
                </p>
                <p className="info-label">
                  {t("Currencies")}:
                  <p className="info-value">
                    {currencies
                      ? Object.values(currencies)
                          .map((cur) =>
                            translateKey("CurrenciesList", cur.name),
                          )
                          .join(", ")
                      : "N/A"}
                  </p>
                </p>

                <p className="info-label">
                  {t("Languages")}:
                  <p className="info-value">
                    {data?.languages
                      ? Object.values(data.languages)
                          .map((lang) =>
                            t(`languages.${lang}`, { defaultValue: lang }),
                          )
                          .join(", ")
                      : "N/A"}
                  </p>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
