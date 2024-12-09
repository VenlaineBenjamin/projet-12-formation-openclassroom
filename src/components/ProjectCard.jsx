import PropTypes from "prop-types";

export default function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    onClick,
    technologies,
}) {
    // Technology colors map
    const technologyColors = {
        React: "bg-[#66DBFB]",
        JavaScript: "bg-[#F7E025]",
        HTML: "bg-[#EC622C]",
        CSS: "bg-[#2545DB]",
        SASS: "bg-[#CC6699]",
        Redux: "bg-[#764ABC]",
    };

    // Default color for unknown technologies
    const getTechnologyColor = (tech) =>
        technologyColors[tech] || "bg-gray-500";

    return (
        <div
            className="p-4 transition-transform transform rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
            onClick={onClick}
        >
            {/* Image Section */}
            <img
                src={imgSrc}
                alt={imgAlt}
                className="object-cover w-full rounded-t-lg pointer-events-none h-52"
            />

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`inline-flex items-center gap-1 ${getTechnologyColor(
                            tech.name
                        )} text-white text-xs font-semibold py-1 px-2 rounded-full shadow-sm`}
                    >
                        {tech.icon} {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

// Prop types validation
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
