import Image from 'next/image';
import React from 'react';

const steps = [
    {
        title: "Step 1:",
        heading: "Discover Opportunities",
        description:
            "We start with a deep analysis of your website, audience, and competitors to uncover hidden opportunities for growth.",
        align: "left",
    },
    {
        title: "Step 2:",
        heading: "Build a Custom Plan",
        description: "We create a strategy tailored to your goals—whether it’s dominating search rankings, driving qualified leads, or boosting ROI.",
        align: "right",
    },
    {
        title: "Step 3:",
        heading: "Execute and Optimise",
        description:
            "We implement your plan, monitor progress, and refine strategies to ensure consistent growth.",
        align: "left",
    },
];

const StepsSection = () => {
    return (
        <section className="relative bg-primary text-black">
            <div className="flex flex-col px-4 md:px-12 gap-10 py-10 md:py-20">
                {steps.map((step, index) => {
                    const isRight = step.align === 'right';
                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${isRight ? 'md:flex-row-reverse' : ''
                                } items-start md:items-center justify-between gap-6 md:gap-10`}
                        >
                            <div className={`text-left max-w-full md:max-w-[700px] ${isRight ? 'md:text-right' : ''}`}>
                                <h3 className="text-4xl md:text-8xl font-bold font-oswald">
                                    <span className="text-black">{step.title}</span>{' '}
                                    <span className="text-secondary">{step.heading}</span>
                                </h3>
                            </div>
                            <div className={`text-left w-full md:w-1/4 ${isRight ? 'md:text-left' : 'md:text-right'}`}>
                                <p className="text-md md:text-lg font-oswald text-secondary font-light">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bg-black text-white relative flex items-center justify-center">
                <h1 className="text-[40vw] leading-none font-bold">ZENT</h1>

                <div className="hidden md:absolute md:flex inset-0 items-center justify-center">
                    <Image
                        src='/images/zentro-over-image.jpeg'
                        alt='zentro-over-image'
                        width={1000}
                        height={1000}
                        className="w-2xs h-48 object-cover rounded-lg"
                    />
                </div>
            </div>

        </section>
    );
};

export default StepsSection;
