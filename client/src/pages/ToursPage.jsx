import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

function ToursPage() {
  const tours = [
    {
      title: "Historical Center",
      description: "Explore Berlin's historical landmarks.",
      image: "https://c.pxhere.com/photos/ae/4d/berlin_brandenburg_gate_quadriga_building_goal-748077.jpg!d",
      link: "/tours/historical",  // Ruta a la página del tour
    },
    {
      title: "Cold War",
      description: "A city divided by a wall",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg",
      link: "/tours/coldwar",
    },
    {
      title: "Street Art Tour and Berlin Alternative",
      description: "Admire the stunning graffiti across Berlin.",
      image: "https://fernwehmotive.de/wp-content/uploads/2020/06/pichi-avo-janus.jpg",
      link: "/tours/streetalternative",
    },
    {
      title: "Parks Tour",
      description: "Discover the best parks in Berlin.",
      image: "https://www.go2know.de/wp-content/uploads/2020/03/sakura-kirschbluete-berlin-bornholmer-strasse-bluetenpracht-mauerweg-boese-bruecke.jpg",
      link: "/tours/parks",
    },
    {
      title: "Mysteries and Legends",
      description: "Explore Berlin's mysteries and legends.",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/13/2b/f2/a8.jpg",
      link: "/tours/myl",
    },
    {
      title: "Potsdam and Sanssouci Palace",
      description: "Visit the beautiful Potsdam and Sanssouci Palace.",
      image: "https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/8eb851c3-cce0-466d-b214-66ff48bc403a-72_f0028731_spsg_sanssouci_palace_potsdam_l.seidel.jpg?w=2000&q=75",
      link: "/tours/potsdam",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <Link
            to={tour.link}
            key={index}
            className="block bg-white p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-200"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">{tour.title}</h2>
            <p className="text-gray-600">{tour.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToursPage;
