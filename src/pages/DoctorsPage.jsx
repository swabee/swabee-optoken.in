import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLocationDot, FaStar, FaStethoscope } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';

function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
    'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad',
    'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod',
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      image:
        'https://media.istockphoto.com/id/1861987838/photo/smiling-female-doctor-looking-at-camera-in-the-medical-consultation.jpg?s=1024x1024&w=is&k=20&c=MJrGMm-cijF5hK6i8JWR1OxR-UqC5JiIPXrY7OTeDd4=',
      rating: 4.8,
      reviews: 124,
      location: 'Thiruvananthapuram',
      experience: '15 years',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      image:
        'https://images.unsplash.com/photo-1609188076864-c35269136b09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviews: 98,
      location: 'Ernakulam',
      experience: '12 years',
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrics',
      image:
        'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 156,
      location: 'Kozhikode',
      experience: '10 years',
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = !selectedDistrict || doctor.location === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Book appointments with the best doctors and specialists in your area
          </p>

          {/* Search Bar with Filter Icon */}
          <div className="relative max-w-2xl w-full mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search doctors, clinics, hospitals..."
              className="w-full px-10 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />

            {/* Search icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter icon (clickable) */}
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-500"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <IoFilter className="w-5 h-5" />
                  </div>
                  {selectedDistrict && (
                    <>
                    <span
                      className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {selectedDistrict}
                    </span>
                    <button
                      className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 text-xs"
                      onClick={() => setSelectedDistrict('')}
                    >
                      Clear
                    </button>
                    </>
                  )}
                  {/* Dropdown */}
            {filterOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                {districts.map((district, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedDistrict(district);
                      setFilterOpen(false);
                    }}
                    className={`px-4 py-2 text-left cursor-pointer hover:bg-blue-100 ${
                      selectedDistrict === district ? 'bg-blue-100 font-semibold' : ''
                    }`}
                  >
                    {district}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {doctor.name}
                    </h2>
                    <p className="text-[#0e82fd] flex items-center gap-2">
                      <FaStethoscope />
                      {doctor.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <FaLocationDot className="mr-2" />
                    {doctor.location}
                  </div>

                  <p className="text-sm text-gray-600">
                    Experience: {doctor.experience}
                  </p>
                </div>

                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-2 px-4 bg-[#0e82fd] text-white rounded-xl font-medium hover:bg-[#0e82fd]/90 transition-colors"
                  >
                    View Live Token
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;

