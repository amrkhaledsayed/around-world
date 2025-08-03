import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

const SearchInput = (props) => {
  const { data, setFilteredData, filterDataByRegion } = props;
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const onChangeHandler = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    const baseData =
      filterDataByRegion && filterDataByRegion.length > 0
        ? filterDataByRegion
        : data;

    const filteredBySearch =
      !searchTerm || searchTerm.trim() === ""
        ? baseData
        : baseData.filter((country) => {
            const nameEn = country.name.common.toLowerCase();
            const nameAr = t(`Countries.${country.name.common}`, {
              defaultValue: country.name.common,
            }).toLowerCase();

            return (
              nameEn.includes(searchTerm.toLowerCase()) ||
              nameAr.includes(searchTerm.toLowerCase())
            );
          });

    setFilteredData(filteredBySearch);
  };

  return (
    <form className="relative flex w-[100%] items-center rounded-[115px]">
      <input
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
        id="search-input"
        name="search-input"
        placeholder={t("Search for a country...")}
        className="h-[56px] w-[100%] max-w-[480px] rounded-[115px] bg-[var(--background-color-white)] px-10 text-[var(--text-color-dark)] shadow-xl outline-none placeholder:text-[var(--text-color-dark)] md:w-[480px]"
      />
      <label
        htmlFor="search-input"
        className="absolute right-[3%] md:right-[1.5%] ltr:left-[1.2%] md:ltr:left-[1.2%]"
      >
        <CiSearch className="align-baseline text-[26px] text-[var(--text-color-dark)]" />
      </label>
    </form>
  );
};
export default SearchInput;
