import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="bg-slate-200 overflow-auto rounded-lg h-[95vh] w-full m-[15px]">
      {children}
    </div>
  );
};

export default Page;
