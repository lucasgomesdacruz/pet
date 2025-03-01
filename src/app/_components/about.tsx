import Image from "next/image";

import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import about3Img from "../../../public/aboutSimple.png"
import about4Img from "../../../public/gatoabout.jpg"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <main className="py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="fade-up-right" data-aos-delay="500">
                        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-[#009CA6]">
                            <Image 
                                src={about3Img}
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-lg bg-[#009CA6]">
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png" alt="Cat Face" width="100%" height="100%" />
                        </div>
                    </div>
                    
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="500">
                        <h2 className="text-4xl font-bold">SOBRE</h2>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tempora ad unde adipisci quis fugiat est atque minus ab quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam maxime asperiores, dolorem laudantium nesciunt dolores provident tenetur. Nam, eligendi eveniet voluptates vero nulla sed reprehenderit eos, alias rem temporibus vel magni. Accusamus dolor nam incidunt consectetur aperiam inventore quos.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Qualidade é a nossa prioridade
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a 
                                href={`https://wa.me/5521992117045?text=Olá vim pelo site e gostaria de mais informações`}
                                target="_blank"
                                className="bg-[#009CA6] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato via WhatsApp
                            </a>

                            <a 
                                href="#"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da loja
                            </a>
                        </div>

                        

                    </div>

                </div>

            </div>
        </main>
    )
}