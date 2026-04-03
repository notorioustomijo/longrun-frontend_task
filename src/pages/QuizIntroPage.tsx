import infoIcon from '../assets/info.svg';
import Stepper from '../components/Stepper';

interface InfoDetail {
    mainText: string
    subText: string
}

const infoDetails:InfoDetail[] = [
    {
        mainText: "Takes 7 minutes",
        subText: " short, focused, no fluff"
    },
    {
        mainText: "Personalized challenges",
        subText: " designed around your answers"
    },
    {
        mainText: "Action, not analysis",
        subText: " clear next steps, not just insights"
    }
]

export default function QuizIntroPage() {
    return (
        <>
            <title>LongRun HQ Assessment</title>
            <meta 
                name="description"
                content="Assessment of where you currently are in your life, your blockers and your goals."
            />
            <Stepper
                step={0} 
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
                    <p className="
                        text-sm
                        text-[#049BE5]
                    ">
                        ASSESSMENT QUIZ
                    </p>
                    <h1 className="
                        text-white
                        text-[2rem]
                        leading-[1.2]
                        md:text-4xl
                        font-bold
                    ">
                        Before we begin...
                    </h1>
                    <p className="
                        text-white/50
                        text-base
                        md:text-lg
                        leading-snug
                    ">
                        Let's understand where you are, what's blocking you, and 
                        what matters most — so we can build a path that actually moves you forward.
                    </p>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-4
                    p-8
                    rounded-[1.5625rem]
                    border
                    border-[#33415E]
                    bg-[rgba(51,65,94,0.3)]
                ">
                    {infoDetails.map((info => (
                        <div className="
                            flex
                            items-center
                            gap-4
                        ">
                            <img src={infoIcon} />
                            <p className="
                                text-sm
                                text-white/50
                            ">
                                <span className="text-white">{info.mainText} —</span> {info.subText}
                            </p>
                        </div>
                    )))}
                </div>

                <div className="
                    flex
                    flex-col
                    gap-2
                ">
                    <a 
                        href="/task2"
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