const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">About GitUS</h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        GitUS is a discovery tool for finding developers via the GitHub Search API.
        Filter talent by location and repository count to find exactly who you're looking for.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-2">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React (Vite)</li>
            <li>Tailwind CSS</li>
            <li>GitHub Search API</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Advanced Parameter Search</li>
            <li>Responsive UI Design</li>
            <li>Real-time API Integration</li>
            <li>Secure Deployment via Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;