/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CheckIcon } from '@heroicons/react/solid';

const navigation = [
	{ name: 'Accueil', href: '#' },
	{ name: 'Professionnel', href: '#' },
	{ name: 'Particulier', href: '#' },
	{ name: 'Nous contacter', href: '#' },
];
export function Card() {
	return (
		<div>
			<div className="relative py-16 bg-white">
				<div
					className="hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block"
					aria-hidden="true"
				/>
				<div className="max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8">
					<div className="lg:grid lg:grid-cols-12">
						<div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
							<div
								className="absolute inset-x-0 h-1/2 bg-white lg:hidden"
								aria-hidden="true"
							/>
							<div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
								<div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
									<img
										className="object-cover object-center rounded-3xl shadow-2xl"
										src="./assets/trott1.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div className="relative bg-gray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
							<div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
								<h2
									className="text-3xl font-extrabold text-primary-500"
									id="join-heading"
								>
									Découvrez nos offres professionnelles
								</h2>
								<p className="text-lg text-white">
									<span className="inline-flex">
										<CheckIcon className="h-6 w-6 mr-3 text-primary-500" />{' '}
										Location de trottinettes électriques
									</span>{' '}
									<br />
									<span className="inline-flex">
										<CheckIcon className="h-6 w-6 mr-3 text-primary-500" />{' '}
										Initiation à la mobilité urbaine
									</span>
								</p>
								<a
									className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-black hover:bg-gray-50 sm:inline-block sm:w-auto"
									href="/pro"
								>
									En savoir plus
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="relative py-16 bg-white">
				<div
					className="hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block"
					aria-hidden="true"
				/>
				<div className="max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8">
					<div className="lg:grid lg:grid-cols-12">
						<div className="relative z-10 lg:col-start-9 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
							<div
								className="absolute inset-x-0 h-1/2 bg-white lg:hidden"
								aria-hidden="true"
							/>
							<div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
								<div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
									<img
										className="object-cover object-center rounded-3xl shadow-2xl"
										src="./assets/trott2.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div className="relative bg-gray-900 lg:col-start-1 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
							<div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-2 lg:col-span-6">
								<h2
									className="text-3xl font-extrabold text-primary-500"
									id="join-heading"
								>
									Découvrez nos offres particuliers
								</h2>
								<p className="text-lg text-white">
									<span className="inline-flex">
										<CheckIcon className="h-6 w-6 mr-3 text-primary-500" />{' '}
										Location de trottinettes électriques
									</span>{' '}
									<br />
									<span className="inline-flex">
										<CheckIcon className="h-6 w-6 mr-3 text-primary-500" />{' '}
										Accessoires de sécurité
									</span>
									<br />
									<span className="inline-flex">
										<CheckIcon className="h-6 w-6 mr-3 text-primary-500" />{' '}
										Livraison & récupération à domicile
									</span>
								</p>
								<a
									className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text- hover:bg-gray-50 sm:inline-block sm:w-auto"
									href="/particulier"
								>
									En savoir plus
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
