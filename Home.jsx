import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">

                {/* 👤 Profile Image */}


                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Hi, I'm <span className="text-orange-600">Qazi </span> 👋
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    React JS Developer | Frontend Enthusiast 🚀
                </p>

                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    I build modern, responsive, and user-friendly web applications using
                    React, Tailwind CSS, and JavaScript.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Link to="/projects" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                        View Projects
                    </Link>

                    <Link to="/contact" className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                        Contact Me
                    </Link>
                </div>

            </div>
        </section>
    );
}
