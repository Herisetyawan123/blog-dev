import Image from "next/legacy/image";
import Link from "next/link";
import CardHorizon from "../(components)/card-horizon";

function page() {
    return ( 
        <main className="content mt-5">
            <h1 className="text-4xl font-bold">Welcome to my blog</h1>
            <div className="flex mt-10">
                <div className="post w-[80%]">
                    {/* card  */}
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                    <CardHorizon />
                </div>
                <div className="side w-[20%]">
                    <div className="border max-h-fit px-10 py-5 rounded-lg border-black flex flex-col">
                        <h4 className="text-lg font-semibold">Pilih Category</h4>
                        <div className="mt-5 flex flex-row gap-x-5">
                            <input type="checkbox" />
                            <label>Technology</label>
                        </div>
                        <div className="flex flex-row gap-x-5">
                            <input type="checkbox" />
                            <label>Programming</label>
                        </div>
                        <div className="flex flex-row gap-x-5">
                            <input type="checkbox" />
                            <label>Motivation</label>
                        </div>
                        <div className="flex flex-row gap-x-5">
                            <input type="checkbox" />
                            <label>Tips & Trick</label>
                        </div>
                    
                    </div>
                </div>
            </div>
        </main>
     );
}

export default page;