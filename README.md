# My Portfolio

A modern, interactive 3D portfolio website built with React.js and Three.js, showcasing projects and skills with immersive animations and visual elements.

![Portfolio Preview](public/website-preview.png)

## Features

- **Interactive 3D Hero Section**: Custom 3D computer model with animations
- **Dynamic Project Showcases**: Animated sections with project details, GitHub links, and live demos
- **3D Skills Visualization**: Interactive spheres representing technology proficiencies
- **Animated Work Experience**: Timeline-based display of professional experience
- **Contact Section with 3D Earth**: Interactive globe model with EmailJS integration
- **Responsive Design**: Optimized for all device sizes with tailored layouts
- **Performant 3D Rendering**: Optimized loading and rendering of 3D elements

## Technologies Used

- **Frontend**: React.js
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Contact Form**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Installation

1. Clone the repository
```bash
git clone https://github.com/ManishBej/My-Portfolio.git
cd My-Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Running the Project

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the project in your browser.

## Building for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory ready for deployment.

## Project Structure

- `/public` - Static assets and 3D models
- `/src`
  - `/assets` - Images and icons
  - components - React components
  - `/constants` - Configuration data
  - hoc - Higher-order components
  - `/utils` - Helper functions

## Performance Optimizations

- Lazy loading of 3D models
- Optimized textures and geometries
- Code splitting for faster initial load time
- Responsive design considerations for mobile devices
- Compressed assets for improved load times

## Acknowledgments

- 3D models used with appropriate licenses
- Inspiration from modern web design trends
- Community support and feedback

## License

MIT