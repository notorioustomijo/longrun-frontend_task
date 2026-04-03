import Stepper from '../components/Stepper';

export default function NinthStepPage() {
    return (
        <>
            <title>Halfway Through! - LongRun HQ Assessment</title>
            <meta 
                name="description"
                content="Halfway Through LongRun HQ Assessment"
            />
            <Stepper 
                step={9}
            />
            <section className="
                flex
                flex-col
                items-center
                gap-10
                md:max-w-[40rem]
            ">
                <div className="
                    flex
                    flex-col
                    items-center
                    text-center
                    gap-3
                ">
                    <p className="text-sm text-[#049BE5]">9 OF 13 COMPLETE</p>
                    <h1 className="
                        text-white
                        text-[2rem]
                        leading-[1.2]
                        md:text-4xl
                        font-bold
                    ">
                        You're halfway through!
                    </h1>
                    <p className="
                        text-white/50
                        text-base
                        md:text-lg
                        leading-snug
                    ">
                        Nice momentum. The next few questions dial in your personalized 
                        path — what drives you, and what gets in the way.
                    </p>
                </div>
                <div className="
                    flex
                    gap-0
                    rounded-[1.5625rem]
                    border
                    border-[#33415E]
                    bg-[rgba(51,65,94,0.3)]
                ">
                    <div className="
                        w-[50%]
                        flex
                        flex-col
                        items-center
                        p-8
                        gap-1
                        border-r
                        border-[#33415E]
                    ">
                        <h2 className="
                            text-white
                            text-[1.75rem]
                            font-bold
                        ">9</h2>
                        <p className="text-white/50 text-base">ANSWERED</p>
                    </div>
                    <div className="
                        w-[50%]
                        flex
                        flex-col
                        items-center
                        p-8
                        gap-1
                    ">
                        <h2 className="
                            text-[#049BE5]
                            text-[1.75rem]
                            font-bold
                        ">4</h2>
                        <p className="text-white/50 text-base">REMAINING</p>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-2
                ">
                    <a 
                        href="/"
                        className="
                            w-[20.625rem]
                            rounded-xl
                            py-2
                            px-8
                            text-center
                            text-white
                            text-lg
                            font-medium
                            no-underline
                            bg-[#049BE5]
                        "
                    >
                        Next
                    </a>
                    <a 
                        href="/"
                        className="
                            w-[20.625rem]
                            rounded-xl
                            py-2
                            px-8
                            text-center
                            text-white
                            text-lg
                            font-medium
                            no-underline
                            bg-transparent
                        "
                    >
                        Back
                    </a>
                </div>
            </section>
        </>
    )
}