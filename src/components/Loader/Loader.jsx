import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={css.loader}>
            <ThreeDots
                className={css.loader}
                visible={true}
                height="80"
                width="80"
                color="#d87093"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}