interface StepperProps {
    step: number
}

const TOTAL_STEPS = 13;

export default function Stepper({ step }: StepperProps) {

    const progress = (step / TOTAL_STEPS) * 100;

    return (
        <div className="
            w-full
            bg-[#2D3143]
            h-[10px]
            absolute
            top-0
        ">
            <div
                className="
                    h-full
                    transition-[width] duration-400 ease-in-out
                "
                style={{
                    width: `${progress}%`,
                    background: "linear-gradient(270deg, #049BE5 0%, #049BE5 100%"
                }}
            ></div>
        </div>
    )
}