# Dynamic Page Builder – Next.js + Node.js + MongoDB

This project allows dynamic page creation from the backend and renders them on the frontend using reusable components.  
Users can create pages by sending JSON data (via `curl`, Postman, or Thunder Client) and access them by visiting the generated slug.

## Live Demo
Frontend: https://dynamic-webpage-frontend.onrender.com
Backend API: https://dynamic-webpage-builder-backend.onrender.com    
GitHub Repo: https://github.com/Arav20603/Dynamic-Webpage-Builder

---

## Features
- Create dynamic pages via API
- Render pages from slug dynamically
- Fully reusable components:
  - Heading
  - Text
  - Image
  - StatsBox (statistics display)
  - CTA (Call To Action)
- MongoDB for storage
- Next.js for SSR (Server Side Rendering)

---

## Tech Stack
- **Frontend:** Next.js, TailwindCSS
- **Backend:** Node.js, Express, MongoDB
- **Testing API:** Postman / Thunder Client / curl

---

## How to Use

### Create a Page
Send a POST request to create a new page:

```bash
curl -X POST https://your-backend-url.onrender.com/api/pages \
-H "Content-Type: application/json" \
-d '{
  "slug": "services",
  "components": [
    {
      "type": "heading",
      "props": {
        "content": "Our Services"
      }
    },
    {
      "type": "paragraph",
      "props": {
        "content": "At Dynamic-site, we provide modern solutions to help businesses build, manage, and grow their digital presence efficiently and creatively."
      }
    },
    {
      "type": "image",
      "props": {
        "content": "https://images.unsplash.com/photo-1581092334445-7a451b8dc6b5?auto=format&fit=crop&w=1470&q=80",
        "alt": "Developer working on a website"
      }
    },
    }
  ]
}'
```

---

## Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/Arav20603/Dynamic-Webpage-Builder.git
cd Dynamic-Webpage-Builder

cd backend
npm install
npm start

cd ../frontend
npm install
npm run dev

# configure environment variables
MONGODB_URI=your_mongodb_connection_string
PORT=5000
