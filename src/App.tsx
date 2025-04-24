import "./index.css";
import AnimationBg from "./Components/animationbg";
import SpotlightCard from "./Components/spotlightcards";
import sos from "./assets/works/save-ur-oshi!!!.png";
import todo from "./assets/works/to-do-today.png";
import siapo from "./assets/works/siaporabain.png";
import ngekost from "./assets/works/ngekost.png";
import limagirary from "./assets/works/logo.png";
import vaksin from "./assets/works/vaksin.jpg";

function App() {
  return (
    <>
      <div className="bg-base-100">
        <div className="mockup-window min-h-screen bg-base-200">
          <div className="bg-base-300 w-full flex-col flex flex-grow justify-center items-center-safe p-10">
            <div className="w-full flex flex-col justify-center p-2 rounded-l z-2 md:w-3/4 rounded-3xl">
              <SpotlightCard
                className="custom-spotlight-card rounded-xl mb-2 mt-2 md:mb-4"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                {/* Hi */}
                <div className="w-full bg-base-100 rounded-box flex flex-row text-3xl font-bold justify-center items-center p-4">
                  <p className="hi">👋</p>
                  <p>Hi Comrades</p>
                </div>
              </SpotlightCard>
              {/* About and Careers */}
              <div className="w-full flex flex-col mb-2 justify-start md:flex-row">
                <div className="w-full md:w-3/5">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg h-full mb-2 md:mr-2"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    {/* About */}
                    <div className="hero bg-base-100 h-full rounded-box ">
                      <div className="hero-content flex-col h-full ">
                        <h1 className="text-3xl font-bold">About</h1>
                        <p className="py-6">
                          My name is Muhammad Ghufron Khaical Alfaris. Damn,
                          it's a very very long name, so you can call me Haikal.
                          I have the skills that are suitable to be called a
                          full stack developer, especially junior. I can sink
                          all day analyzing and finding the best way to solve
                          problems, designing and analyzing requirements,
                          designing ERD and UI UX, programming the code and
                          until deploying and maintaining the code. maybe one
                          thing that is lacking, is still lacking in quality
                          control but I will continue to learn.
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="w-full md:w-2/5">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    {/* Careers */}
                    <ul className="list bg-base-100 rounded-box shadow-md h-full">
                      <li className="p-4 pb-2 text-lg tracking-wide flex flex-row md:text-2xl">
                        Careers
                      </li>
                      <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          01
                        </div>
                        <div>
                          <div>Staff Programmer</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            March 2022 - now | RSUD Dr. H. Moh. Rabain
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          02
                        </div>
                        <div>
                          <div>Staff of Design Department</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            December 2021 - January 2023 | Baceday Media
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          03
                        </div>
                        <div>
                          <div>Freelance Webflow Developer</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            May 2022 - December 2022 | Kita Lulus
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">
                          04
                        </div>
                        <div>
                          <div>Freelance UI Designer</div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            July 2022 - September 2022 | Jannah Firdaus Tour and
                            Travel
                          </div>
                        </div>
                      </li>
                    </ul>
                  </SpotlightCard>
                </div>
              </div>
              {/* Other Side and Knowledge Base */}
              <div className="w-full flex flex-col mb-2 md:flex-row">
                <div className="w-full md:w-1/2">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg mb-2 h-full md:mr-2"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    {/* Other Side */}
                    <ul className="list bg-base-100 rounded-box shadow-md h-full">
                      <li className="p-4 pb-2 text-lg tracking-wide flex flex-row md:text-2xl">
                        The Other Side
                      </li>
                      <li className="list-row">
                        <div>
                          <p>▶️</p>
                        </div>
                        <div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Love to writing 👉{" "}
                            <a
                              target="_blank"
                              href="https://www.baceday.com/2022/05/forget-me-not-dilupakan-oleh-orang-terkasih.html"
                            >
                              the one i hit
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div>
                          <p>▶️</p>
                        </div>
                        <div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Love hate to drawing 👉{" "}
                            <a
                              target="_blank"
                              href="https://www.instagram.com/hatiyangraya"
                            >
                              hatiyangraya
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div>
                          <p>▶️</p>
                        </div>
                        <div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Fanatic to football 👉{" "}
                            <a
                              target="_blank"
                              href="https://www.instagram.com/arsenal"
                            >
                              North London Forever
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-row">
                        <div>
                          <p>▶️</p>
                        </div>
                        <div>
                          <div className="text-xs uppercase font-semibold opacity-60">
                            Love Stories and Movies🍿
                          </div>
                        </div>
                      </li>
                    </ul>
                  </SpotlightCard>
                </div>
                <div className="w-full md:w-1/2">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg h-full "
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    {/* Knowledge Base */}
                    <ul className="list bg-base-100 rounded-box shadow-md h-full flex flex-grow justify-center items-start">
                      <li className="p-4 pb-2 text-lg tracking-wide flex flex-row md:text-2xl">
                        Knowledge Base
                      </li>
                      <li className="list-row">
                        <div className="text-xs font-semibold opacity-60">
                          PHP && Laravel && Filament && Javascript && Typescript
                          && React && Tailwindcss && API
                        </div>
                      </li>
                    </ul>
                  </SpotlightCard>
                </div>
              </div>
              {/* Featured Works */}
              <SpotlightCard
                className="custom-spotlight-card rounded-xl mb-2"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="w-full flex flex-row text-3xl font-bold justify-start items-start">
                  <ul className="list rounded-box w-full shadow-md">
                    <li className="p-4 pb-2 text-lg tracking-wide flex flex-row md:text-3xl">
                      <p>Featured Works</p>
                      <p className="opacity-20">|</p>
                      <p className="opacity-20">Featured Works</p>
                    </li>

                    <li className="list-row">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={todo}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>Simple To Do To Day</div>
                        <div className="text-xs font-semibold opacity-60">
                          React && Vite && Tailwindcss + DaisyUI && Netlify
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://whats-to-do-today.netlify.app/"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>

                    <li className="list-row justify-center items-center">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={vaksin}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>
                          SiPOVI:Sistem Pendaftaran Online Vaksinasi
                          Internasional
                        </div>
                        <div className="text-xs font-semibold opacity-60">
                          React && Vite && Tailwindcss + DaisyUI && Supabase +
                          PostgreSQL && Netlify
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://sipovi.online"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>

                    <li className="list-row justify-center items-center">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={sos}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>Save ur OShi!!!</div>
                        <div className="text-xs font-semibold opacity-60">
                          React && Vite && Tailwindcss + DaisyUI && Supabase &&
                          Netlify
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://save-ur-oshiii.netlify.app/"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>

                    <li className="list-row justify-center items-center">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={ngekost}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>Web Manajemen dan booking kost: Ngekost</div>
                        <div className="text-xs font-semibold opacity-60">
                          Laravel && Filament && Javascript && Tailwindcss &&
                          Midtrans API
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1cHhqIbCiv6sdBKBAqBimvM8YshhD0wrY/view?usp=sharing"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>

                    <li className="list-row justify-center items-center">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={siapo}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>Pendaftaran Online : SIAPO RABAIN</div>
                        <div className="text-xs font-semibold opacity-60">
                          PHP && Javascript
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="http://siaporabain.live/"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="list-row justify-center items-center">
                      <div>
                        <img
                          className="size-10 rounded-box md:size-25"
                          src={limagirary}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start text-sm md:text-xl">
                        <div>Limagirary</div>
                        <div className="text-xs font-semibold opacity-60">
                          Coming Soon | Coming Soon | Coming Soon
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/khaicalalf"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
            </div>
          </div>
          <AnimationBg />
        </div>
      </div>
    </>
  );
}

export default App;
