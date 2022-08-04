import { LightningBoltIcon, MapIcon } from '@heroicons/react/solid';

export function PictureText() {
	return (
		<div>
			<div className="relative bg-white pt-16 md:pb-36 lg:pb-52 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12">
						<div className="relative px-4 py-10 max-w-xl md:mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
							<div className="flex justify-center md:mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
								<div className="h-96 w-96 shadow-xl overflow-hidden">
									<img
										className="lg:absolute rounded-2xl inset-0 right-0 h-full w-full object-cover"
										src="./assets/testimonial.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
							{/* Content area */}
							<div className="">
								<h2 className="text-3xl pb-10 text-gray-900 font-extrabold tracking-tight sm:text-4xl">
									Initiation et sensibilisation
								</h2>

								<h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
									Partie théorique
								</h3>
								<div className="mt-6 text-gray-500 space-y-6">
									<p className="text-lg">
										L’objectif de cette formation est de faire connaitre la loi,
										les risques, les sanctions, l’impact sur l’environnement et
										aussi les règles de sécurité. Chaque réponse donnée par un
										enfant est validée et approfondie (loi, risque, etc...)
									</p>

									<h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
										Partie pratique
									</h3>
									<p>
										L’objectif est d’adapté ses déplacements, vitesses et
										circuler avec les “autres” en respectant les règles,
										sécuriser son véhicule.
									</p>
									<div>
										<p className="inline-flex pt-5">
											{' '}
											<img
												alt="Scooter icon"
												className="h-6 w-6 mr-2"
												src="./assets/icon.svg"
											/>{' '}
											L’objectif est d’adapté ses déplacements, vitesses et
											circuler avec les “autres” en respectant les règles,
											sécuriser son véhicule.
										</p>
									</div>
									<div>
										<p className="inline-flex pt-5">
											<LightningBoltIcon className="h-6 w-6 mr-2" />
											Ateliers d’entraînement pour maîtriser la trottinette et
											se déplacer dans un environnement urbain
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
									<a
										href="#"
										className="text-base font-medium text-secondary-700"
									>
										{' '}
										Demander une location de trottinette électrique{' '}
										<span aria-hidden="true">&rarr;</span>{' '}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="relative bg-white pt-16 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12 flex flex-col-reverse ">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
							{/* Content area */}
							<div className="">
								<h2 className="text-3xl pb-10 text-gray-900 font-extrabold tracking-tight sm:text-4xl">
									Location de trottinettes
								</h2>

								<h3 className="text-xl text-gray-900 tracking-tight sm:text-xl">
									Nos produits
								</h3>
								<div className="mt-6 text-gray-500 space-y-6">
									<p className="text-lg">
										Trottinettes électriques allant de 20km à 45 km d’autonomie.
										Leur vitesse peuvent atteindre entre 20km/h à 25km/h selon
										la gamme du produit choisie.
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
									<a
										href="#"
										className="text-base font-medium text-secondary-700"
									>
										{' '}
										Demander une location de trottinette électrique{' '}
										<span aria-hidden="true">&rarr;</span>{' '}
									</a>
								</div>
							</div>
						</div>
						<div className="relative px-4 max-w-xl md:mx-auto sm:px-6 lg:py-16 mb-16 lg:mb-0 lg:max-w-none lg:mx-0 lg:px-0">
							<div className="flex justify-center md:mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
								<div className="h-96 lg:w-96 shadow-xl overflow-hidden">
									<img
										className="lg:absolute rounded-2xl inset-0 right-0 h-full lg:w-full lg:object-cover"
										src="./assets/Gradient.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
