import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = (props) => {
  const { data, setFilteredData, filterDataByRegion } = props;
  const [inputValue, setInputValue] = useState("");

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
        : baseData.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
          );

    setFilteredData(filteredBySearch);
  };

  return (
    <div className="relative w-[100%]">
      <input
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="Search for a country…"
        className="h-[56px] w-[100%] max-w-[480px] rounded-[115px] bg-[var(--background-color-white)] pl-10 text-[var(--text-color-dark)] shadow-xl outline-none placeholder:text-[var(--text-color-dark)] md:w-[480px]"
      />
      <CiSearch className="absolute top-0 left-[10px] translate-y-[50%] text-[26px] text-[var(--text-color-dark)]" />
    </div>
  );
};
export default SearchInput;
