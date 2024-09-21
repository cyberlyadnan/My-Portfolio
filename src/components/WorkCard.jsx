import React from "react";
import { FaGithub } from "react-icons/fa";

const WorkCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-[#14182C] w-full md:w-[32%]  rounded-xl p-4 shadow-lg">
      {/* Image Section */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {/* Github Icon Overlay */}
        <div className="absolute top-0 right-3">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 rounded-full hover:bg-gray-800 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
