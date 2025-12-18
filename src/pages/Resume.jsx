import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
// Import the PDF from your assets folder
import rupaResume from '../assets/G_RUPA_RESUME.pdf'; 

const Resume = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Resume</h1>
          <p className="text-gray-600 flex items-center gap-2">
            <FileText size={18} /> Updated Dec 2025
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* VIEW BUTTON: Opens in a new tab */}
          <a 
            href={rupaResume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-sm text-gray-700"
          >
            <ExternalLink size={18} /> View Fullscreen
          </a>

          {/* DOWNLOAD BUTTON: Triggers actual file download */}
          <a 
            href={rupaResume} 
            download="G_RUPA_RESUME.pdf" // This attribute forces the download
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            <Download size={18} /> Download PDF
          </a>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="bg-gray-100 rounded-3xl p-4 md:p-8 border border-gray-200 shadow-inner">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden aspect-[1/1.414] w-full max-w-4xl mx-auto border border-gray-200">
          <iframe
            src={`${rupaResume}#toolbar=0&navpanes=0`}
            title="G Rupa Resume Preview"
            className="w-full h-[600px] md:h-[1000px] border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;