# AccuWeather-Inspired Weather Application

A modern, responsive weather application built with React and TypeScript, featuring a professional AccuWeather-style interface with comprehensive weather information and forecasting capabilities.

![Weather App Screenshot](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Weather+Application+Screenshot)

## 🌟 Features

### Current Weather
- **Real-time weather display** with temperature, conditions, and location
- **Detailed weather metrics** including feels-like temperature, humidity, wind speed
- **Dynamic weather icons** that change based on current conditions
- **Gradient backgrounds** that adapt to weather conditions

### Forecasting
- **5-day weather forecast** with daily highs, lows, and precipitation chances
- **Hourly forecast** showing temperature trends and weather changes
- **Weather condition indicators** with intuitive icons and descriptions

### Advanced Features
- **Location search** with autocomplete suggestions
- **Weather alerts** and notifications for severe conditions
- **Air quality index** with health recommendations
- **Sun and moon information** including sunrise/sunset times
- **Detailed weather metrics** (pressure, visibility, UV index)

### User Experience
- **Responsive design** optimized for desktop, tablet, and mobile devices
- **Professional AccuWeather-style interface** with modern UI components
- **Smooth animations** and hover effects for enhanced interactivity
- **Loading states** and error handling for better user experience

## 🚀 Live Demo

Visit the live application: [https://clever-maamoul-3e9cbf.netlify.app](https://clever-maamoul-3e9cbf.netlify.app)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable SVG icons
- **ESLint** - Code linting and quality assurance

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Build and Deployment

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint for code quality
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Deployment
The application is configured for easy deployment to:
- **Netlify** (current deployment)
- **Vercel**
- **GitHub Pages**
- Any static hosting service

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── WeatherCard.tsx      # Main weather display card
│   ├── ForecastCard.tsx     # Individual forecast item
│   ├── HourlyForecast.tsx   # Hourly weather timeline
│   ├── WeatherDetails.tsx   # Detailed weather metrics
│   ├── SearchBar.tsx        # Location search functionality
│   └── PersonalInfo.tsx     # Developer contact information
├── types/               # TypeScript type definitions
│   └── weather.ts          # Weather data interfaces
├── data/               # Mock data and API utilities
│   └── mockData.ts         # Sample weather data
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

### Visual Design
- **Modern gradient backgrounds** that adapt to weather conditions
- **Card-based layout** with subtle shadows and rounded corners
- **Consistent color scheme** with blue and orange accent colors
- **Professional typography** with proper hierarchy and spacing

### Responsive Design
- **Mobile-first approach** with breakpoints for all screen sizes
- **Flexible grid layouts** that adapt to different viewports
- **Touch-friendly interactions** optimized for mobile devices
- **Optimized content display** for both desktop and mobile users

### User Interface
- **Intuitive navigation** with clear visual cues
- **Interactive elements** with hover states and transitions
- **Loading animations** for better perceived performance
- **Error handling** with user-friendly messages

## 🔧 Customization

### Adding New Weather Metrics
1. Update the `WeatherData` interface in `src/types/weather.ts`
2. Add the new metric to `mockData.ts`
3. Update the `WeatherDetails` component to display the new information

### Styling Modifications
- Modify `tailwind.config.js` for custom colors and spacing
- Update component styles using Tailwind utility classes
- Add custom CSS in `src/index.css` for global styles

### API Integration
Replace mock data in `src/data/mockData.ts` with real weather API calls:
- OpenWeatherMap API
- WeatherAPI
- AccuWeather API

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow the existing code style and TypeScript conventions
2. Add appropriate type definitions for new features
3. Test your changes across different screen sizes
4. Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Patel Dev Mayurbhai**
- 📧 Email: [pdev20203@gmail.com](mailto:pdev20203@gmail.com)
- 💼 LinkedIn: [dev-patel-bb4556360](https://www.linkedin.com/in/dev-patel-bb4556360)

## 🙏 Acknowledgments

- Weather icons and design inspiration from AccuWeather
- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!