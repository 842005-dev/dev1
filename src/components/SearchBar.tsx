import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { getFilteredCities } from '../data/cities';

interface SearchBarProps {
  onLocationSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onLocationSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = getFilteredCities(value, 10);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    onLocationSearch(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onLocationSearch(searchTerm.trim());
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative z-50">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter Location"
            className="pl-10 pr-4 py-2 border border-blue-300 bg-white bg-opacity-90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white w-48 sm:w-64 md:w-80 text-sm sm:text-base placeholder-gray-500 text-black"
            onFocus={() => {
              if (searchTerm.length > 0) {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => {
              // Delay hiding suggestions to allow for clicks
              setTimeout(() => setShowSuggestions(false), 200);
            }}
          />
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 sm:max-h-64 overflow-y-auto z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-blue-50 flex items-center space-x-2 sm:space-x-3 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <MapPin className="w-4 h-4 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-gray-900 truncate">
                  {suggestion.split(',')[0]}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {suggestion.split(',').slice(1).join(',').trim()}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {showSuggestions && searchTerm.length > 0 && suggestions.length === 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-3 sm:p-4 z-50">
          <div className="text-sm text-gray-500 text-center">
            No cities found matching "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
