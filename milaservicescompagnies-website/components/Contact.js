import {
	PhoneIcon,
	MailIcon,
	LocationMarkerIcon,
} from '@heroicons/react/solid';

export function Contact() {
	return (
		<div className="relative bg-white pt-16 pb-32 overflow-hidden">
			{/* <div className="relative">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
						<div className="">
							<h2 className="text-3xl font-extrabold pb-6">Nous contacter</h2>
							<div className="text-gray-600">
								<p className="max-w-md text-gray-600">
									Vous souhaitez louer une trottinette électrique ? Nous sommes
									à votre disposition pour répondre à vos besoins par mail et
									par téléphone.
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
					</div>
					<div className="relative hidden lg:flex px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
						<div className="relative flex justify-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
							<div className="relative h-96 w-96 rounded-2xl shadow-xl overflow-hidden">
								<img
									className="absolute inset-0 right-0 h-full w-full object-cover"
									src="./assets/trott3.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="relative bg-white pt-16 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12 flex flex-col-reverse ">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
							{/* Content area */}
							<div className="">
								<h2 className="text-3xl font-extrabold pb-6">Nous contacter</h2>
								<div className="text-gray-600">
									<p className="max-w-md text-gray-600">
										Vous souhaitez louer une trottinette électrique ? Nous
										sommes à votre disposition pour répondre à vos besoins par
										mail et par téléphone.
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
										<LocationMarkerIcon className="h-6 w-6 mr-2" />6 rue des
										Palis
									</p>
									<p className="ml-8">76530, Grand-Couronne</p>
								</div>
							</div>
						</div>
						<div className="relative hidden lg:flex px-4 max-w-xl md:mx-auto sm:px-6 lg:py-16 mb-16 lg:mb-0 lg:max-w-none lg:mx-0 lg:px-0">
							<div className="flex justify-center md:mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
								<div className="h-96 lg:w-96 shadow-xl overflow-hidden">
									<img
										className="lg:absolute rounded-2xl inset-0 right-0 h-full lg:w-full lg:object-cover"
										src="./assets/trott3.jpg"
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
