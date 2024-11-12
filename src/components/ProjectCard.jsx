import PropTypes from "prop-types";

export default function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    onClick,
}) {
    return (
        <div
            onClick={onClick} // Utilisation de onClick passé en prop
            className="z-auto cursor-pointer shadow-light dark:shadow-whites card bg-base-100"
        >
            <figure className="px-2 pt-2 md:px-4 md:pt-4">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="object-cover w-full h-16 rounded-lg sm:h-32 md:h-48"
                />
            </figure>
            <div className="items-center p-2 text-center card-body">
                <h2 className="text-sm font-bold font-title sm:text-base md:text-lg card-title">
                    {title}
                </h2>
                <p className="text-xs font-body sm:text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired, // Ajout de la prop onClick
};
