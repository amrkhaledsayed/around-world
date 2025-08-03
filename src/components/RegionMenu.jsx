import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const RegionMenu = ({ data, setFilteredData, setFilterDataByRegion }) => {
  const { t, i18n } = useTranslation();

  const options = useMemo(
    () => [
      {
        value: "All Region",
        label: t("Regions.All Region", { defaultValue: "All Region" }),
      },
      {
        value: "Africa",
        label: t("Regions.Africa", { defaultValue: "Africa" }),
      },
      {
        value: "America",
        label: t("Regions.America", { defaultValue: "America" }),
      },
      { value: "Asia", label: t("Regions.Asia", { defaultValue: "Asia" }) },
      {
        value: "Europe",
        label: t("Regions.Europe", { defaultValue: "Europe" }),
      },
      {
        value: "Oceania",
        label: t("Regions.Oceania", { defaultValue: "Oceania" }),
      },
    ],
    [i18n.language],
  );

  const [selectedOption, setSelectedOption] = useState(options[0]);

  // تحديث selectedOption عند تغير اللغة (لضمان ترجمة العنصر المعروض)
  useEffect(() => {
    const defaultOption =
      options.find((opt) => opt.value === selectedOption?.value) || options[0];
    setSelectedOption(defaultOption);
  }, [options]);

  const handleChange = (e) => {
    setSelectedOption(e);

    const selectedValue = e.value;
    const filteredByRegion =
      selectedValue === "All Region"
        ? data
        : data.filter(
            (country) =>
              country.region?.toLowerCase() === selectedValue.toLowerCase(),
          );
    setFilteredData(filteredByRegion);
    setFilterDataByRegion(filteredByRegion);
  };

  return (
    <div className="w-[200px]">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className="bg-[var(--background-color-white)] text-sm"
        classNamePrefix="custom-select"
        styles={{
          control: (base) => ({
            ...base,
            height: 56,
            borderRadius: 6,
            borderColor: "var(--background-color-white)",
            backgroundColor: "var(--background-color-white)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            paddingLeft: 6,
          }),
          placeholder: (base) => ({
            ...base,
            color: "var(--text-color-dark)",
          }),
          singleValue: (base) => ({
            ...base,
            color: "var(--text-color-dark)",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "var(--background-color-white)",
            color: "var(--text-color-dark)",
            backdropFilter: "blur(5px)",
          }),
        }}
      />
    </div>
  );
};

export default RegionMenu;
