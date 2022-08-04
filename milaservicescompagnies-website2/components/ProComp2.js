import {
  LightningBoltIcon,
  MapIcon,
  ListingCheckIcon,
} from '@heroicons/react/solid';

export function ProComp2() {
  return (
    <div className="relative bg-white pb-16 sm:pb-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          {/* <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          </div> */}
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative h-screen pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="./assets/testimonial.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl pb-10 text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Initiation et sensibilisation
            </h2>

            <h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
              Partie théorique
            </h3>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                L’objectif de cette formation est de faire connaitre la loi, les
                risques, les sanctions, l’impact sur l’environnement et aussi
                les règles de sécurité. Chaque réponse donnée par un enfant est
                validée et approfondie (loi, risque, etc...)
              </p>

              <h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
                Partie pratique
              </h3>
              <p>
                L’objectif est d’adapté ses déplacements, vitesses et circuler
                avec les “autres” en respectant les règles, sécuriser son
                véhicule.
              </p>
              <div>
                <p className="inline-flex pt-5">
                  {' '}
                  <img
                    alt="Scooter icon"
                    className="h-6 w-6 mr-2"
                    src="./assets/icon.svg"
                  />{' '}
                  L’objectif est d’adapté ses déplacements, vitesses et circuler
                  avec les “autres” en respectant les règles, sécuriser son
                  véhicule.
                </p>
              </div>
              <div>
                <p className="inline-flex pt-5">
                  <LightningBoltIcon className="h-6 w-6 mr-2" />
                  Ateliers d’entraînement pour maîtriser la trottinette et se
                  déplacer dans un environnement urbain
                </p>
              </div>
              <div>
                <p className="inline-flex pt-5">
                  <MapIcon className="h-6 w-6 mr-2" />
                  Parcours d’évaluation
                </p>
              </div>

              <div>
                <p className="inline-flex pt-5">
                  {' '}
                  <img
                    alt="listing check"
                    className="h-6 w-6 mr-2"
                    src="./assets/listingcheck.svg"
                  />{' '}
                  Bilan de fin de séance
                </p>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <div className="border-t-2 border-gray-100 pt-6">
              <div className="text-base font-medium text-gray-500">
                Déroulement de la session
              </div>
              <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-8">
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  Sensibilisation
                </span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  Pratique sur parcours
                </span>
              </div>
            </div>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-secondary-700">
                {' '}
                Demander un cours d’initiation et de sensibilisation{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
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
              <div className="grid md:grid-cols-2 md:gap-x-4 md:gap-y-8">
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
                {' '}
                Demander une location de trottinette électrique{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>

        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative h-screen pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="./assets/Gradient.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
