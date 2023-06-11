import Link from "next/link";
import { FC } from "react";

interface ButtonTextProps {
    children: React.ReactNode,
    to: string,
}
 
const ButtonText: FC<ButtonTextProps> = ({ children, to }) => {
    return (  
        <Link href={to} className="font-semibold">
            {children}
        </Link>
    );
}
 
export default ButtonText;