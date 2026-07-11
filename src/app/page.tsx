import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Marc Gaudett | Operator Notes on SaaS Growth and Distribution",
  description: "Practical Operator Notes from Marc Gaudett on SaaS partnerships, integrations, data, affiliates, outbound and sustainable revenue systems.",
};

export default function Page() {
  return <HomeClient />;
}
