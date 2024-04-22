import { DotLoader } from "react-spinners";

const Loading = ({ className }) => {
  return (
    <div className={`${className} flex justify-center p-5`}>
      <DotLoader color={`#6a87e8`} size={60} margin={2} />
    </div>
  );
};

export default Loading;
