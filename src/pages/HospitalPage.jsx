import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLocationDot, FaStar } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';

function HospitalPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
    'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad',
    'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod',
  ];

  const hospitals = [
    {
      id: 1,
      name: 'CityCare Hospital',
      type: 'Multi-specialty',
      image: 'https://static.vecteezy.com/system/resources/previews/038/252/707/non_2x/hospital-building-illustration-medical-clinic-isolated-on-white-background-vector.jpg',
      rating: 4.6,
      reviews: 89,
      location: 'Ernakulam',
      established: '2005',
    },
    {
      id: 2,
      name: 'Green Valley Medical Center',
      type: 'Cardiology & Emergency',
      image: 'https://static.vecteezy.com/system/resources/previews/038/252/707/non_2x/hospital-building-illustration-medical-clinic-isolated-on-white-background-vector.jpg',
      rating: 4.7,
      reviews: 102,
      location: 'Kozhikode',
      established: '2010',
    },
    {
      id: 3,
      name: 'Sunrise Hospital',
      type: 'General',
      image: 'https://static.vecteezy.com/system/resources/previews/038/252/707/non_2x/hospital-building-illustration-medical-clinic-isolated-on-white-background-vector.jpg',
      rating: 4.5,
      reviews: 76,
      location: 'Thrissur',
      established: '2000',
    },
  ];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = !selectedDistrict || hospital.location === selectedDistrict;
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
            Find Hospitals
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover trusted hospitals and medical centers near you.
          </p>

          {/* Search and Filter */}
          <div className="relative max-w-2xl w-full mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search hospitals..."
              className="w-full px-10 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-500"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <IoFilter className="w-5 h-5" />
            </div>

            {selectedDistrict && (
              <>
                <span className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
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

        {/* Hospital Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredHospitals.map((hospital, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Hospital Image */}
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{hospital.type}</span>
          <div className="flex items-center text-yellow-400 text-sm">
            <FaStar className="mr-1" />
            {hospital.rating}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1">{hospital.name}</h3>
        <div className="text-sm text-gray-600 flex items-center mb-4">
          <FaLocationDot className="mr-1" />
          {hospital.location}
        </div>
      </div>

      {/* View Doctors Button */}
      <button
        onClick={() => window.location.href = '/doctors'}
        className="text-sm sm:text-base font-medium border-[#0e82fd] border-solid border-2 rounded-md p-2 w-full hover:bg-[#0e82fd] hover:text-white hover:border-[#0e82fd] transition duration-300 transform hover:-translate-y-1"
      >
        View Doctors
      </button>
    </motion.div>
  ))}
</div>


      </div>
    </div>
  );
}

export default HospitalPage;
