import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Button, TextInput } from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import avatar from "../images/avatar.png";
import career from "../images/career.png";
import mail from "../images/letter.svg";
import instagram from "../images/Instagram.svg";
import facebook from "../images/Facebook.svg";
import twitter from "../images/Twitter.svg";
import youtube from "../images/YouTube.svg";

function Team(){
    return(
        <div>
      <section class="w-screen md:h-96 h-80 px-4 bg-green bg-cover bg-center relative">
        <Navbar fluid={true} rounded={true} class="bg-transparent ">
          <Navbar.Brand href="#">
            <img src={logo} className="mr-3 md:h-32 h-16 " alt="Lisa Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              class=" block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-teal md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="/"
            >
              About us
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="services"
            >
              Services
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-teal font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
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
          <p class="text-center text-white font-bold md:text-4xl text-xl ">
          Meet the Team Behind KOPPEL VIBZ
          </p>
          <p class="text-center text-teal md:text-xl text-sm">Team of individuals who believe in good teamwork and cooperation to strive together </p>
        </div>
      </section>
      <section class="w-screen px-4 pb-10">
      <p class="ht font-bold text-3xl text-2xl pb-4 text-center pt-4">Core Team</p>
      <div class="grid grid-cols-3 gap-8 px-8 justify-items-center">

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>


        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>


        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>


        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>


        <div class="md:col-span-1 col-span-3  ">
          <img src={avatar} alt="employee" class="w-64 h-64   "></img>
            <p class="ht font-bold text-center">John Doe</p>
          <p class="text-center">Founder and CEO</p>
        </div>

      </div>
       
      </section>
      <section class="w-screen h-screen bg-light bg-cover bg-center px-4">
      <div class="flex md:flex-nowrap flex-wrap mt-20">
        <div class="self-center md:px-20 pb-5 md:pt-0 pt-2">
        <p class="font-bold text-sm md:pb-4 text-crimson">Careers at Koppel</p>
          <p class="font-bold text-4xl md:pb-4 text-white">Let’s grow together</p>
          <p class="text-justify pb-4 md:w-3/4 text-white leading-none">
          We are bulding a culture at Koppel Vibz where amazing people like you can do their best work. Explore remote-friendly,flexible opportunies to grow and help achieve the mission of Koppel.
          </p>

          <div>
            <Link to="/careers"><Button class="bg-teal text-white rounded md:p-4 p-2">
              VIEW CAREERS
            </Button></Link>
          
          </div>

  
        </div>
        <div class="md:pt-10">
          <img src={career} alt="career"></img>
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
    )
}

  
  export default Team;