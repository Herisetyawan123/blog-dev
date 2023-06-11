import Image from "next/legacy/image";

export default function About(){
    return (
        <main className="flex content justify-center">

            <div className="w-[40%] relative h-[75vh]">
                <Image layout="fill" src="https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV4dCUyMGpzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="absolute" loading="lazy" alt="img-blog" />
                <div className="bg-[rgba(255, 255, 255, 0.5)] justify-between text-white flex items-center px-10 absolute w-full bottom-0 h-1/4 backdrop-blur-2xl">
                    <div>
                        <h1 className="font-semibold">Heri Setyawan</h1>
                        <span className="text-sm">Developer</span>
                    </div>
                    <p className="font-bold">Programmer</p>
                </div>
            </div>
            <div className="w-[60%] px-10 py-16">
                <h1 className="text-6xl font-bold mt-10">Hello Everyone</h1>
                
                <p className="mt-10 text-lg text-gray-800">
                    website ini dibuat dengan tujuan membagikan ilmu atau bacaan yang mungkin anda sedang cari sekarang, dan sebagai tempat catatan pribadi bagi author yang menulis di blog ini
                </p>
            </div>
        </main>
    )
}