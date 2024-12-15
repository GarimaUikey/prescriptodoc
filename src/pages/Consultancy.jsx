import React from 'react';
import { useNavigate } from 'react-router-dom';

const Consultancy = () => {
  const navigate = useNavigate();

  const specialties = [
    {
      id: 1,
      title: 'Cardiology',
      description:
        'Expert consultations for heart-related conditions and preventive care.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 2,
      title: 'Dermatology',
      description:
        'Skin care consultations for all skin types and conditions.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 3,
      title: 'Pediatrics',
      description:
        'Comprehensive care for children, from newborns to adolescents.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 4,
      title: 'Neurology',
      description:
        'Consult with specialists on brain and nervous system disorders.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 5,
      title: 'Orthopedics',
      description:
        'Treatment for bone, joint, and muscle issues from experienced doctors.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 6,
      title: 'General Medicine',
      description:
        'General health consultations and preventive check-ups.',
      image: 'https://via.placeholder.com/400x250',
    },
  ];

  const handleConsultNow = (specialty) => {
    navigate(`/consult/${specialty.id}`);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center gap-6 my-10 text-gray-900 px-5">
      <h1 className="text-3xl font-semibold">Expert Consultations</h1>
      <p className="text-center sm:w-1/2 text-gray-600">
        Choose from a variety of specialties to get expert advice tailored to your health needs.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="border border-blue-200 rounded-lg overflow-hidden shadow-md hover:translate-y-[-5px] transition-all duration-300 cursor-pointer"
          >
            <img
              src={specialty.image}
              alt={specialty.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-medium text-gray-800">
                {specialty.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{specialty.description}</p>
              <button
                onClick={() => handleConsultNow(specialty)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Consult Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultancy;

