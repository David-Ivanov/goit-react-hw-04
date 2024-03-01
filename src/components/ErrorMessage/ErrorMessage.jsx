import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <p className={css.error}>Sorry, something goes wrong!</p>
    );
}