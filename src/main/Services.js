import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, TextInput } from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import leader from "../images/award.svg";
import mail from "../images/letter.svg";
import instagram from "../images/Instagram.svg";
import facebook from "../images/Facebook.svg";
import twitter from "../images/Twitter.svg";
import youtube from "../images/YouTube.svg";
import bus from "../images/Bus-1.svg";
import city from "../images/Bus-2.svg";
import privat from "../images/Bus-3.svg";
import car from "../images/Bus.svg";
import bike from "../images/DirtBike.svg";
import waste from "../images/GarbageTruck.svg";

function Services() {
  return (
    <div>
      <section class="w-screen md:h-96 h-80 px-4 bg-green bg-cover bg-center relative">
        <Navbar fluid={true} rounded={true} class="bg-transparent ">
          <Navbar.Brand href="#">
            <img src={logo} className="mr-3 md:h-32 h-16 " alt="Lisa Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              class=" block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="/"
            >
              About us
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-teal font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-teal md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="services"
            >
              Services
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
              href="/team"
            >
              Our Team
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
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

        <div class="justify-self-center">
          <p class="text-center text-white font-bold md:text-4xl text-3xl absolute inset-x-0 bottom-0">
            OUR SERVICES
          </p>
        </div>
      </section>
      <section class="w-screen h-screen px-4">
        <div class="grid grid-cols-2 gap-x-4 md:gap-y-20 md:gap-y-12 gap-y-2 md:pt-20  pt-5">
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 p-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={bus}
                alt="scale"
                class="col-span-1 justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">BUS PACKAGES</p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={bike}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">DELIVERY</p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={privat}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">
                  PRIVATE TRANSPORTATION
                </p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={waste}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">WASTE MANAGEMENT</p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={city}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base">INTERCITY TRAVEL</p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:h-[8rem] h-[6rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
            <div class="grid grid-cols-3 gap-1 ">
              <img
                src={car}
                alt="scale"
                class="col-span-1  justify-self-center xl:pt-2 xl:pr-2"
              ></img>
              <div class="col-span-2 justify-self-center xl:pt-2 ">
                <p class="text-teal font-bold text-base  ">
                  PUBLIC TRANSPORTATION
                </p>
                <p class="md:text-[14px] text-[12px]">
                  Specially curated and affordable bus packages for offices,
                  schools, events, road trips
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-screen h-screen bg-light bg-cover bg-center px-4">
        <div class="pt-16">
          <p class="text-center text-white font-bold md:text-4xl text-3xl pb-10">
            News Feed
          </p>

          {/* large screens */}

          <div class="grid grid-cols-3 gap-8 ">
            <div class="w-full md:h-[35rem] h-[10rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
              <div class="grid grid-cols-3 gap-1 ">
                <img
                  src={leader}
                  alt="scale"
                  class="md:col-span-3 col-span-1 w-full h-3/4 justify-self-center md:pt-4"
                ></img>
                <div class="md:col-span-3 col-span-2 justify-self-center  ">
                  <p class="text-teal font-bold md:text-2xl text-xl">
                    Koppel Vibz Launch Soon
                  </p>
                  <p class="md:text-[14px] text-[10px] ">
                    Serve the common good, being part of the revolution of
                    transportation Serve the common good, being part of the
                    revolution of transportation.
                    <span>
                      <Link className="underline">Read more</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:h-[35rem] h-[10rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
              <div class="grid grid-cols-3 gap-1 ">
                <img
                  src={leader}
                  alt="scale"
                  class="md:col-span-3 col-span-1 w-full h-3/4 justify-self-center md:pt-4"
                ></img>
                <div class="md:col-span-3 col-span-2 justify-self-center  ">
                  <p class="text-teal font-bold md:text-2xl text-xl">
                    Koppel Vibz Launch Soon
                  </p>
                  <p class="md:text-[14px] text-[10px] ">
                    Serve the common good, being part of the revolution of
                    transportation Serve the common good, being part of the
                    revolution of transportation.
                    <span>
                      <Link className="underline">Read more</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:h-[35rem] h-[10rem] bg-[#f0f0f0] rounded md:col-span-1 col-span-3 pl-4 pr-4 pt-4 pb-4">
              <div class="grid grid-cols-3 gap-1 ">
                <img
                  src={leader}
                  alt="scale"
                  class="md:col-span-3 col-span-1 w-full h-3/4 justify-self-center md:pt-4"
                ></img>
                <div class="md:col-span-3 col-span-2 justify-self-center  ">
                  <p class="text-teal font-bold md:text-2xl text-xl">
                    Koppel Vibz Launch Soon
                  </p>
                  <p class="md:text-[14px] text-[10px] ">
                    Serve the common good, being part of the revolution of
                    transportation Serve the common good, being part of the
                    revolution of transportation.
                    <span>
                      <Link className="underline">Read more</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
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
              <li>
                <img src={instagram} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li>
                <img src={facebook} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li>
                <img src={twitter} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
              <li>
                <img src={youtube} alt="logo" class="w-[2rem] h-[2rem]"></img>
              </li>
            </ul>
          </div>
          <div class="md:col-span-4 col-span-12 md:pt-20 pt-2 md:justify-self-center px-8">
            <p class="ht font-bold xl:text-2xl texl-base">Support</p>
            <ul class="leading-[4rem]">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>{" "}
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/download">Download App</Link>
              </li>
            </ul>
          </div>
          <div class="md:col-span-4 col-span-12 md:pt-20 pt-2 md:justify-self-center px-8">
            <span class="flex ht ">
              <img src={mail} alt="logo" class="w-[2rem] h-[2rem]"></img>
              <p class="pt-2">Sign up for our newsletter</p>
            </span>
            <div>
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block"></div>
                  <TextInput
                    class="block w-full disabled:cursor-not-allowed disabled:opacity-50 bg-transparent text-crimson  p-2.5 text-sm border border-b-crimson border-t-white border-l-white border-r-white focus:outline-none focus:border-none focus:ring-1 focus:ring-crimson placeholder-crimson"
                    id="email1"
                    type="email"
                    placeholder="Enter your email address"
                    required={true}
                  />
                </div>

                <Button
                  type="submit"
                  class="text-white bg-teal border border-transparent hover:bg-teal focus:ring-4 focus:ring-teal disabled:hover:bg-teal dark:bg-teal dark:hover:bg-teal dark:focus:ring-teal dark:disabled:hover:bg-teal focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg "
                >
                  Submit
                </Button>
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

export default Services;
