import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row justify-center"
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
          <div className="relative flex flex-col min-w-0 break-words bg-[#FFD7B1] w-[72rem] h-[28rem] mb-6 shadow-lg rounded">
            <div className="px-4 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
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
