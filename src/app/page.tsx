import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Marc Gaudett | Operator Notes",
  description: "Practical notes on partnerships, integrations, data, distribution, and SaaS growth systems.",
};

export default function Page() {
  return <HomeClient />;
}
