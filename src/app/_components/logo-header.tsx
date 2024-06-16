import Image from "next/image";

import logo from '../../../public/isa_labs.png'

export function LogoHeader() {
    return <>
        <div className="flex flex-col items-center">
            <Image src={logo} alt={"Logo"} width={400} height={100}></Image>
            <p className="font-bold text-3xl pt-8">ISA LABs</p>
            <p className="pt-2 pb-6">Created by: <a href="https://isa.kresnayangasli.my.id" className="hover:text-blue-400">KresnaYangAsli</a> & <a href="https://isa.pengalilla.com" className="hover:text-blue-400">zeroX397</a></p>            
        </div>
    </>
}
