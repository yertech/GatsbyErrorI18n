import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";

const getFlagIcon = (countryCode?: string) => {
  switch (countryCode) {
    case "en":
      return "🇺🇸";
    case "en-gb":
      return "🇬🇧";
    case "id":
      return "🇮🇩";
    case "fr":
      return "🇫🇷";
    default:
      return "🌐";
  }
};

function LanguageSwitcher() {
  const { languages, i18n, originalPath } = useI18next();
  const selectedLanguage = languages.find((language) => language === i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  const removeCurrentLangFromPath = (path: string) => {
    const lang = i18n.language;
    const regex = new RegExp(`^/${lang}`);
    return path.replace(regex, "");
  };

  return (
    <>
      <div className="flex items-center z-40 p-13px" id="langSwitcher">
        <div className="relative inline-block text-left w-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
            id={"langSwitcher-btn"}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <div className="mr-1 pt-1">{getFlagIcon(selectedLanguage)}</div>
            {selectedLanguage?.toUpperCase()}
            <svg
              className="-mr-1 ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 rounded-md bg-white ring-1 ring-black ring-opacity-5 w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="langSwitcher-btn"
              id={"langSwitcher-list"}
            >
              {languages.map((lang) => {
                return (
                  <Link
                    to={removeCurrentLangFromPath(window.location.pathname)}
                    language={lang}
                    placeholder={undefined}
                    key={`country-${lang}`}
                    className={`${
                      selectedLanguage === lang ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } rounded-md px-2 py-2 text-sm text-left hover:bg-gray-100 inline-flex items-center justify-start w-full`}
                  >
                    <div className="mr-1 pt-1">{getFlagIcon(lang)}</div>
                    {lang.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LanguageSwitcher;
