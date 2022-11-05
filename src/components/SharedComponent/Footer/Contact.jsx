import React from 'react';



const Contact = () => {
    return (
        <div className='bg-gray-100 mx-10 py-10'>


            <div className='h-3/5 w-full bg-slate-900' ></div>
            <div>
                <h6 className="mt-5 text-center text-4xl tracking-tight leading-10 font-small sm:text-4xl sm:leading-none md:text-4xl">
                    <span className="text-indigo-600 font-bold">
                        How can we help?

                    </span>{" "}

                </h6>
                <h5 className="mt-5 text-center text-2xl tracking-tight leading-10 font-small sm:text-2xl sm:leading-none md:text-2xl">Get in touch and let us know how we can help.</h5>


                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl text-center mb-2">Enterprise Sales</div>
                            <p className="text-gray-700 text-base">
                                Submit your inquiry for your Enterprice-ideal for companies with more than 100 employees
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a
                                href="/"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                            >
                                Contact sales
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl text-center mb-2">Help & Support</div>
                            <p className="text-gray-700 text-base">
                                Submit a request to get help from our friendly support experts
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a
                                href="/"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                            >
                                Contact support
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl text-center mb-2">Media & Press</div>
                            <p className="text-gray-700 text-base">
                                Download Calendly's press kit, read press releases, and request interviews
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a
                                href="/"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                            >
                                Visit our Newsroom
                            </a>
                        </div>
                    </div>

                </div>
            </div>




            <h6 className="mt-5 text-center text-4xl tracking-tight leading-10 font-small sm:text-4xl sm:leading-none md:text-4xl">
                <span className="text-indigo-600 font-bold">
                    More ways to reach us

                </span>{" "}

            </h6>
            <h5 className="mt-5 text-center text-2xl tracking-tight leading-10 font-small sm:text-2xl sm:leading-none md:text-2xl">Need some content about joining us in a partner or career adventure!</h5>


            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                <div className="rounded overflow-hidden shadow-lg">

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center mb-2">Join our team</div>
                        <p className="text-gray-700 text-base">
                            Interesting in applying for a position? View our Careers page for open position and apply.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <a
                            href="/"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                        >
                            Calendly careers
                        </a>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg">

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center mb-2">Become a partner</div>
                        <p className="text-gray-700 text-base">
                            For general queries, including partnership opportunities.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <a
                            href="/"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                        >
                            Get in touch with partners
                        </a>
                    </div>
                </div>


            </div>





        </div>


    );
};

export default Contact;