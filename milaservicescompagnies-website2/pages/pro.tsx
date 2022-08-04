import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { ProComp2 } from "../components/ProComp2";
import { SimpleCentredBranded } from "../components/SimpleCentredBranded";
import { Footer } from "../components/Footer";

const Pro: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mila Services Compagnie</title>
        <link rel="icon" href="./assets/logo-icon.svg" />
      </Head>

      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-secondary-700 tracking-wide uppercase">
              ENTREPRISE
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Nos offres professionnelles
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Location de trottinettes électrique et initiation à la mobilité
              urbaine
            </p>
          </div>
        </div>
      </div>
      <ProComp2 />
      <SimpleCentredBranded />
      <Footer />
    </div>
  );
};

export default Pro;
