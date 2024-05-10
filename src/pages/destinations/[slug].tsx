import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

function Destinations() {
  const { t } = useTranslation();

  return (
    <section className="p-16 relative table w-full items-center py-16">
      {t("destination")}
      <div className="mt-4">
        <Link
          to={"/"}
          placeholder={undefined}
          className="p-2 text-lg font-medium text-black hover:text-red-500 duration-500 ease-in-out rounded-md border border-gray-300 w-40"
        >
          {t("backToHome")}
        </Link>
      </div>
    </section>
  );
}

export default Destinations;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["index"] }, language: { eq: $language } }) {
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
