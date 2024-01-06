import React from "react";

const VoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mt-20 flex h-full items-center justify-center">
      {children}
    </div>
  );
};
export default VoteLayout;
