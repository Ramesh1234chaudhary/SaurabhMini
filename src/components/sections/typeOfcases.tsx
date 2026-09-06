"use client"

import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, ServiceIcon, StandardSection } from "@/components/ui"
import { LAWYER_CONFIG } from "@/config"

export function TypeOfcases() {
    const caseTypes = LAWYER_CONFIG.TypeOfcases ?? []

    return (
        <StandardSection
            id="typeofCases"
            badge="⚖️ Types of Cases"
            title="Types of Cases"
            description="Legal representation tailored to the specific needs of every case"
        >
            <Carousel opts={{ align: "start", loop: true }} autoplay={3000} className="mx-auto w-full max-w-6xl px-10 sm:px-12">
                <CarouselContent className="-ml-4">
                    {caseTypes.map((caseType) => (
                        <CarouselItem key={caseType.id} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                            <Card className="rounded-3xl border-border-primary bg-background-secondary shadow-[0_18px_35px_-14px_rgba(0,0,0,0.45),0_8px_18px_-10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-14px_rgba(0,0,0,0.58),0_12px_24px_-12px_rgba(0,0,0,0.3)]">
                                <CardContent className="flex flex-col p-5 sm:p-6">
                                    <ServiceIcon icon={caseType.icon} className="mb-4" />
                                    <h3 className="mb-2 text-lg font-semibold text-text-primary sm:text-xl">{caseType.title}</h3>
                                    <p className="mb-4 text-sm text-text-secondary sm:text-base">{caseType.description}</p>
                                    <ul className="space-y-2 pr-1 sm:space-y-3">
                                        {caseType.features.map((feature) => (
                                            <li key={feature} className="service-feature-item">
                                                <div className="service-feature-bullet" />
                                                <span className="text-xs sm:text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </StandardSection>
    )
}