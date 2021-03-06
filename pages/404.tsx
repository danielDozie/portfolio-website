import Image from 'next/image';
import React from 'react'

const Index = () => {
    return (
        <>
            <div className="flex z-20 items-center mt-40 mb-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center relative py-4 ">

                    <div className="flex flex-col">
                        <p className="font-mitr text-3xl my-6 text-center dark:text-white ">
                        Page not found
                        </p>
                        <Image className=" flex " src={'/assets/images/404_2.svg'} height={250} width={150} alt="404"/>                     
                        <h2 className="max-w-3xl mt-4 font-archivo text-4xl md:text-6xl font-bold mx-auto text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            Ooops! The Page you seek is not around here chief
                        </h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index;
