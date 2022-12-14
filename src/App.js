import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./images/koppel_logo_no.png";
import bus from "./images/buss.png";
import think from "./images/think.png";
import target from "./images/target.svg";
import student from "./images/student.svg";
import driver from "./images/Driver.svg";
import worker from "./images/Workers.svg";
import event from "./images/event.svg";
import { Navbar, Button, TextInput } from "flowbite-react";
import scale from "./images/scale.svg";
import respect from "./images/respect.svg";
import humility from "./images/pray.svg";
import pray from "./images/hand.svg";
import communicate from "./images/comm.svg";
import leader from "./images/award.svg";
import mail from "./images/letter.svg";
import shake from "./images/shake.svg";
import instagram from "./images/Instagram.svg";
import facebook from "./images/Facebook.svg";
import twitter from "./images/Twitter.svg";
import youtube from "./images/YouTube.svg";
function App() {
  return (
    <div>
      <section class="w-screen h-screen bg-busmap bg-cover bg-center px-4 relative">
        <Navbar fluid={true} rounded={true} class="bg-transparent ">
          <Navbar.Brand href="#">
            <img src={logo} className="mr-3 md:h-32 h-16 " alt="Lisa Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              class=" block py-2 pr-4 pl-3 text-teal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-teal md:dark:hover:text-teal dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg font-bold"
              href="#/"
            >
              About us
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-teal dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="services"
            >
              Services
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-teal dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
              href="/team"
            >
              Our Team
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-teal dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
              href="/contact"
            >
              Contact us
            </Navbar.Link>
            <Navbar.Link class="block" href="/download">
              <div className="top-0">
                <Button class="bg-teal text-white rounded text-lg">
                  Download
                </Button>
              </div>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

        <div class="flex flex-wrap gap-4...">
          <div class="flex-auto xl:mt-40 md:mt-36 mt-24 absolute xl:left-36 md:left-34">
            <p class="xl:text-lg text-xs">
              we support and provide services to students and workers with
            </p>
            <p class="xl:text-4xl md:text-3xl text-2xl">
              <span class="ht font-bold">Comfortable </span>and{" "}
              <span class="ht font-bold">accessible</span>
              <br />
              transportation,
              <br />
              <span class="ht font-bold">transparent </span>delivery services,{" "}
              <br />
              and <span class="ht font-bold">affordable</span> transport
              <br />
              packages
            </p>
          </div>
          <div class="flex-auto absolute xl:bottom-[1rem] md:bottom-[6rem] bottom-[10rem] xl:right-24 right-10 ">
            <img
              class="xl:h-[24rem] md:h-[18rem] h-[11rem] xl:w-[40rem] md:w-[30rem] w-[20rem] "
              src={bus}
              alt="bus"
            ></img>
          </div>
        </div>
      </section>
      <section class="w-screen h-screen bg-teal bg-opacity-60">
        <div class="flex flex-wrap md:flex-nowrap h-full ">
          <div class="h-96 md:h-full md:w-2/4">
            <img
              class="h-full w-full object-cover"
              src={think}
              alt="think"
            ></img>
          </div>
          <div class="px-10 text-white md:self-center md:w-2/4">
            <p class="text-3xl text-center ">Who we are</p>
            <p class="text-justify  md:text-base text-[12px]">
              We are a tech startup based in Ghana with the sole aim of
              improving the transportation sector in Ghana and beyond. <br></br>
              <br></br>
              We are a committed company who seek to help studetns in the
              univesity and the working class solve their transportation issues.{" "}
            </p>
            <br></br>
            <p>
              Read our{" "}
              <Link to="terms" class="ht font-bold">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section class="w-screen h-screen px-4">
        <div class="text-center md:text-4xl text-3xl md:pt-16 pt-5 font-bold">
          <p>
            Our <span class="ht">SEVEN</span> Core Values
          </p>
        </div>
        <div class="grid grid-cols-3 gap-x-4 md:gap-y-20 md:gap-y-12 gap-y-2  md:pt-20  pt-5">
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 p-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={scale}
                alt="scale"
                class="col-span-1 justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">INTEGRITY</p>
                <p class="md:text-[14px] text-[12px]">
                  Know and do WHAT is right as a team
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={respect}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">RESPECT</p>
                <p class="md:text-[14px] text-[12px]">
                  Treating others the way you want to be treated
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={pray}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">RESPONSILBILITY</p>
                <p class="md:text-[14px] text-[12px]">
                  Embrace opportunities to contribute and learn more
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={shake}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">SPORTSMANSHIP</p>
                <p class="md:text-[14px] text-[12px]">
                  Bring your best to all competition
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={leader}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">SERVANT LEADERSHIP</p>
                <p class="md:text-[14px] text-[12px]">
                  Serve the common good, being part of the revolution of
                  transportation
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={communicate}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base  ">COMMUNICATION</p>
                <p class="md:text-[14px] text-[12px]">
                  Be your brother’s keeper, with sad and happy moments.
                  Transparency is key.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={humility}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">HUMILITY</p>
                <p class="md:text-[14px] text-[12px]">
                  We are all here to learn.Education never ends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-screen h-screen bg-cloud bg-opacity-60">
        <div class="flex flex-wrap md:flex-nowrap gap-2 ">
          <div class="px-10 text-white md:w-2/4 md:pt-32 pt-10 ">
            <p class="md:text-4xl text-3xl  font-bold">Our Target Market</p>
            <div class="grid grid-rows-4  md:pt-4 pt-8  ">
              <div class="w-full md:h-[8rem] h-[6rem] ">
                <div class="flex gap-2">
                  <img
                    src={student}
                    alt="scale"
                    class="col-span-1   xl:pt-2 xl:pr-2"
                  ></img>
                  <div class="col-span-2 justify-self-center xl:pt-2 ">
                    <p class="text-white font-bold text-base">
                      University Students
                    </p>
                    <p class="md:text-[14px] text-[12px]">
                      Students who live outside of campus and need
                      transportation to and fro
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:h-[8rem] h-[6rem]  ">
                <div class="flex gap-2 ">
                  <img
                    src={worker}
                    alt="scale"
                    class="col-span-1  justify-self-end xl:pt-2 xl:pr-2"
                  ></img>
                  <div class="col-span-2 justify-self-center xl:pt-2 ">
                    <p class="text-white font-bold text-base">
                      Corporate Workers
                    </p>
                    <p class="md:text-[14px] text-[12px]">
                      Workers who need to find affordable transportation to
                      their offices
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full md:h-[8rem] h-[6rem]  ">
                <div class="flex gap-2">
                  <img
                    src={driver}
                    alt="scale"
                    class="col-span-1  justify-self-end xl:pt-2 xl:pr-2"
                  ></img>
                  <div class="col-span-2 justify-self-center xl:pt-2 ">
                    <p class="text-white font-bold text-base">Drivers</p>
                    <p class="md:text-[14px] text-[12px]">
                      Public and private drivers who want to make ends meet and
                      use our platform to expand their reach
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:h-[8rem] h-[6rem]">
                <div class="flex gap-2 ">
                  <img
                    src={event}
                    alt="scale"
                    class="col-span-1  justify-self-end xl:pt-2 xl:pr-2"
                  ></img>
                  <div class="col-span-2 justify-self-center xl:pt-2 ">
                    <p class="text-white font-bold text-base">
                      Event Organizers
                    </p>
                    <p class="md:text-[14px] text-[12px]">
                      Event orgranizers who need affrodable transportation for
                      their patronizers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-96 md:h-full md:w-2/4 md:pt-24 pt-2 ">
            <img
              class="md:h-[45rem] h-3/4 w-full "
              src={target}
              alt="target"
            ></img>
          </div>
        </div>
      </section>
      <footer class="w-full h-full px-4 ">
        <div class="grid grid-cols-12 gap-4 pb-10">
          <div class="md:col-span-4 col-span-12 ">
            <img
              src={logo}
              alt="logo"
              class="md:w-full w-full h-3/4 px-16 justify-items-center  "
            ></img>
            <ul class="flex md:px-28 px-8 gap-4 md:-mt-20 ">
              <li >
                <img src={instagram} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li >
                <img src={facebook} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li >
                <img src={twitter} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li >
                <img src={youtube} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
            </ul>
          </div>
          <div class="md:col-span-4 col-span-12 md:pt-20 pt-2 md:justify-self-center px-8">
            <p class="ht font-bold xl:text-2xl texl-base">Support</p>
            <ul class="leading-[4rem]">
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/services">Services</Link> </li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/download">Download App</Link></li>
            </ul>
          </div>
          <div class="md:col-span-4 col-span-12 md:pt-20 pt-2 md:justify-self-center px-8">
            <span class="flex ht ">
              <img src={mail} alt="logo" class="w-[2rem] h-[2rem]"></img>
              <p class="pt-2">Sign up
              for our newsletter</p>
            </span>
            <div>
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                  </div>
                  <TextInput
                  class="block w-full disabled:cursor-not-allowed disabled:opacity-50 bg-transparent text-crimson  p-2.5 text-sm border border-b-crimson border-t-white border-l-white border-r-white focus:outline-none focus:border-none focus:ring-1 focus:ring-crimson placeholder-crimson"
                    id="email1"
                    type="email"
                    placeholder="Enter your email address"
                    required={true}
                  />
                </div>

                <Button type="submit" class="text-white bg-teal border border-transparent hover:bg-teal focus:ring-4 focus:ring-teal disabled:hover:bg-teal dark:bg-teal dark:hover:bg-teal dark:focus:ring-teal dark:disabled:hover:bg-teal focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ">Submit</Button>
              </form>
            </div>
          </div>
          
          <div class=" relative col-span-12 justify-self-center">
          
            <p class="inset-x-0 bottom-0 text-teal md:text-base text-sm">
              ©2022 Koppel Vibz Ltd. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
