import { Atom } from "react-loading-indicators";
import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import { useFetchData } from "../useFetchData";
import LoadingState from "../components/loadingState";

const AllCountry = () => {
  const {
    loading,
    isError,
    data,
    filteredData,
    setFilteredData,
    setFilterDataByRegion,
    FilterDataByRegion,
  } = useFetchData();
  loading && <LoadingState />;

  if (isError) {
    return (
      <div className="flex justify-center py-20">
        <h1 className="text-center text-[24px] leading-[36px] font-extrabold text-red-600">
          Error loading data
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[50px] md:items-stretch">
      <div>
        <div className="m-auto flex max-w-[95rem] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-start md:px-10 lg:px-[84px]">
          <SearchInput
            data={data}
            setFilteredData={setFilteredData}
            filterDataByRegion={FilterDataByRegion}
          />
          <RegionMenu
            data={data}
            setFilteredData={setFilteredData}
            setFilterDataByRegion={setFilterDataByRegion}
          />
        </div>
      </div>
      <CountryList data={filteredData} />
    </div>
  );
};

export default AllCountry;
