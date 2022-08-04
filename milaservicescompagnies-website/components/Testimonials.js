/* This example requires Tailwind CSS v2.0+ */

const people = [
	{
		name: 'Soké Diallo',
		role: 'Directeur du centre de loisir Les Essarts',
		imageUrl:
			'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio: "\"Nous travaillons avec Mila depuis plus d'un an maintenant et nous n'avons jamais été déçu. Ils sont toujours à l'heure et ils font le travail correctement. Leur service client est également fantastique! Nous les recommande vivement.\"",
	},
	{
		name: 'Guillaume Delavigne',
		role: 'Responsable du conseil des èleves de la ville de Grand-Couronne',
		imageUrl:
			'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio: '"Nous avons eu une merveilleuse expérience de travail avec Mila. Ils ont été professionnels et réactifs, et ils nous ont fourni la meilleure qualité de travail possible."',
	},
	{
		name: 'Siaka Konate',
		role: 'Gérant de Jeunesse évasion',
		imageUrl:
			'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio: '"Nous sommes des client fidèles de Mila Services Compagnie et nous avons toujours eu une excellente expérience. Leur personnel est sympathique et compétent, leurs prix sont justes et compétitifs, et ils feront tout leur possible pour vous aider."',
	},
];
export function Testimonials() {
	return (
		<div>
			<div className="bg-gray-50">
				<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
					<div className="space-y-12">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
							Ils nous ont fait confiance
						</h2>

						<ul
							role="list"
							className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
						>
							{people.map((person) => (
								<blockquote className="">
									<div className="max-w-3xl italic mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
										<p>{person.bio}</p>
									</div>
									<footer className="mt-8">
										<div className="md:flex md:items-center md:justify-center">
											{/* <div className="md:flex-shrink-0">
												<img
													className="mx-auto h-10 w-10 rounded-full"
													src={person.imageUrl}
													alt=""
												/>
											</div> */}
											<div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
												<div className="text-base font-medium text-gray-900">
													{person.name}
												</div>

												<svg
													className="hidden md:block mx-1 h-5 w-5 text-primary-600"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M11 0h3L9 20H6l5-20z" />
												</svg>

												<div className="text-base font-medium text-gray-500">
													{person.role}
												</div>
											</div>
										</div>
									</footer>
								</blockquote>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
