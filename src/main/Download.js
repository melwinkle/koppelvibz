import React from "react";
import { Navbar, Button } from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import phone from "../images/phone.svg";
import apple from "../images/Apple.svg";
import google from "../images/Google.svg";

function Download() {
  return (
    <section class="w-screen h-screen px-4">
      <Navbar fluid={true} rounded={true} class="bg-transparent ">
        <Navbar.Brand href="#">
          <img src={logo} className="mr-3 md:h-32 h-16 " alt="Lisa Logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            class=" block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
            href="/"
          >
            About us
          </Navbar.Link>
          <Navbar.Link
            class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
            href="services"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            class="block py-2 pr-4 pl-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
            href="/team"
          >
            Our Team
          </Navbar.Link>
          <Navbar.Link
            class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
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

      <div class="flex md:flex-nowrap flex-wrap mt-20">
        <div class="self-center md:px-20 pb-5">
          <p class="ht font-bold text-4xl pb-4">Download the App</p>
          <p class="text-justify w-3/4 pb-12 ">
            Whether you are a student, worker or driver,Kopppel has the platform
            just for you. Find us on the Google Play Store or App Store
          </p>

          <div class="flex gap-4">
            <Button class="bg-[#D89BA8] text-white rounded w-[10rem]  text-center p-[0.2rem]">
              <img src={google} alt="google"></img>Download
            </Button>
            <Button class="bg-teal bg-opacity-60 text-white rounded w-[10rem]  text-center p-[0.2rem]">
              <img src={apple} alt="apple"></img>Download
            </Button>
          </div>
        </div>
        <div>
          <img src={phone} alt="think"></img>
        </div>
      </div>
    </section>
  );
}

export default Download;
