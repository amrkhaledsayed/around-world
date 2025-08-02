import Select from "react-select";

const options = [
  { value: "All Region", label: "All Region" },
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const RegionMenu = (props) => {
  const { data, setFilteredData, setFilterDataByRegion } = props;
  const handleChange = (e) => {
    const selectedOption = e.label;
    console.log(selectedOption);

    const filteredByRegion =
      selectedOption === "All Region"
        ? data
        : data.filter(
            (country) =>
              country.region.toLowerCase() === selectedOption.toLowerCase(),
          );
    setFilteredData(filteredByRegion);
    setFilterDataByRegion(filteredByRegion);
  };
  return (
    <div className="w-[200px]">
      <Select
        defaultValue={options[0]}
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
