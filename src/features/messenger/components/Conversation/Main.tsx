import Header from "./Header";
import React, { ReactNode, useCallback, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  const showChatList = useAppSelector((state) => state.chat.showChatList);

  return (
    <main
      className={`main ${showChatList ? undefined : "is-visible"}`}
      data-dropzone-area=""
    >
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;
