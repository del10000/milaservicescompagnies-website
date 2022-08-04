import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { ProComp2 } from "../components/ProComp2";
import { SimpleCentredBranded } from "../components/SimpleCentredBranded";
import { Footer } from "../components/Footer";

const Particulier: NextPage = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-secondary-700 tracking-wide uppercase">
              Particulier
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Nos offres pour particuliers
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Location de trottinettes électrique
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative pb-28 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="py-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl pb-10 text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Location de trottinettes
            </h2>

            <h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
              Nos produits
            </h3>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Trottinettes électriques allant de 20km à 45 km d’autonomie.
                Leur vitesse peuvent atteindre entre 20km/h à 25km/h selon la
                gamme du produit choisie.
              </p>

              <h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
                Sécurité
              </h3>
              <p>
                Nous équipons nos trottinettes de pneus pleins, ainsi que
                d’accessoires de sécurité : casque, gilet de sécurité.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <div className="border-t-2 border-gray-100 pt-6">
              <div className="text-base font-medium text-gray-500">
                Services
              </div>
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-8">
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  Livraison
                </span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  Récupération
                </span>
              </div>
            </div>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-secondary-700">
                {" "}
                Demander une location de trottinette électrique{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="relative sm:py-16 lg:py-0">
          {/* <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          </div> */}
          <div className="relative flex justify-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative h-96 w-96 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-96 w-full object-cover"
                src="./assets/Gradient2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <SimpleCentredBranded />
      <Footer />
    </div>
  );
};

export default Particulier;
