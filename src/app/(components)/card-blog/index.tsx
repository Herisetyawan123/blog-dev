'use client'
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CardBlogProps {
    className?: string,
    slug: string
}
 
const CardBlog: FC<CardBlogProps> = ({ className, slug }) => {
    const router = useRouter()

    const movePage = () => {
        router.push('/blog/'+slug)
    }
    return ( 
        <div className={`${className} cursor-pointer`} onClick={movePage}>
            <div className="relative h-72">
                <Image layout="fill" src="https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV4dCUyMGpzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="absolute" loading="lazy" alt="img-blog" />
                <div className="bg-[rgba(255, 255, 255, 0.5)] justify-between text-white flex items-center px-10 absolute w-full bottom-0 h-1/4 backdrop-blur-2xl">
                    <div>
                        <h1 className="font-semibold">Heri Setyawan</h1>
                        <span className="text-sm">20 Jun 2023</span>
                    </div>
                    <p className="font-bold">Programmer</p>
                </div>
            </div>
            <h2 className="text-xl my-5">Next Js Clean Architecture</h2>
            <p className="text-gray-500 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tempore harum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ipsum dignissimos.</p>
            <span className="font-semibold">
                Read post
            </span>
        </div>
     );
}
 
export default CardBlog;