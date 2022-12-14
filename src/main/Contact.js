import React from "react";
import {
  Navbar,
  Button,
  Label,
  TextInput,
  Textarea,
  Accordion,
} from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import rocket from "../images/Rocket.svg";

function Contact() {
  return (
    <div>
      <section class="w-screen h-screen bg-busmap bg-cover bg-center relative px-4">
        <Navbar fluid={true} rounded={true} class="bg-transparent ">
          <Navbar.Brand href="#">
            <img src={logo} className="mr-3 md:h-32 h-16 " alt="Lisa Logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              class=" block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-black md:dark:hover:text-teal dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg "
              href="/"
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
              class="block py-2 pr-4 pl-3 text-teal font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal  md:p-0 dark:text-teal md:dark:hover:text-teak dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg"
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

        <div class="flex md:flex-nowrap flex-wrap md:mt-20 mt-5 ">
          <div class="self-center md:px-20 pb-5 md:w-2/4">
            <p class="ht font-bold text-4xl pb-4">Contact Us</p>
            <p class="text-justify md:w-3/4 ">
              Have an enquiry?Either fill the form or call us on +233302000000
              and our support team will answer all your questions
            </p>
          </div>
          <div class="md:w-[42%] w-[100%]">
            <span class="flex">
              <p class="text-black md:text-2xl text-base font-bold">
                Send us a message
              </p>{" "}
              <img src={rocket} class="w-10 h-10" alt="rocket"></img>
            </span>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <TextInput
                    id="fullname"
                    type="text"
                    required={true}
                    placeholder="Full Name*"
                    class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="Email*"
                    required={true}
                    class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <TextInput
                    id="subject"
                    type="text"
                    required={true}
                    placeholder="Subject"
                    class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                  />
                </div>
              </div>
              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="What can we help you with?" />
                  <Label htmlFor="comment" value="*" class="text-crimson" />
                </div>
                <Textarea
                  id="comment"
                  required={true}
                  rows={4}
                  class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                />
              </div>
              <Button
                class="md:w-2/4 w-3/4 text-white bg-teal border border-transparent hover:bg-teal focus:ring-4 focus:ring-teal disabled:hover:bg-teal dark:bg-teal dark:hover:bg-teal dark:focus:ring-teal dark:disabled:hover:bg-teal focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section class="w-screen h-screen bg-teal bg-opacity-60 px-4">
        <p class="text-white text-center md:text-3xl text-xl font-bold pt-10">
          Frequently Asked Questions(FAQ)
        </p>
        <div class="mt-10">
          <Accordion alwaysOpen={true} class="divide-y divide-teal border-none rounded border bg-white">
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>How do I register?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion alwaysOpen={true} class="divide-y divide-teal border-none rounded border bg-white">
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>How do I register?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default Contact;
