import React from 'react';
import { Mail, Linkedin, User } from 'lucide-react';

const PersonalInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className="hidden lg:flex items-center space-x-3 bg-blue-500 bg-opacity-20 rounded px-2 py-1">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-blue-100" />
          <span className="font-medium text-white">Patel Dev Mayurbhai</span>
        </div>
        <div className="w-px h-4 bg-blue-300"></div>
        <a 
          href="mailto:pdev20203@gmail.com" 
          className="flex items-center space-x-1 text-blue-100 hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>pdev20203@gmail.com</span>
        </a>
        <div className="w-px h-4 bg-blue-300"></div>
        <a 
          href="https://www.linkedin.com/in/dev-patel-bb4556360" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-blue-100 hover:text-white transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>
      
      {/* Mobile version */}
      <div className="lg:hidden flex items-center space-x-1">
        <a 
          href="mailto:pdev20203@gmail.com" 
          className="p-1 text-blue-100 hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a 
          href="https://www.linkedin.com/in/dev-patel-bb4556360" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-1 text-blue-100 hover:text-white transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;