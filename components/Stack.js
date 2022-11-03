import Image from 'next/image';

const stack = [
    {
        url: '/images/html5.svg',
        name: 'html5',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/css3.svg',
        name: 'css3',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/square-js.svg',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/react.svg',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/n-solid.svg',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/redux.png',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/tailwind-css.svg',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
    {
        url: '/images/Typescript_logo_2020.svg',
        name: 'javascriptES6',
        description: 'html is used to develop the structure of the front end'
    },
]

export default function Stack() {
    return (
        <div className="w-10/12 py-6 px-3 mx-auto flex flex-col justify-center gap-2 rounded-md bg-blue-700  ">
            <h2 className="text-center text-xl font-medium text-white ">Stack For Front End</h2>
        <div className="w-full grid grid-cols-3 gap-4">
            {
                stack.map(element => (
                    <div key={element.url} className="col-span-1 flex flex-row gap-2 rounded-md bg-white shadow-lg shadow-black/20">
                        <div className="p-1">
                            <Image src={element.url} alt="image" width={20} height={20} layout="fill" objectFit="cover" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="text-blue-700 font-medium">{element.name}</p>
                            <p className="text-gray-700 font-medium">{element.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}