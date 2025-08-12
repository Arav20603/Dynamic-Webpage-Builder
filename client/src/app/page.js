
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold text-indigo-600">DynamicPageBuilder</div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#demo" className="hover:text-indigo-600">Demo Pages</a></li>
          <li><a href="#api" className="hover:text-indigo-600">API</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-50">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Build Dynamic Web Pages Instantly
          </h1>
          <p className="text-lg text-gray-600">
            Create and deploy fully rendered pages with a simple API call.
            Ideal for CMS, AI-generated content, landing pages, and more.
          </p>
          <a
            href="#api"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Explore the API
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="./builder-illustration.svg"
            alt="Dynamic Webpage Builder"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reusable Components</h3>
            <p className="text-gray-600">Cards, text blocks, images, and CTAs ready to compose any layout.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">API-Driven Pages</h3>
            <p className="text-gray-600">Send a JSON payload to create pages on-the-fly via <code>POST /api/pages</code>.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-600">New pages are live at <code>/[slug]</code> as soon as they’re created.</p>
          </div>
        </div>
      </section>

      {/* Demo Pages */}
      <section id="demo" className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Demo Pages</h2>
        <p className="text-gray-600 mb-6">
          Try out some pre-generated pages:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/about-us" className="text-indigo-600 hover:underline">/about-us</a>
          <a href="/home" className="text-indigo-600 hover:underline">/home</a>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">API Access</h2>
        <p className="text-gray-600 mb-4">Use a simple POST request to create pages dynamically.</p>
        <pre className="bg-gray-100 text-left p-4 rounded-md text-sm overflow-auto max-w-2xl mx-auto">
{`POST /api/pages
Content-Type: application/json

{
  "slug": "about-us",
  "components": [
    { "type": "heading", "props": { "content": "About Us" } },
    { "type": "paragraph", "props": { "content": "We build dynamic pages." } }
  ]
}`}
        </pre>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="bg-gray-900 text-white text-center py-10 mt-auto">
        <p className="mb-2">© {new Date().getFullYear()} DynamicPageBuilder by bino.bot</p>
        <p>Deploy. Create. Grow.</p>
      </footer>
    </main>
  );
}
