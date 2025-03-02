// import { IoLogoWhatsapp } from "react-icons/io5";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import dogImg from "../../../public/hero-dog.webp"
import catImg from "../../../public/cat-hero.png"
import Image from "next/image"


export function Hero() {
    return (

        <section className="bg-[#009CA6] text-white relative overflow-hidden lg:h-[700px]">

            <div>
                <Image 
                    src={dogImg}
                    alt="Foto do cachorro"
                    fill
                    sizes="100vh"
                    priority
                    className="object-cover opacity-60 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
            </div>

            <div className="container mx-auto pt-10 pb-10 lg:pt-0 lg:pb-0 md:pb-0 px-4 relative h-[500px] md:h-[600px] lg:h-[700px]">

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[100%]">

                    <div className="space-y-6 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">Seu pet merece cuidado, carinho e atenção especial</h1>
                        <p className="lg:text-lg w-[70%]" data-aos="fade-right">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas</p>

                        
                        <a 
                            data-aos="fade-up"
                            data-aos-delay="500"
                            href={`https://wa.me/5521992117045?text=Olá vim pelo site e gostaria de mais informações`}
                            target="_blank"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >

                            {/* <IoLogoWhatsapp /> */}
                            <WhatsappLogo className="w-5 h-5"/>
                            Contato via WhatsApp
                        </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>

                            <div className="flex mt-4">
                                <div className="w-32">
                                    {/* <Image 
                                        src={catImg}
                                        alt="Foto do gato"
                                        quality={100}
                                        className="object-fill"
                                    /> */}
                                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat.png" alt="Cat" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="hidden md:none lg:flex h-full relative">
                        <Image 
                            src={dogImg}
                            alt="Foto do dog"
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 0vw, 100vh"
                            quality={100}
                            priority
                        />
                    </div>


                </article>
            </div>
            
        </section>
    )
}