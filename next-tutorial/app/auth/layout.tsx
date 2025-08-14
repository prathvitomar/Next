import React from "react";

function layout({children} : Readonly<{children : React.ReactNode}>) {
  return (
    <div>
      <div className="bg-yellow-200 py-2 text-center">
        <span className="font-bold">Login now to get 20% off</span>
      </div>
      {children}
    </div>
  );
}

export default layout;
