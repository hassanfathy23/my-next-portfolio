import { BoltIcon, CurrencyDollarIcon, SparklesIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'High Quality',
    description:
      'using the best tech stack for developing a full stack website',
    icon: SparklesIcon,
  },
  {
    name: 'responsive website',
    description: 'web app compatible with all screen types from window screen to tablet to phone',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'flexible payment methods',
    description:'i provide various payments plans to be flexible with your needs',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'easy reach',
    description: 'i also will give you my phone number and email so you can reach me whenever you want, and i am also open for online meetings if preferred',
    icon: BoltIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-12 rounded-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to invest your money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
             what can you get for 10$? you can get a starbucks, high quality latte, any foot long sub from subway and also you can get a website with all the following advantages
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
