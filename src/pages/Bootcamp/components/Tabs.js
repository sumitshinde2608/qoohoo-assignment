import React from "react";
import train from "./../../../assets/train.jpg";
import cinematography from "./../../../assets/cinematography.jpg";
import wine from "./../../../assets/wine.jpg";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row justify-center max-md:flex-col"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 w-48 text-center">
              <a
                className={
                  "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal mx-4 text-[#161E3C]" +
                  (openTab === 1
                    ? "text-white bg-[#FB9B43]"
                    : "text-white bg-[#FFD7B1]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Corporate
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 w-48 text-center">
              <a
                className={
                  "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal mx-4 text-[#161E3C]" +
                  (openTab === 2
                    ? "text-white bg-[#FB9B43]"
                    : "text-white bg-[#FFD7B1]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Groups
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 w-48 text-center">
              <a
                className={
                  "text-sm font-bold  px-5 py-3 shadow-lg rounded block leading-normal mx-4 text-[#161E3C]" +
                  (openTab === 3
                    ? "text-white bg-[#FB9B43]"
                    : "text-white bg-[#FFD7B1]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Upcoming
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-[#FFD7B1] w-[68rem] h-[28rem] max-md:w-[24rem] mb-6 shadow-lg rounded-3xl">
            <div className="px-12 flex-auto flex items-center">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col items-start py-3 justify-start text-[#161E3C]">
                      <span className="text-4xl font-extrabold mb-2">
                        Ammet minim mollit
                      </span>
                      <span className="leading-loose">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                      </span>

                      <div className="pb-2 mt-8">
                        <a
                          href=""
                          className="inline-flex items-center align-center justify-center w-[16rem] px-3 py-2 text-md font-medium text-white bg-[#161E3C] rounded-lg hover:bg-white hover:text-black text-center"
                        >
                          Join Now
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                      <img
                        src={train}
                        className="h-4/5 w-4/5 border-4 b-white rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col items-start py-3 justify-start text-[#161E3C]">
                      <span className="text-4xl font-extrabold mb-2">
                        Wine tasting
                      </span>
                      <span className="leading-loose">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                      </span>

                      <div className="pb-2 mt-8">
                        <a
                          href=""
                          className="inline-flex items-center align-center justify-center w-[16rem] px-3 py-2 text-md font-medium text-white bg-[#161E3C] rounded-lg hover:bg-white hover:text-black text-center"
                        >
                          Join Now
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                      <img
                        src={wine}
                        className="h-4/5 w-4/5 border-4 b-white rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col items-start py-3 justify-start text-[#161E3C]">
                      <span className="text-4xl font-extrabold mb-2">
                        Cinematography
                      </span>
                      <span className="leading-loose">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                      </span>

                      <div className="pb-2 mt-8">
                        <a
                          href=""
                          className="inline-flex items-center align-center justify-center w-[16rem] px-3 py-2 text-md font-medium text-white bg-[#161E3C] rounded-lg hover:bg-white hover:text-black text-center"
                        >
                          Join Now
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                      <img
                        src={cinematography}
                        className="h-4/5 w-4/5 border-4 b-white rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
