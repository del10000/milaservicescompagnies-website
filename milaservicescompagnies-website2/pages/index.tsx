import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { ThreeColumn } from "../components/ThreeColumn";
import { Card } from "../components/Card";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mila Services Compagnie</title>
        <link rel="icon" href="./assets/logo-icon.svg" />
      </Head>

      <Nav />
      <ThreeColumn />
      <Card />
      <Testimonials />
      {/* <div className="mx-auto grid grid-cols-2 py-20 px-8 lg:px-none">
        <div>
          <h2 className="text-3xl font-extrabold pb-6">Nous contacter</h2>
          <div className="text-gray-600">
            <p className="max-w-md text-gray-600">
              Vous souhaitez louer une trottinette électrique ? Nous sommes à
              votre disposition pour répondre à vos besoins par mail et par
              téléphone.
            </p>
            <p className="inline-flex pt-8">
              <PhoneIcon className="h-6 w-6 mr-2" />
              +33 7 68 83 41 41
            </p>
            <p className="ml-8">Lun. au Ven. de 9h à 18h</p>

            <p className="inline-flex pt-8">
              <MailIcon className="h-6 w-6 mr-2" />
              delphin@milaservicescompagnies.fr
            </p>

            <p className="ml-8">steve@milaservicescompagnies.fr</p>

            <p className="inline-flex pt-8">
              <LocationMarkerIcon className="h-6 w-6 mr-2" />6 rue des Palis
            </p>
            <p className="ml-8">76530, Grand-Couronne</p>
          </div>
        </div>
        <div className="relative h-0 pb-2/3">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-96 lg:w-full"
                src="./assets/trott3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="px-5 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start py-5 md:py-24">
        <div className="">
          <h2 className="text-3xl font-extrabold pb-6">Nous contacter</h2>
          <div className="text-gray-600">
            <p className="max-w-md text-gray-600">
              Vous souhaitez louer une trottinette électrique ? Nous sommes à
              votre disposition pour répondre à vos besoins par mail et par
              téléphone.
            </p>
            <p className="inline-flex pt-8">
              <PhoneIcon className="h-6 w-6 mr-2" />
              +33 7 68 83 41 41
            </p>
            <p className="ml-8">Lun. au Ven. de 9h à 18h</p>

            <p className="inline-flex pt-8">
              <MailIcon className="h-6 w-6 mr-2" />
              delphin@milaservicescompagnies.fr
            </p>

            <p className="ml-8">steve@milaservicescompagnies.fr</p>

            <p className="inline-flex pt-8">
              <LocationMarkerIcon className="h-6 w-6 mr-2" />6 rue des Palis
            </p>
            <p className="ml-8">76530, Grand-Couronne</p>
          </div>
        </div>

        <div className="relative hidden md:flex sm:py-16 lg:py-0">
          {/* <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          </div> */}
          <div className="relative flex justify-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
            {/* Testimonial card*/}
            <div className="relative h-96 w-96 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 right-0 h-96 w-96 object-cover"
                src="./assets/trott3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
