import React from "react";
import { Briefcase } from "lucide-react";
import experienceData from "../data/experience";

export default function Experience() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-gray-600 text-lg">
          My professional journey and the companies I've helped grow.
        </p>
      </div>

      <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8">
        {experienceData.map((item, index) => (
          <div key={index} className="mb-12 ml-8 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] mt-1.5 w-5 h-5 bg-white border-4 border-blue-600 rounded-full z-10"></div>

            {/* Duration */}
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              {item.duration}
            </span>

            <div className="mt-2 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase size={20} className="text-gray-400" />
                <h3 className="text-xl font-bold">{item.role}</h3>
              </div>

              <p className="text-lg font-medium text-gray-700 mb-4">
                {item.company}
              </p>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-md border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
