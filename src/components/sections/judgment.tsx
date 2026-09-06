"use client"

import { StandardSection } from "@/components/ui"
import { ArrowUpRight, Gavel } from "lucide-react"

const judgments = [
    {
        area: "Property Law",
        title: "Protection of Possession Rights",
        summary: "How courts assess possession, title documents, and equitable relief in property-related disputes.",
        label: "Key principle"
    },
    {
        area: "Constitutional Law",
        title: "Fair Hearing and Natural Justice",
        summary: "A decision affecting legal rights should follow a fair process and provide the affected party an opportunity to be heard.",
        label: "Legal insight"
    },
    {
        area: "Criminal Law",
        title: "Bail and Personal Liberty",
        summary: "Bail decisions balance the seriousness of allegations with liberty, investigation needs, and the facts of each matter.",
        label: "Court principle"
    }
]

export function Judgment() {
    return (
        <StandardSection
            id="judgment"
            badge="⚖️ Case Law"
            title="Judgments & Legal Principles"
            description="Selected legal principles explained in a simple and practical way"
        >
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-7">
                {judgments.map((judgment) => (
                    <article
                        key={judgment.title}
                        className="group rounded-2xl border border-border-primary bg-background-secondary p-5 shadow-[0_16px_35px_-18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary-500/60 hover:shadow-[0_24px_45px_-16px_rgba(0,0,0,0.5)] sm:p-6"
                    >
                        <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-500/15 text-secondary-600">
                                <Gavel className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">{judgment.area}</span>
                        </div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-600">{judgment.label}</p>
                        <h3 className="mb-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-secondary-500">
                            {judgment.title}
                        </h3>
                        <p className="text-sm leading-7 text-text-secondary sm:text-base">{judgment.summary}</p>
                        <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary-600">
                            Explore principle <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                    </article>
                ))}
            </div>
        </StandardSection>
    )
}
