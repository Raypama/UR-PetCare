// import React from 'react'

const DailyReport = () => {
    const today = new Date();
    const formattedDate = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
    const formattedDatePlan = `${today.getDate()+1} / ${today.getMonth() + 2} / ${today.getFullYear()}`;

  return (
    <div className="flex flex-col items-center mt-20">
      <h1>My Daily Report </h1>
      <form>
        <div>
          {/* <p>{formattedDate}</p> */}
        </div>
        <div className="my-2 rounded text-base">
          <label htmlFor="report" className="block">
            Report, {formattedDate}
          </label>
          <textarea 
            name="report"
            className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded max-h-32 min-h-32"
            placeholder="TEXT HERE"
          />
        </div>
        <div className="my-2 rounded text-base">
          <label htmlFor="nextPlan" className="block">
            Next Plan, {formattedDatePlan}
          </label>
          <textarea 
            name="nextPlan"
            className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded max-h-32 min-h-32"
            placeholder="TEXT HERE"
          />
        </div>
      </form>
    </div>
  );
};

export default DailyReport;
