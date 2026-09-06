"use client"

import { cn } from "@/lib/core"
import * as React from "react"

type CarouselOptions = {
    align?: "start" | "center" | "end"
    loop?: boolean
}

type CarouselContextValue = {
    scrollPrev: () => void
    scrollNext: () => void
    selectedIndex: number
    canScrollPrev: boolean
    canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)
    if (!context) throw new Error("Carousel controls must be used inside Carousel")
    return context
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    opts?: CarouselOptions
    autoplay?: number
}

export function Carousel({ opts, autoplay, className, children, ...props }: CarouselProps) {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [itemCount, setItemCount] = React.useState(0)
    const loop = opts?.loop ?? true

    const scrollTo = React.useCallback((index: number) => {
        if (!itemCount) return
        setSelectedIndex(loop ? (index + itemCount) % itemCount : Math.max(0, Math.min(index, itemCount - 1)))
    }, [itemCount, loop])

    const scrollPrev = React.useCallback(() => scrollTo(selectedIndex - 1), [scrollTo, selectedIndex])
    const scrollNext = React.useCallback(() => scrollTo(selectedIndex + 1), [scrollTo, selectedIndex])

    React.useEffect(() => {
        if (!autoplay || itemCount < 2) return
        const timer = window.setInterval(scrollNext, autoplay)
        return () => window.clearInterval(timer)
    }, [autoplay, itemCount, scrollNext])

    return (
        <CarouselContext.Provider value={{ scrollPrev, scrollNext, selectedIndex, canScrollPrev: loop || selectedIndex > 0, canScrollNext: loop || selectedIndex < itemCount - 1 }}>
            <div className={cn("relative", className)} {...props}>
                {React.Children.map(children, (child) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, { setItemCount } as { setItemCount: React.Dispatch<React.SetStateAction<number>> })
                        : child
                )}
            </div>
        </CarouselContext.Provider>
    )
}

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
    setItemCount?: React.Dispatch<React.SetStateAction<number>>
}

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(({ className, children, setItemCount, ...props }, forwardedRef) => {
    const { selectedIndex } = useCarousel()
    const trackRef = React.useRef<HTMLDivElement>(null)
    const [itemWidth, setItemWidth] = React.useState(0)

    React.useImperativeHandle(forwardedRef, () => trackRef.current as HTMLDivElement)

    React.useLayoutEffect(() => {
        setItemCount?.(React.Children.count(children))
        const measure = () => setItemWidth(trackRef.current?.firstElementChild?.getBoundingClientRect().width ?? 0)
        measure()
        const observer = new ResizeObserver(measure)
        if (trackRef.current) observer.observe(trackRef.current)
        return () => observer.disconnect()
    }, [children, setItemCount])

    return (
        <div className="overflow-hidden">
            <div ref={trackRef} className={cn("flex touch-pan-y transition-transform duration-500 ease-out", className)} style={{ transform: `translate3d(-${selectedIndex * itemWidth}px, 0, 0)` }} {...props}>
                {children}
            </div>
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
))
CarouselItem.displayName = "CarouselItem"

export function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { scrollPrev, canScrollPrev } = useCarousel()
    return <button type="button" aria-label="Previous slide" disabled={!canScrollPrev} onClick={scrollPrev} className={cn("absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-primary bg-background-secondary text-xl text-text-primary shadow-lg transition-colors hover:border-secondary-500 hover:text-secondary-500 disabled:pointer-events-none disabled:opacity-30", className)} {...props}>&#8592;</button>
}

export function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { scrollNext, canScrollNext } = useCarousel()
    return <button type="button" aria-label="Next slide" disabled={!canScrollNext} onClick={scrollNext} className={cn("absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-primary bg-background-secondary text-xl text-text-primary shadow-lg transition-colors hover:border-secondary-500 hover:text-secondary-500 disabled:pointer-events-none disabled:opacity-30", className)} {...props}>&#8594;</button>
}