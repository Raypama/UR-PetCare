// import React from 'react'

import { Helmet } from "react-helmet";
import HeaderForSeller from "../organisms/HeaderForSeller";
import MySideBar from "../organisms/MySideBar";

interface MainTemplateProps {
  children: React.ReactNode;
  pageTitle: string;
  login?: boolean;
}

const MainTemplateSeller = ({ children, pageTitle }: MainTemplateProps) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="">
        <div className="">
          <HeaderForSeller />
        </div>
        <div className="flex mt-16 ">
          <div className="w-1/4 min-h-screen bg-slate-500">
            <MySideBar />
          </div>
          <div className="w-3/4 min-h-screen pt-5 max-h-fit">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainTemplateSeller;
