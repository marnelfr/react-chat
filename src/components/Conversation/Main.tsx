import Header from "./Header";
import React, { ReactNode, useCallback, useState } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  const [showChartList, setShowChartList] = useState<boolean>(false);

  const ShowChatListHandler = useCallback(() => {
    setShowChartList(true);
  }, []);

  return (
    <main
      className={`main ${showChartList ? undefined : "is-visible"}`}
      data-dropzone-area=""
    >
      <div className="container h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <Header onShowChatList={ShowChatListHandler} />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;
