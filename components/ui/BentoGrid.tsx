"use client"

import Lottie from "react-lottie";
import { cn } from "../../util/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import animationData from "../../data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';
import dynamic from "next/dynamic";
import Image from "next/image";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('Test'); // Essayez avec un texte simple
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Réinitialisation de l'état après 2 secondes
    } catch (err) {
      console.error("Erreur lors de la copie : ", err); // Affiche l'erreur dans la console
    }
  };
  
  
  const animationOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)'
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
            src={img}
            alt="image"
            className={cn(imgClassName, "object-cover object-center")}
            width={500} // Ajuste selon ton besoin
            height={500} // Ajuste selon ton besoin
            layout="intrinsic"
          />
          
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
            src={spareImg}
            alt="spare image"
            className="object-cover object-center w-full h-full"
            width={500} // Ajuste selon ton besoin
            height={500} // Ajuste selon ton besoin
            layout="intrinsic"
          />
          
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}
      </div>
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        {id === 2 && "French, English, Hindi"}
        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {['Next.js', 'React.js', 'Typescript'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {['Python', 'Java', 'C++'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
        <div className="mt-5 relative">
          <div className="absolute z-40 w-full h-full">
            <Lottie options={animationOptions} />
          </div>
          <div>
            <MagicButton
              title={copied ? "Email copié !" : "Copiez mon adresse mail"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
      )}
    </div>
  </div>
)
}