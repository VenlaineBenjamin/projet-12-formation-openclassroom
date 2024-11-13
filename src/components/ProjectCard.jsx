import PropTypes from "prop-types";

export default function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    onClick,
    technologies,
}) {
    const technologyColors = {
        React: "bg-blue-500",
        JavaScript: "bg-yellow-500",
        HTML: "bg-red-500",
        CSS: "bg-blue-300",
        SASS: "bg-pink-500",
        Redux: "bg-purple-500",
    };

    return (
        <div
            className="p-4 transition-transform transform rounded-lg shadow-lg cursor-pointer hover:scale-105"
            onClick={onClick}
        >
            <img
                src={imgSrc}
                alt={imgAlt}
                className="object-cover w-full rounded-t-lg h-52"
            />
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`inline-flex items-center gap-1 ${
                            technologyColors[tech.name] || "bg-gray-500"
                        } text-white text-xs font-semibold py-1 px-2 rounded-full shadow-sm`}
                    >
                        {tech.icon} {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    technologies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
        })
    ).isRequired,
};
