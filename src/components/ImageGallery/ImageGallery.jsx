import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, openModal }) {
    return (
        <ul className={css.list}>
            {photos.map(photo => (
                <li onClick={() => openModal(photo.id)} className={css.item} key={photo.id}>
                    <ImageCard img={photo.urls.small} description={photo.description} />
                </li>
            ))}
        </ul>
    )
}