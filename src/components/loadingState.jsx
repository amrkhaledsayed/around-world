import { useTranslation } from "react-i18next";
import { Atom } from "react-loading-indicators";

const LoadingState = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Atom
        color="#32cd32"
        className="text-[var(--text-color-dark)]"
        size="medium"
        text=""
        textColor=""
      />
      <h1 className="text-center text-[24px] leading-[36px] font-extrabold text-[var(--text-color-dark)]">
        {t("Loading...")}
      </h1>
    </div>
  );
};

export default LoadingState;
