const CountryCard = (props) => {
  const { flag, name, capital, population, region } = props;
  return (
    <div className="flex h-full w-full flex-col items-start gap-[17px] rounded-[10px] bg-[var(--background-color-white)] p-2.5 pb-5.5 shadow-xl">
      <img
        src={flag}
        alt="Flag country"
        className="aspect-[5/3] w-full rounded-[10px] object-cover"
      />
      <h2 className="text-[18px] leading-[26px] font-extrabold text-[var(--text-color-dark)]">
        {name}
      </h2>
      <div className="flex flex-col gap-1">
        <div className="info-row">
          <p className="info-label">Population:</p>
          <p className="info-value">{population}</p>
        </div>
        <div className="info-row">
          <p className="info-label">Region:</p>
          <p className="info-value">{region}</p>
        </div>
        <div className="info-row">
          <p className="info-label">Capital:</p>
          <p className="info-value">{capital}</p>
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
