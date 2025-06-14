"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import MilestoneSlider from '@/components/MileStoneSlider'
import { useRouter } from 'next/navigation'

type genderProps = "male" | "female" | null;


const Onboarding = () => {

    const [selectedGender, setSelectedGender] = useState<genderProps>(null);
    const [currentStep, setCurrentStep] = useState(1);
    
    const router = useRouter();

    const handleGender = (gender: genderProps) => {
        setSelectedGender(gender);
    }

    const handleNextStep = () => {
        if (selectedGender) {
            setCurrentStep((prev) => prev + 1);
        }
        
        if(currentStep === 4) {
            router.push("/dashboard");
        }
    }
    return (
        <section className={cn("bg-soft-aqua min-h-screen flex flex-col items-center pt-12")}>
            <div className={cn("flex items-center gap-3 mb-4 justify-center p-4 md:p-8 lg:px-20 overflow-hidden")}>
                <Image src="/logo-nobg.png" width={40} height={40} alt="Diet M8 logo" className={cn("object-contain")} />
                <h1 className={cn("text-5xl font-black text-teal-primary tracking-wide")}>
                    DIET M8
                </h1>
            </div>
            {
                currentStep === 1 && (
                    <>
                        <div className={cn("flex bg-white rounded-3xl")}>
                            <div className={cn("bg-teal-primary px-14 py-32 rounded-3xl flex flex-col gap-2 z-10")}>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>WHAT</h1>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>IS YOUR</h1>
                                <h1 className={cn("font-black text-7xl text-white tracking-tight")}>GENDER ?</h1>
                            </div>
                            <div className={cn("bg-white rounded-3xl px-16 relative")}>
                                <div className={cn("flex flex-col gap-6 px-12 py-16")}>
                                    <div
                                        className={cn(
                                            "flex flex-col items-center gap-2 cursor-pointer transition-all duration-300",
                                            selectedGender === 'male' && "scale-105"
                                        )}
                                        onClick={() => handleGender("male")}
                                    >
                                        <div className={cn(
                                            "rounded-full p-2 overflow-hidden transition-all duration-300 z-10",
                                            selectedGender === 'male' && "bg-teal-primary"
                                        )}>
                                            <Image src="/onboarding/men.png" height={120} width={120} alt='men' className="rounded-full" />
                                        </div>
                                        <h2 className={cn(
                                            "font-semibold transition-colors",
                                            selectedGender === 'male' && "text-teal-primary"
                                        )}>MALE</h2>
                                    </div>
                                    <div
                                        className={cn(
                                            "flex flex-col items-center gap-2 cursor-pointer transition-all duration-300",
                                            selectedGender === 'female' && "scale-105"
                                        )}
                                        onClick={() => handleGender("female")}
                                    >
                                        <div className={cn(
                                            "rounded-full p-2 overflow-hidden transition-all duration-300",
                                            selectedGender === 'female' && "bg-teal-primary"
                                        )}>
                                            <Image src="/onboarding/female.png" height={120} width={120} alt='female' className="rounded-full" />
                                        </div>
                                        <h2 className={cn(
                                            "font-semibold transition-colors",
                                            selectedGender === 'female' && "text-teal-primary"
                                        )}>FEMALE</h2>
                                    </div>
                                </div>
                                <button
                                    className={cn(
                                        "bg-teal-primary text-white p-2 rounded-full font-semibold transition-all absolute bottom-4 right-8 w-12 h-12 flex items-center justify-center hover:scale-105 hover:shadow-md",
                                        selectedGender ? "cursor-pointer opacity-100" : "opacity-60 cursor-not-allowed"
                                    )}
                                    onClick={handleNextStep}
                                    disabled={!selectedGender}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
            {
                currentStep === 2 && (
                    <>
                        <div className={cn("flex bg-white rounded-3xl")}>
                            <div className={cn("bg-teal-primary px-14 py-32 rounded-3xl flex flex-col gap-2 z-10")}>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>WHAT</h1>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>IS YOUR</h1>
                                <h1 className={cn("font-black text-7xl text-white tracking-tight")}>AGE ?</h1>
                            </div>
                            <div className={cn("bg-white rounded-3xl px-16 relative")}>
                                <div className={cn("flex justify-center items-center px-12")}>
                                    <MilestoneSlider unit={"YRS"} initialValue={20} />
                                </div>
                                <button
                                    className={cn(
                                        "bg-teal-primary text-white p-2 rounded-full font-semibold transition-all absolute bottom-4 right-8 w-12 h-12 flex items-center justify-center hover:scale-105 hover:shadow-md",
                                        selectedGender ? "cursor-pointer opacity-100" : "opacity-60 cursor-not-allowed"
                                    )}
                                    onClick={handleNextStep}
                                    disabled={!selectedGender}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
            {
                currentStep === 3 && (
                    <>
                        <div className={cn("flex bg-white rounded-3xl")}>
                            <div className={cn("bg-teal-primary px-14 py-32 rounded-3xl flex flex-col gap-2 z-10")}>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>WHAT</h1>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>IS YOUR</h1>
                                <h1 className={cn("font-black text-7xl text-white tracking-tight")}>WEIGHT ?</h1>
                            </div>
                            <div className={cn("bg-white rounded-3xl px-16 relative")}>
                                <div className={cn("flex justify-center items-center px-12")}>
                                    <MilestoneSlider unit={"KG"} initialValue={50} />
                                </div>
                                <button
                                    className={cn(
                                        "bg-teal-primary text-white p-2 rounded-full font-semibold transition-all absolute bottom-4 right-8 w-12 h-12 flex items-center justify-center hover:scale-105 hover:shadow-md",
                                        selectedGender ? "cursor-pointer opacity-100" : "opacity-60 cursor-not-allowed"
                                    )}
                                    disabled={!selectedGender}
                                    onClick={handleNextStep}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
            {
                currentStep === 4 && (
                    <>
                        <div className={cn("flex bg-white rounded-3xl")}>
                            <div className={cn("bg-teal-primary px-14 py-32 rounded-3xl flex flex-col gap-2 z-10")}>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>WHAT</h1>
                                <h1 className={cn("font-black text-7xl text-[#037A7A] tracking-tight")}>IS YOUR</h1>
                                <h1 className={cn("font-black text-7xl text-white tracking-tight")}>HEIGHT ?</h1>
                            </div>
                            <div className={cn("bg-white rounded-3xl px-16 relative")}>
                                <div className={cn("flex justify-center items-center px-12")}>
                                    <MilestoneSlider unit={"CM"} initialValue={170} />
                                </div>
                                <button
                                    className={cn(
                                        "bg-teal-primary text-white p-2 rounded-full font-semibold transition-all absolute bottom-4 right-8 w-12 h-12 flex items-center justify-center hover:scale-105 hover:shadow-md",
                                        selectedGender ? "cursor-pointer opacity-100" : "opacity-60 cursor-not-allowed"
                                    )}
                                    disabled={!selectedGender}
                                    onClick={handleNextStep}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default Onboarding