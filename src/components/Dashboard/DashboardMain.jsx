import React from 'react';

const DashboardMain = () => {
    return (
        <div>
            <div className="container mx-auto md:px-44 ">
                <div className="dasboard-head flex justify-between py-8">
                    <div className="d-board-user-info flex gap-2">

                        <div className="Alphabet-dp w-12 h-12 rounded-full flex justify-center  items-center bg-slate-300">B</div>
                        <div className="User-name">
                            <h6>Badhon Jamil</h6>
                            <a className='text-blue-700' href="https://calendly.com/badhon">calendly.com/badhon</a>
                        </div>
                        <hr />
                    </div>

                    <div className="event-create-action">

                        <button className='bg-blue-500 py-2 px-4 rounded-full text-white'>Create Event</button>

                    </div>
                </div>


                <div className="event-card py-10 grid lg:grid-cols-3  md:grid-cols-2  xs:grid-cols-1 gap-x-10 gap-y-5">


                    {/* card1 */}
                    <div class="flex  gap-x-3">
                        <div class="block  rounded-lg shadow-2xl bg-white max-w-xs   py-14 px-8 border-t-2 border-blue-900">
                            <button class="rounded-full bg-sky-600 px-2 py-1">Technology</button>

                            <h5 class="text-gray-900 text-xl leading-tight md:font-medium mb-2">15 Minutes Meeting</h5>

                            <h6 className='text-gray-500'>15 min one to one</h6>

                            <hr />
                            <div className="event-join mt-5 flex justify-end">
                                <button style={{ backgroundColor: "#312E81", color: 'white' }} className='rounded-md p-2 '>Join Now</button>
                            </div>
                        </div>
                    </div>


                    {/* card2 */}

                    <div class="flex  ">
                        <div class="block  rounded-lg shadow-2xl bg-white max-w-xs   py-14 px-8 border-t-2 border-blue-900">
                            <button class="rounded-full bg-sky-600 px-2 py-1">Technology</button>

                            <h5 class="text-gray-900 text-xl leading-tight md:font-medium mb-2">15 Minutes Meeting</h5>

                            <h6 className='text-gray-500'>15 min one to one</h6>

                            <hr />
                            <div className="event-join mt-5 flex justify-end">
                                <button style={{ backgroundColor: "#312E81", color: 'white' }} className='rounded-md p-2 '>Join Now</button>
                            </div>
                        </div>



                    </div>
                    {/* card3 */}
                    <div class="flex  ">
                        <div class="block  rounded-lg shadow-2xl bg-white max-w-xs   py-14 px-8 border-t-2 border-blue-900">
                            <button class="rounded-full bg-sky-600 px-2 py-1">Technology</button>

                            <h5 class="text-gray-900 text-xl leading-tight md:font-medium mb-2">15 Minutes Meeting</h5>

                            <h6 className='text-gray-500'>15 min one to one</h6>

                            <hr />
                            <div className="event-join mt-5 flex justify-end">
                                <button style={{ backgroundColor: "#312E81", color: 'white' }} className='rounded-md p-2 '>Join Now</button>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        </div>
    );
};

export default DashboardMain;