import Link from "next/link";
import DropdownComponent from "./Dropdown";
import DropdownButton from "./DropDownTwo";


const SliderComponent = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-8 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="md:text-5xl text-3xl font-bold leadi sm:text-6xl dark:text-gray-900">Empower Your Imagination: Unleash Custom Creations with AMT-Build</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 dark:text-gray-900">Design Your Dream PC: Personalize every detail and unleash the power of custom-built perfection with our PC Builder App.Craft Your Perfect Rig: Explore limitless combinations, assemble with precision, and experience computing at its finest.Build with Confidence: Create a PC tailored to your needs, expertise, and unique style using our intuitive PC Builder App.Unleash Your Creativity: Handpick top-notch components and elevate your computing experience with ease and precision.</p>
                        <div className="flex flex-wrap items-center justify-center">
                            <Link href='' type="button" className="px-8 py-3 m-2 text-lg border rounded-xl border-blue-600 hover:bg-blue-600 hover:text-white">Pc Builder</Link>
                            <DropdownButton></DropdownButton>
                        </div>
                    </div>
                </div>
                <img src="https://i.ibb.co/XscYSGR/ezgif-com-gif-maker.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default SliderComponent;
