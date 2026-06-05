import casesData from "./cases.json";

export type Case = {
  slug: string;
  num: string;
  label: string;
  title: string;
  jaar: string;
  desc: string;
  tags: string[];
  result: string;
  img: string;
  showcaseImg: string;
  projectIntro: string;
  geleverd: string[];
  aanpak: { num: string; title: string; desc: string }[];
  resultaten: { number: string; label: string }[];
  resultatenTekst: string;
};

export const cases: Case[] = casesData as Case[];
