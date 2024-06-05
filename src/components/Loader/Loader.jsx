import { Puff } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#026049"
        ariaLabel="puff-loading"
        wrapperClass={css.loader}
      />
    </>
  );
}