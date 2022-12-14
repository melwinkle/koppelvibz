import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Accordion } from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import globe from "../images/Globe.svg";
import back from "../images/Left.svg";  


function Careers() {
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
              class="block py-2 pr-4 pl-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="services"
            >
              Services
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-teal font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-teal md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
              href="/team"
            >
              Our Team
            </Navbar.Link>
            <Navbar.Link
              class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0  text-lg"
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
            Join the Team
          </p>
          <p class="text-center text-teal md:text-xl text-sm">
            Remote-friendly and flexible opportunities to grow{" "}
          </p>
        </div>
      </section>
      <section class="w-screen px-4 relative">
          <Link to="/team"><span class="flex pb-2 pt-1">
          <img src={back} alt="logo" class="w-[2rem] h-[2rem]"></img>
          <p class="pt-1 ht">Go Back</p>
        </span>
              </Link>
      
        <p class="md:text-4xl text-3xl text-center pt-5 ht font-bold">
          Available Jobs
        </p>
        <span class="flex place-content-center pb-2">
          <img src={globe} alt="logo" class="w-[2rem] h-[2rem]"></img>
          <p class="pt-1 ">Remote</p>
        </span>

        <div class="md:px-36 pb-8">
          <p class="ht font-bold md:text-3xl text-2xl">Engineering</p>
          <div class="md:pl-8 mt-10">
            <Accordion
              alwaysOpen={true}
              class="divide-y divide-teal border-none rounded border bg-[#f0f0f0] bg-opacity-50"
            >
              <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
                <Accordion.Title>
                  Backend Developer
                  <p class="ht">Full-Time</p>
                </Accordion.Title>
                <Accordion.Content class="py-5 px-5 last:rounded-b-lg bg-[#E4EFF9] first:rounded-t-lg">
                  <ul class=" mb-2 pl-4 list-disc">
                    <li>
                      Have proficient knowledge in Laravel PHP, AWS, Django
                    </li>
                    <li>
                      Have a Bachelor’s Degree in Comouter Science or related
                      field
                    </li>
                    <li>Be a good team player </li>
                  </ul>
                  <Link to="/careers">
                    <Button class="bg-teal text-white rounded p-1">
                      Apply Now
                    </Button>
                  </Link>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div class="md:px-36 pb-8">
          <p class="ht font-bold md:text-3xl text-2xl">Business</p>
          <div class="md:pl-8 mt-10">
            <Accordion
              alwaysOpen={true}
              class="divide-y divide-teal border-none rounded border bg-[#f0f0f0] bg-opacity-50"
            >
              <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
                <Accordion.Title>
                  Business Analyst
                  <p class="ht">Full-Time</p>
                </Accordion.Title>
                <Accordion.Content class="py-5 px-5 last:rounded-b-lg bg-[#E4EFF9] first:rounded-t-lg">
                  <ul class=" mb-2 pl-4 list-disc">
                    <li>Have proficient knowledge in SQl, R, Data analysis</li>
                    <li>
                      Have a Bachelor’s Degree in Business, Acturial Science or
                      related field field
                    </li>
                    <li>Be a good team player </li>
                  </ul>
                  <Link to="/careers">
                    <Button class="bg-teal text-white rounded p-1">
                      Apply Now
                    </Button>
                  </Link>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div class="md:px-36 pb-8">
          <p class="ht font-bold md:text-3xl text-2xl">Administration</p>
          <div class="md:pl-8 mt-10">None available</div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
