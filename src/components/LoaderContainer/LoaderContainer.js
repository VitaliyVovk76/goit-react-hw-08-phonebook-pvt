import s from "./LoaderContainer.module.css";

const LoaderContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default LoaderContainer;
