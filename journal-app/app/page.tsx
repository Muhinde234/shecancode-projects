import { Book, Siren } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-pink-400 flex items-center">
          <span className="mr-2">
            <Book />
          </span>
          MindTrack
        </div>
        <div>
          <Link
            href="/login"
            className=" text-pink-400 font-bold"
          >
            IGIRIMPUHWE Dositha
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-2xl  font-bold text-gray-800 leading-tight mb-6">
            Your Personal Journal,
            <span className="text-pink-600">MindTrack!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Capture your thoughts, reflect on your experiences, and gain
            insights with our MindTrack platform. Secure, private, and designed
            for your personal growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/login"
              className="bg-pink-400 py-2 px-4 rounded-lg font-bold"
            >
              login
            </Link>

            <Link
              href="#features"
              className="border  border-pink-400 py-2 px-4 rounded-lg font-bold text-pink-400"
            >
              learn more
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-200 rounded-2xl rotate-3"></div>
            <div className="relative bg-white border-2 border-indigo-100 rounded-2xl shadow-xl p-6 transform rotate-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  Today's Reflection
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="prose prose-indigo">
                <hr className="border-pink-300 mb-4" />
                <hr className="border-pink-300 mb-3" />
                <hr className="border-pink-300 mb-3" />
                <hr className="border-pink-300 mb-3" />
                <hr className="border-pink-300 mb-3" />
                <hr className="border-pink-300 mb-3" />

                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800  flex  justify-center items-center gap-4">
                    <Siren className="w-16 h-16" /> Your entries show a 25%
                    increase in positive language this week compared to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Powerful Features for Your Journaling Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                End-to-end encryption ensures your thoughts remain yours alone.
                We never share or sell your data.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Daily Prompts
              </h3>
              <p className="text-gray-600">
                Overcome writer's block with daily thought-provoking prompts
                tailored to your interests.
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Access Anywhere
              </h3>
              <p className="text-gray-600">
                Your journal is available on all devices. Write at home, on your
                phone, or anywhere you feel inspired.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journaling Journey Today
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Join thousands of users who are discovering the power of reflective
            writing.
          </p>
          <div className="flex justify-center">
            {/* Your signup button would go here */}
          </div>
          <p className="mt-6 text-indigo-200 text-sm">
            No credit card required. Free forever.
          </p>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">
                  <Book />
                </span>
                MindTrack
              </div>
              <p className="mt-2 text-sm">Your personal journaling companion</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms & conditions
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} MindTrack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
