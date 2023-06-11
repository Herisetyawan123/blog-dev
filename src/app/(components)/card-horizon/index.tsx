import Image from "next/legacy/image";
import Link from "next/link";

export default function CardHorizon() {
    return (
        <Link href={'/blog/saasd'}>
            <div className="flex mb-5 items-center">
                <div className="w-[40%] relative h-56">
                    <Image layout="fill" src="https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV4dCUyMGpzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="absolute" loading="lazy" alt="img-blog" />
                    <div className="bg-[rgba(255, 255, 255, 0.5)] justify-between text-white flex items-center px-10 absolute w-full bottom-0 h-1/4 backdrop-blur-2xl">
                        <div>
                            <h1 className="font-semibold">Heri Setyawan</h1>
                            <span className="text-sm">20 Jun 2023</span>
                        </div>
                        <p className="font-bold">Programmer</p>
                    </div>
                </div>
                <div className="w-[60%] p-10">
                    <h2 className="font-bold text-2xl">CRUD LARAVEL WITH BREEZE</h2>
                    <p className="text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus excepturi, odio, vel voluptatibus sequi illo culpa nemo nam adipisci voluptates repellendus recusandae possimus. Corporis dolores voluptatum, repellendus suscipit odit similique!</p>
                </div>
            </div>
        </Link>
    )
}