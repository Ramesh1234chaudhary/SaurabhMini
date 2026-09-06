"use client"

import { StandardSection } from "@/components/ui"
import { ArrowUpRight, BookOpen } from "lucide-react"

const articles = [
    {
        category: "Civil Law",
        title: "Understanding Property Disputes and Legal Remedies",
        excerpt: "A practical overview of property rights, documentation, and the first steps to take when a dispute arises.",
        readTime: "5 min read"
    },
    {
        category: "Family Law",
        title: "What to Know Before Starting a Family Matter",
        excerpt: "Important considerations around documentation, communication, and choosing the right legal approach.",
        readTime: "4 min read"
    },
    {
        category: "Criminal Law",
        title: "Legal Essentials for Criminal Cases",
        excerpt: "Key defence strategies, bail procedures, and preventive legal practices for criminal matters.",
        readTime: "6 min read"
    }
]

export function Blog() {
    return (
        <StandardSection
            id="blog"
            badge="📚 Legal Insights"
            title="From the Blog"
            description="Clear, practical legal guidance for individuals, families, and criminal matters"
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                {articles.map((article) => (
                    <article
                        key={article.title}
                        className="group flex h-full flex-col rounded-2xl border border-border-primary bg-background-secondary p-5 shadow-[0_16px_35px_-18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary-500/60 hover:shadow-[0_24px_45px_-16px_rgba(0,0,0,0.5)] sm:p-6"
                    >
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <span className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-3 py-1 text-xs font-semibold text-secondary-600">
                                {article.category}
                            </span>
                            <BookOpen className="h-5 w-5 text-secondary-500" aria-hidden="true" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-secondary-500">
                            {article.title}
                        </h3>
                        <p className="flex-1 text-sm leading-7 text-text-secondary sm:text-base">
                            {article.excerpt}
                        </p>
                        <div className="mt-6 flex items-center justify-between border-t border-border-primary pt-4 text-sm">
                            <span className="text-text-muted">{article.readTime}</span>
                            <span className="inline-flex items-center gap-1 font-semibold text-secondary-600">
                                Read more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </StandardSection>
    )
}
