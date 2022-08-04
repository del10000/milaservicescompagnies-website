/* This example requires Tailwind CSS v2.0+ */
import { LightningBoltIcon, LockClosedIcon } from '@heroicons/react/solid';

const features = [
	{
		name: 'Performances',
		description:
			'Trottinettes électriques allant de 20km à 45 km d’autonomie. Leur vitesse peuvent atteindre entre 20km/h à 25km/h selon la gamme du produit choisie.',
		icon: (props) => (
			<svg
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.21047 17.4496H15.4394V16.3035C15.4394 13.7706 17.4909 11.7192 20.0237 11.7192H20.8718L18.6942 2.04619C18.5781 1.53973 18.2941 1.08743 17.8883 0.762828C17.4826 0.43823 16.979 0.260418 16.4594 0.258301H12.0011V2.55047H16.4594L18.0639 9.7135H18.0524C16.8244 10.0836 15.7242 10.7894 14.8757 11.7512C14.0273 12.7131 13.4643 13.8928 13.2503 15.1574H7.21047C6.93506 14.3765 6.3867 13.7213 5.66643 13.3128C4.94615 12.9042 4.10248 12.7697 3.29086 12.934C1.93848 13.1976 0.849694 14.3093 0.597555 15.6617C0.503495 16.1589 0.520274 16.6708 0.646697 17.1607C0.77312 17.6507 1.00607 18.1068 1.32895 18.4965C1.65183 18.8861 2.05669 19.1997 2.51467 19.415C2.97265 19.6302 3.47247 19.7418 3.97851 19.7418C5.46842 19.7418 6.72911 18.779 7.21047 17.4496ZM3.97851 17.4496C3.34816 17.4496 2.83242 16.9338 2.83242 16.3035C2.83242 15.6731 3.34816 15.1574 3.97851 15.1574C4.60885 15.1574 5.12459 15.6731 5.12459 16.3035C5.12459 16.9338 4.60885 17.4496 3.97851 17.4496ZM20.0237 12.8652C18.1212 12.8652 16.5854 14.401 16.5854 16.3035C16.5854 18.206 18.1212 19.7418 20.0237 19.7418C21.9262 19.7418 23.462 18.206 23.462 16.3035C23.462 14.401 21.9262 12.8652 20.0237 12.8652ZM20.0237 17.4496C19.3934 17.4496 18.8776 16.9338 18.8776 16.3035C18.8776 15.6731 19.3934 15.1574 20.0237 15.1574C20.6541 15.1574 21.1698 15.6731 21.1698 16.3035C21.1698 16.9338 20.6541 17.4496 20.0237 17.4496Z"
					fill="black"
				/>
			</svg>
		),
	},
	{
		name: 'Sécurité',
		description:
			'Tous nos modèles sont équipés de pneus pleins, ainsi que d’accessoires de sécurité : casque, gilet de sécurité.',
		icon: LockClosedIcon,
	},
	{
		name: 'Services',
		description:
			'Notre service technique est à votre disposition pour tous problèmes liés à la trottinettes électriques.',
		icon: LightningBoltIcon,
	},
];

export function ThreeColumn() {
	return (
		<div className="py-12 bg-white">
			<div className=" mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="sr-only">A better way to send money.</h2>
				<dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
					{features.map((feature) => (
						<div key={feature.name}>
							<dt>
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-gradient-50 to-gradient-100 text-black">
									<feature.icon className="h-6 w-6" aria-hidden="true" />
								</div>
								<p className="mt-5 text-lg leading-6 font-medium text-gray-900">
									{feature.name}
								</p>
							</dt>
							<dd className="mt-2 text-base text-gray-500">
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
