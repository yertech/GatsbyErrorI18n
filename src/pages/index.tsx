import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import LanguageSwitcher from "../components/languageSwitcher";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <section className="relative table w-full pt-16 md:pt-44 pb-56" id="home">
      <div className="container relative">
        <LanguageSwitcher />
        <div className="grid grid-cols-1 items-center my-8 gap-[30px]">
          <div>
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">{t("title")}</h4>
          </div>
          <Link
            to={"/destinations/test"}
            className="text-lg font-medium text-black hover:text-red-500 duration-500 ease-in-out rounded-md border border-gray-300 w-40"
            placeholder={""}
          >
            {"Click here"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
