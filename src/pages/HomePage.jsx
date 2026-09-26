import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";

export default function HomePage() {
    return(
        <main className=" w-full flex flex-col ">
            <Hero/>
            <AboutSection/>
        </main>
    )
}
