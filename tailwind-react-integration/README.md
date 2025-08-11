# Tailwind CSS Integration and UserProfile Component Styling Project

---

## 0. Setting Up Tailwind CSS in a New React Project  
**Status:** Mandatory  
**Score:** 100.0% (Checks completed: 100.0%)  

### Objective  
Install and configure Tailwind CSS in a React application to prepare for applying utility-first styling principles to React components.

### Task Description  
Create a new React project and integrate Tailwind CSS into it by following the specific setup steps.

### Steps

1. **Create a New React Project**  
   Use Vite to bootstrap the React app:  
   ```bash
   npm create vite@latest tailwind-react-integration -- --template react
   cd tailwind-react-integration
Install Tailwind CSS and Its Dependencies
Install Tailwind CSS and the Vite plugin:

bash
Copy
Edit
npm install tailwindcss @tailwindcss/vite
Configure the Vite plugin
Update vite.config.ts to include the Tailwind plugin:

ts
Copy
Edit
// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Add this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Add this
  ],
})
Include Tailwind in Your CSS
In src/index.css, add:

css
Copy
Edit
@import "tailwindcss";
Verify Installation
Run your React app to ensure Tailwind CSS is working:

bash
Copy
Edit
npm run dev
You should see the default React app running without errors.

Repository
GitHub: alx-fe-reactjs

Directory: tailwind-react-integration

1. Styling a Provided React Component with Tailwind CSS
Status: Mandatory
Score: 0.0% (Checks completed: 0.0%)

Objective
Apply Tailwind CSS to style a given React component to create a detailed and responsive design.

Task Description
Style the provided UserProfile component using Tailwind CSS according to detailed style requirements.

Provided Component
jsx
Copy
Edit
function UserProfile() {
  return (
    <div className="user-profile">
      <img src="https://via.placeholder.com/150" alt="User" />
      <h1>John Doe</h1>
      <p>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
Styling Requirements
Element	Tailwind CSS Classes & Description
Container (div)	bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg
Image (img)	rounded-full w-36 h-36 mx-auto
Heading (h1)	text-xl text-blue-800 my-4
Paragraph (p)	text-gray-600 text-base

Instructions
Create the component under src/components/UserProfile.jsx

Apply the Tailwind CSS classes directly in JSX elements

Ensure the profile card looks visually appealing and organized

Repository
GitHub: alx-fe-reactjs

Directory: tailwind-react-integration

2. Responsive Design Implementation Using Tailwind CSS
Status: Mandatory
Score: 0.0% (Checks completed: 0.0%)

Objective
Enhance the UserProfile component to be responsive and adapt to various screen sizes using Tailwind CSS responsive utilities.

Task Description
Adjust layout, padding, typography, and image size to look good on all devices.

Responsive Styling Instructions
Aspect	Tailwind Utility Examples
Container Padding	p-4 on small screens (sm:), p-8 on medium+ (md:)
Max Width	max-w-xs on small screens, max-w-sm on medium+
Heading Font Size	text-lg on small, text-xl on medium+
Paragraph Font Size	text-sm on small, text-base on medium+
Image Size	w-24 h-24 on small, w-36 h-36 on medium+

Repository
GitHub: alx-fe-reactjs

Directory: tailwind-react-integration

3. Adding Advanced Interactivity and Transitions with Tailwind CSS
Status: Mandatory
Score: 0.0% (Checks completed: 0.0%)

Objective
Add hover effects, transitions, and animations to improve user experience and engagement.

Interactivity Instructions
Element	Tailwind Classes for Interactivity
Profile Image	hover:scale-110 transition-transform duration-300 ease-in-out
Heading	hover:text-blue-500 transition-colors duration-300 ease-in-out
Container	hover:shadow-xl transition-shadow duration-300 ease-in-out

Effect Descriptions
Image slightly enlarges on hover

Heading changes to lighter blue on hover

Card shadow intensifies on hover for lifting effect

This README provides a clear, step-by-step guide for setting up Tailwind CSS and progressively styling the UserProfile component with responsive design and interactive enhancements.