import PropTypes from "prop-types";

export default function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    linkHref,
}) {
    return (
        <a href={linkHref} target="_blank">
            <div className="transition-transform duration-200 transform shadow-md card bg-base-100 hover:scale-105">
                <figure className="px-2 pt-2 md:px-4 md:pt-4">
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="object-cover w-full h-16 rounded-lg sm:h-32 md:h-48" // Hauteur réduite pour les mobiles
                    />
                </figure>
                <div className="items-center p-2 text-center card-body">
                    <h2 className="text-sm font-bold sm:text-base md:text-lg card-title">
                        {title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}

ProjectCard.propTypes = {
    linkHref: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
