import Spinner from "./UI/Spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner xl={true} />
    </div>
  );
};

export default Loading;
