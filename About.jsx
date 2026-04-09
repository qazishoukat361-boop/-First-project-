import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src=" https://media.istockphoto.com/id/2178848997/photo/indian-software-development-working-on-coding-computer-screen-and-flowchart-at-night-in.jpg?s=2048x2048&w=is&k=20&c=bz4t32j83jHLKIySX7BKh-WsN7DgzsDrD2B_WgLps5U="
                            alt="startup"
                            className="mx-auto w-96"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development
                        </h2>
                        <p className="mt-6 text-gray-600">
                            is a modern approach to building user interfaces, especially for web applications. It uses a component-based architecture, which means the UI is divided into small, reusable pieces called components. This makes code easier to manage, debug, and scale. React also uses a virtual DOM to efficiently update and render changes, improving performance. Developers commonly use tools like React Router for navigation and Tailwind CSS or other styling libraries for design. Overall, React development helps create fast, interactive, and maintainable web applications.
                        </p>
                        <p className="mt-4 text-gray-600">
                            A logo is a visual symbol or design that represents a brand, company, or project. It helps people easily recognize and remember a business or product. A good logo is simple, unique, and meaningful, often using colors, shapes, and typography to convey a message. In web development, logos are usually placed in the header or navigation bar to create a strong identity and improve user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
