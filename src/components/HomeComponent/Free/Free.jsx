import React from "react";

const Free = () => {
  return (
    <section style={{ "backgroundColor": "#f7faff" }}>
      <div className="container mx-auto px-6 text-center py-20">
        <h1 className="mb-6 text-5xl font-bold text-center text-black">
          Sign up for free
        </h1>
        <button className="bg-indigo-600 text-white mx-5 font-bold rounded-full mt-6 py-4 px-8 shadow-lg  tracking-wider">
          Start for free
        </button>
        <button className="bg-white-600 text-black font-bold rounded-full mt-6 py-4 px-8 shadow-lg border tracking-wider">
          Talk to sales
        </button>
      </div>
    </section>
  );
};

export default Free;
