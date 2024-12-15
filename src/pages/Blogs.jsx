import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogsData = [
  {
    id: 1,
    title: 'The Importance of Regular Health Check-ups',
    description:
      'Learn why regular health check-ups are essential for early detection and prevention of diseases.',
    image: 'https://images.app.goo.gl/NEvaN3ADiRwu6UPY6',
  },
  {
    id: 2,
    title: 'Top Tips for a Healthy Lifestyle',
    description:
      'Discover the best tips for maintaining a healthy lifestyle through diet, exercise, and more.',
    image: 'https://images.app.goo.gl/j1AMofeNNRj2rfWYA',
  },
  {
    id: 3,
    title: 'How to Choose the Right Doctor for You',
    description:
      'Finding the right doctor can be overwhelming. Read our guide to make the process easier.',
    image: 'https://images.app.goo.gl/qRf2KZ7cKviuJEeJA',
  },
  {
    id: 4,
    title: 'The Role of Nutrition in Preventative Care',
    description:
      'Explore how proper nutrition plays a critical role in preventing chronic illnesses.',
    image: 'https://images.app.goo.gl/C6Ljua1StFBi1sTS6',
  },
  {
    id: 5,
    title: 'Managing Stress for Better Health',
    description:
      'Learn effective techniques to manage stress and improve your overall well-being.',
    image: 'https://images.app.goo.gl/koEWSzmxnnL83pEw5',
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    // Navigate to a detailed blog page when clicking 'Read More'
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center gap-6 my-10 text-gray-900 px-5">
      <h1 className="text-3xl font-semibold">Latest Health Blogs</h1>
      <p className="text-center sm:w-1/2 text-gray-600">
        Stay informed with our latest blogs on health tips, wellness, and more.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="border border-blue-200 rounded-lg overflow-hidden shadow-md hover:translate-y-[-5px] transition-all duration-300 cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-medium text-gray-800">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <button
                onClick={() => handleReadMore(blog.id)}
                className="mt-4 text-blue-600 hover:underline"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
