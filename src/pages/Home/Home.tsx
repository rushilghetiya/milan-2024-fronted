import { useEffect, useMemo, useState } from "react";
import DayImgs from "../../DataList/dayImgs.json";
import { useTypewriter } from "react-simple-typewriter";
import { useTransition, animated, config } from "@react-spring/web";
import { LampContainer } from "@/components/ui/lamp";

function Home() {
  const imgs_name = useMemo(() => {
    return DayImgs.map((img) => img.name);
  }, []);
  const imgs_url = useMemo(() => {
    return DayImgs.map((img) => img.url);
  }, []);

  const [text, helper] = useTypewriter({
    words: imgs_name,
    loop: Infinity,
    typeSpeed: 90,
    deleteSpeed: 90,
    delaySpeed: 3000,
  });

  const { isType, isDelay } = helper;

  useEffect(() => {
    if (isType && !isDelay) {
      setIndex((i) => (i + 1) % imgs_name.length);
    }
  }, [isType, isDelay, imgs_name.length]);

  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <div>
      <section className="h-screen w-screen">
        {transitions((style, i) => {
          return (
            <animated.div
              className="bg"
              style={{
                ...style,
                backgroundImage: `url(${
                  imgs_url[(i + imgs_name.length - 1) % imgs_name.length]
                })`,
              }}
            >
              <div className="bg-black/50 w-screen h-screen absolute top-0 left-0" />
              <section className="absolute z-[3] bottom-20 right-0">
                <div className="text-white text-[15rem] text-right font-bold font-['Noto Sans Tamil','montserrat',sans-serif] w-screen pr-[30px]">
                  {text}
                  <h3 className="text-white text-[2rem] font-['montserrat'] font-bold text-right pr-[50px] mt-[-40px]">
                    <span className="text-[2.5rem]   ">14</span>th March -{" "}
                    <span className="text-[2.5rem]   ">17</span>th March, 2024
                  </h3>
                </div>
              </section>
            </animated.div>
          );
        })}
      </section>

      <section className="">

<LampContainer><h1>s</h1></LampContainer>

        <div>
          <h3>About SRM</h3>
          <p>
            SRM Institute of Science and Technology is a premier institution
            that has emerged as a cornerstone of cutting-edge science and
            computer technology education in India. A cradle of innovation and
            research, SRM IST is home to a thriving student body of 40,000 from
            various parts of India and across the globe, representing a tapestry
            of 63 countries. Since its inception in 1969, SRM IST has evolved
            significantly, gaining recognition for its commitment to academic
            excellence and state-of-the-art research facilities. SRM IST is not
            just a university; it is a beacon of progress, diversity, and
            academic prowess, shaping the next generation of scientists,
            engineers, and technologists poised to lead the global stage.
          </p>
        </div>
        <div>
          <h3>About Milan</h3>
          <p>
            The SRM Institute of Science and Technology’s Directorate of Student
            Affairs hosts Milan, a National level Cultural Festival. Milan is a
            four-day cultural fest which is a testament to the rich tapestry of
            talent we cultivate, featuring an array of cultural competitions
            that span the spectrum of music, dance, fashion, and the arts. This
            festival is not just a display of creativity but also a harmonious
            convergence of technology and tradition, where live concerts and DJ
            performances meet the zest of SRMIST's academic spirit. Our past
            festivals have seen an array of noted celebrities and artists, Kamal
            Hassan, Tamannah, Aditya Roy Kapoor, John Abraham, Vishal-Shekhar,
            Amit Trivedi, Nucleya, Vijay Devarakonda, Jonita Gandhi, Sruti
            Hassan and Nikhil D'Souza.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
