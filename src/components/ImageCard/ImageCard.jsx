export default function ImageCard({ img, description }) {
    return (
        <div>
            <img src={img} alt={description} />
        </div>

    )
}