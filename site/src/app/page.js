import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose a portfolio to view:
        </p>
        <div className="space-y-4">
          <Link 
            href="/aero" 
            className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Aerospace Portfolio
          </Link>
          <Link 
            href="/minimax" 
            className="block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Minimax Game
          </Link>
        </div>
      </div>
    </div>
  );
}
