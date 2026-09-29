import { TESTIMONIALS } from "@/data/courses"
import Image from "next/image"

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-14 xs:py-16 sm:py-20 lg:py-28 relative overflow-hidden">
            {/* content */}
            <div className="container z-20 relative flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* heading */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-16">
                    <h2 className="text-2xl 2xs:text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight lg:tracking-[-0.44px] leading-tight sm:leading-snug lg:leading-[52.8px] max-w-xl text-gray-900">
                        Discover What Our Community Is Saying
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-satoshi text-[#82868E] max-w-xl leading-relaxed sm:leading-7">
                        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                {/* testimonial cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-7 lg:p-8 flex flex-col items-start gap-3.5 sm:gap-4 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-lime hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative size-12 xs:size-14 sm:size-16 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                                    {testimonial.name}
                                </h3>
                                <p className="text-xs sm:text-sm font-medium text-[#003BE2] mt-0.5">
                                    {testimonial.role}
                                </p>
                            </div>
                            <p className="text-[#82868E] text-xs sm:text-sm lg:text-base leading-relaxed mt-1 sm:mt-2 font-satoshi">
                                &ldquo;{testimonial.content.replace(/^["“]|["”]$/g, '')}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* radial lime gradient - Top Center/Right behind paragraph */}
            <div className="absolute -top-32 left-[32%] size-140 sm:size-200 lg:size-260 rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.35)_0%,rgba(203,252,1,0.08)_53%,rgba(203,252,1,0.02)_75%,transparent_100%)] blur-[25px] pointer-events-none" />

            {/* radial lime gradient - Far Right vertical stretch */}
            <div className="absolute top-[-10%] right-[-15%] size-160 sm:size-220 lg:size-290 rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.32)_0%,rgba(203,252,1,0.07)_53%,rgba(203,252,1,0.02)_75%,transparent_100%)] blur-[25px] pointer-events-none" />

            {/* radial blue gradient - Bottom Left corner */}
            <div className="absolute bottom-[-30%] left-[-15%] size-160 sm:size-220 lg:size-290 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.18)_0%,rgba(0,59,226,0.05)_53%,rgba(0,59,226,0.01)_75%,rgba(0,59,226,0)_100%)] blur-[25px] pointer-events-none" />
        </section>
    )
}

export default Testimonials