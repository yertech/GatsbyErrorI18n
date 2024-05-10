const { join } = require("path");
const { readdirSync, lstatSync } = require("fs");

export const defaultLanguage = "en";

// based on the directories get the language codes
const allLanguages = readdirSync(join(__dirname, "locales")).filter((fileName: string) => {
  const joinedPath = join(join(__dirname, "locales"), fileName);
  const isDirectory = lstatSync(joinedPath).isDirectory();
  return isDirectory;
});

// defaultLanguage as first
allLanguages.splice(allLanguages.indexOf(defaultLanguage), 1);
allLanguages.unshift(defaultLanguage);

export const languages = allLanguages;
