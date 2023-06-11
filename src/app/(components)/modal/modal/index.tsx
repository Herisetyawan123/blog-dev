'use client'
import { MouseEventHandler, ReactNode, useEffect } from "react";

export default function Modal({children}: { children: ReactNode }){

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    },[])

    return (
        <div 
            className="fixed z-10 h-[100vh] w-[100vw] backdrop-blur-sm flex justify-center items-center top-[50%] left-[50%] tranform" 
            style={{
                background: 'rgba(0, 0, 0, 0.1)',
                transform: 'translate(-50%, -50%)',
            }
        }>
            <div className="p-5 border bg-white rounded-md relative">
                {children}            
            </div>
        </div>
    )
}