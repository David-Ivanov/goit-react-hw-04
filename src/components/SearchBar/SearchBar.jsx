import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.query.value);
        event.target.reset()
    }

    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="query"
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit"><IoSearchOutline size={20} /></button>
            </form>
        </header>
    );
}