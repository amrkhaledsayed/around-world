import { Menu } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    localStorage.setItem("i18nextLng", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="rounded bg-gray-200 px-4 py-2">
        {t("🌐 Language")}
      </Menu.Button>
      <Menu.Items className="absolute z-10 mt-2 w-full rounded border-none bg-white shadow">
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => handleLanguageChange("en")}
              className={`block w-full px-4 py-2 ${active ? "bg-gray-100" : ""}`}
            >
              English
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => handleLanguageChange("ar")}
              className={`block w-full px-4 py-2 ${active ? "bg-gray-100" : ""}`}
            >
              العربية
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
export default LanguageSwitcher;
