import React from 'react'
import  { useState, useEffect } from "react";
export const Contact = () => {


     const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
  return (
    <div>
         <section
                id="contact"
                className="w-full py-20 slide-in-right reveal bg-white dark:bg-gray-900 scroll-mt-20 reveal"
              >
                <div className="max-w-[1200px] mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center -mt-14 reveal-left">
                    <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient -mt-8">
                      Get In Touch
                    </span>
                  </h2>
                  <div className="max-w-5xl mx-auto mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Contact Info Card - Slides from left */}
                      <div
                        className="bg-gray-300 dark:bg-gray-800 rounded-2xl p-6 shadow-lg reveal-left"
                        style={{ transitionDelay: "0.2s" }}
                      >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                          <span className="text-3xl">📧</span>
                          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Contact Info
                          </span>
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios-filled/50/filled-message.png"
                                alt="email"
                                className="brightness-0 invert"
                              />
                            </div>
                            <div>
                              <p className="text-xs text-black dark:text-white flex flex-start">
                                EMAIL
                              </p>
                              <p className="text-gray-900 dark:text-gray-300">
                                veera53631@gmail.com
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/material-rounded/24/call-female.png"
                                alt="phone"
                                className="brightness-0 invert"
                              />
                            </div>
                            <div>
                              <p className="text-xs text-black dark:text-white flex flex-start">
                                PHONE
                              </p>
                              <p className="text-gray-900 dark:text-gray-300">
                                +91 63748 57553
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                              <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios-filled/50/marker.png"
                                alt="location"
                                className="brightness-0 invert"
                              />
                            </div>
                            <div>
                              <p className="text-xs text-black dark:text-white  flex flex-start">
                                LOCATION
                              </p>
                              <p className="text-gray-900 dark:text-gray-300">
                                Chennai, India
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      {/* Contact Form Card - Slides from right */}
                      <div
                        className="bg-gray-300 dark:bg-gray-800 rounded-2xl p-6 shadow-lg reveal-right"
                        style={{ transitionDelay: "0.3s" }}
                      >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                          <span className="text-3xl">💬</span>
                          <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                            Send Message
                          </span>
                        </h3>
                        <form className="space-y-4">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white"
                          />
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white"
                          />
                          <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white resize-none"
                          ></textarea>
                          <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 reveal-scale"
                            style={{ transitionDelay: "0.4s" }}
                          >
                            Send Message ✈️
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Contact