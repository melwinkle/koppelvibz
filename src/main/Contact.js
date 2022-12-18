import React from "react";
import
{
  Navbar,
  Button,
  Label,
  // TextInput,
  Textarea,
  Accordion,
} from "flowbite-react";
import logo from "../images/koppel_logo_no.png";
import rocket from "../images/Rocket.svg";
import { db } from "./firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

// import  {useState} from 'react';

function Contact()
{
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata")
  // const [loader, setLoader] = useState(false);
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }).then(() =>
    {
      if (!alert("Form Submitted Succefully")) { }
    }).catch((error) =>
    {
      alert(error.message)
    })
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

  }

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
              Have an enquiry?Either fill the form or call us on +233240979969
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
            <form className="flex flex-col gap-4" >
              <div>
                <div className="mb-2 block">
                  <input
                    id="fullname"
                    type="text"
                    required={true}
                    placeholder="Full Name*"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                    class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <input
                    id="email1"
                    type="email"
                    placeholder="Email*"
                    required={true}
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <input
                    id="subject"
                    type="text"
                    required={true}
                    placeholder="Subject"
                    value={subject}
                    onChange={(event) => { setSubject(event.target.value) }}
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
                  value={message}
                  onChange={(event) => { setMessage(event.target.value) }}
                  class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-teal bg-opacity-20 border-none text-teal focus:border-teal focus:ring-teal  rounded p-2.5 text-sm"
                />
              </div>
              <Button
                class="md:w-2/4 w-3/4 text-white bg-teal border border-transparent hover:bg-teal focus:ring-4 focus:ring-teal disabled:hover:bg-teal dark:bg-teal dark:hover:bg-teal dark:focus:ring-teal dark:disabled:hover:bg-teal  group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section class="w-screen  bg-teal bg-opacity-60 px-4">
        <p class="text-white text-center md:text-3xl text-xl font-bold pt-10">
          Frequently Asked Questions(FAQ)
        </p>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>What is Koppel Vibz Limited</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  Kopple Vibz a technology private and public travelling ride
                  hailing service platform that seeks to commute passengers and
                  delivery of packages/waste to their preferred destinations by
                  providing them with the required information and services
                  necessary to make travelling stress-free. The idea is designed
                  to help drivers locate passengers going the same route through
                  bookings, and pickups at a Viber
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                What options are available to access the services Koppel provides
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  This has been made accessible on web, USSD and mobile
                  application platform
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                What is the difference between a Viber and a Driver
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  A viber is a passenger or customer who makes requests to access the services available. A driver is a provider that provides information to create requests for the services available
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                Can I use the services without registering?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  No. You have to be a fully registered and verified Koppel Vibz member before accessing the services
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                How can I book a ride?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  You can book a ride via mobile application and WhatsApp by registered members after placing their take off and drop off location on the book ride search menu
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                Is there a user age restriction for Koppel Vibz
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  Yes there is. Anyone below the age of 16 is not authorized to use the application
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                What information do I need to register as a driver for Koppel Vibz
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  1.Valid Driving license
                  2.Authroization to use the vehicle commercially
                  3. A good working vehicle with a maximum of 20 seats
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div class="mt-10">
          <Accordion
            alwaysOpen={true}
            class="divide-y divide-teal border-none rounded border bg-white"
          >
            <Accordion.Panel class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 border-none !outline-none focus:!outline-none focus:!ring-0">
              <Accordion.Title>
                What modes of payment can a viber use to pay for a service
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-teal">
                  Mobile money transfer or Cash
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
