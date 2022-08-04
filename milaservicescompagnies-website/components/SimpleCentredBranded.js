/* This example requires Tailwind CSS v2.0+ */
export function SimpleCentredBranded() {
	return (
		<div className="bg-gray-900 mt-16 lg:mt-32">
			<div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
					<p className="text-gradient-50 to-gradient-100 pb-2">
						Besoin d’un renseignement
					</p>
					<p>Contactez-nous</p>
				</h2>
				<a
					href="mailto:delphin@milaservicescompagnies.fr"
					className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-indigo-50 sm:w-auto"
				>
					Nous contacter
				</a>
			</div>
		</div>
	);
}
