import { useTranslation } from "react-i18next";

const CountryCard = (props) => {
  const { t } = useTranslation();
  const { flag, name, capital, population, region } = props;
  return (
    <div className="flex h-full w-full flex-col items-start gap-[17px] rounded-[10px] bg-[var(--background-color-white)] p-2.5 pb-5.5 shadow-xl">
      <img
        src={
          flag === "https://flagcdn.com/il.svg"
            ? "https://placehold.co/276x200/2c333e/FFFFFF.png"
            : flag
        }
        alt="Flag country"
        className="aspect-[5/3] w-full rounded-[10px] object-cover"
      />
      <h2 className="text-[18px] leading-[26px] font-extrabold text-[var(--text-color-dark)]">
        {t(`Countries.${name}`, { defaultValue: name })}
      </h2>
      <div className="flex flex-col gap-1">
        <div className="info-row">
          <p className="info-label">{t("Population")}:</p>
          <p className="info-value">{population}</p>
        </div>
        <div className="info-row">
          <p className="info-label">{t("Region")}:</p>
          <p className="info-value">
            {t(`Regions.${region}`, { defaultValue: region })}
          </p>
        </div>
        <div className="info-row">
          <p className="info-label">{t("Capital")}:</p>
          <p className="info-value">
            {t(`Capitals.${capital}`, { defaultValue: capital })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
