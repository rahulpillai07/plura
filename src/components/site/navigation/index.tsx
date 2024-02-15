import { User } from "@clerk/nextjs/server";
import Image from "next/image";
type Props={
    user?:User|null
}
const Navigation = ({user}:Props) => {
    return ( 
        <div className="p-4 flex items-center justify-between relative">
            <aside className="flex items-center gap-2">
                <Image
                src={'./assets/plura-logo.svg'}
                width={40}
                height={40}
                alt="Logo" />
                <h1 className="text-xl font-bold">Plura.</h1>
            </aside>
            
        </div>
     );
}
 
export default Navigation;