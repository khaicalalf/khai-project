import "./index.css";
import AnimationBg from "./Components/animationbg";
import SpotlightCard from "./Components/spotlightcards";

function App() {
  return (
    <>
      <div className="bg-base-100">
        <div className="mockup-window min-h-screen bg-base-200">
          <div className="bg-base-300 w-full flex-col flex flex-grow justify-center items-center-safe p-10">
            <div className="w-full bg-base-200 flex flex-col justify-center p-2 rounded-l md:w-3/4 rounded-3xl">
              <SpotlightCard
                className="custom-spotlight-card rounded-xl mb-2 mt-2 md:mb-4"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                {/* Hi */}
                <div className="w-full flex flex-row text-3xl font-bold justify-center items-center">
                  <p className="hi">👋</p>
                  <p>Hi Comrades</p>
                </div>
              </SpotlightCard>
              {/* About and Careers */}
              <div className="w-full flex flex-col mb-2 md:flex-row">
                <div className="w-full md:w-3/5">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg mb-2 md:mr-2"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    <div className="">
                      About
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="w-full md:w-2/5">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    <div className="">
                      Careers
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="w-full flex flex-col mb-2 md:flex-row">
                <div className="w-full md:w-1/2">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg mb-2 md:mr-2"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    <div className="">
                      Other Side
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="w-full md:w-1/2">
                  <SpotlightCard
                    className="custom-spotlight-card rounded-lg"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                    <div className="">
                      Knowledge Base
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                      <p>
                        sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <SpotlightCard
                className="custom-spotlight-card rounded-xl mb-2"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="w-full flex flex-row text-3xl font-bold justify-start items-start">
                  Featured Works
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
                  <p>
                    sdfdgdfsgdfgddddddddddddddddsdfsdffsdczsdgsdrhtityuo,tyuertsevrfsfvasfvasdfasdfasvfasdvdasvasfvvadfvadfdrt
                  </p>
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
