import React from 'react';

const DashboardMain = () => {
    return (
        <div>
            <div className="container">
                <div className="dasboard-head">
                    <div className="d-board-user-info">

                        <div className="Alphabet-dp w-12 h-12 rounded-full flex justify-center  items-center bg-slate-300">B</div>
                        <div className="User-name">
                            <h6>Badhon Jamil</h6>
                            <a className='text-blue-700' href="https://calendly.com/badhon">calendly.com/badhon</a>
                        </div>

                    </div>

                    <div className="event-create-action">

                        <button className='bg-blue-500 py-2 px-4 rounded-full text-white'>Create Event</button>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default DashboardMain;