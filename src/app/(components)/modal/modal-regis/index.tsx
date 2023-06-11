import { useMemo, useState } from "react";
import Modal from "../modal"

export default function ModalRegister({ show, close }: { show: boolean, close: () => void }){
    
    if(!show){
        return;
    }


    return (
        <Modal>
            <div className="absolute right-5">
                <span className="font-bold text-xl cursor-pointer" onClick={close}>X</span>
            </div>
            <div className="flex flex-col w-[460px] transition-all duration-700">
                <h1 className="text-center text-xl font-semibold">Daftar Author disini</h1>
                <form className="mt-10">
                    <div className="mb-3 flex flex-col gap-y-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email@mail.com" className="px-3 py-2 rounded border focus:outline-2" />
                    </div>
                    <div className="mb-3 flex flex-col gap-y-4">
                        <label htmlFor="password">password</label>
                        <input type="password" className="px-3 py-2 rounded border focus:outline-2" />
                    </div>
                    <div className="mb-3 flex flex-col gap-y-4">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="px-3 py-2 rounded border focus:outline-2" />
                    </div>

                    <button className="py-2 px-6 bg-black text-white font-semibold rounded-md">Daftar</button>
                </form>
            </div>
        </Modal>
    )
}