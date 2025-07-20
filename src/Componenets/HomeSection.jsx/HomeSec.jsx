import { motion } from 'framer-motion';

function HomeSec() {
  return (
    <div className="w-full min-h-[80vh] bg-slate-50 bg-[url('https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/11/banner-bg.png')] bg-center bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="relative py-12 px-4 sm:px-6 lg:px-12 lg:py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#272b41] font-bold mb-6 leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="text-[#6B7280] text-lg sm:text-xl font-normal mb-8 max-w-2xl mx-auto">
            Find and book appointments with top healthcare professionals in your area.
          </p>

          {/* Cards Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-2xl mx-auto mt-8">
            {/* Search by Doctor Card */}
            <button
              onClick={() => window.location.href = '/doctors'}
              className="flex-1 min-h-[120px] sm:min-h-[160px] rounded-xl shadow-xl p-4 sm:p-6 flex flex-col sm:flex-col items-center justify-center transition hover:scale-105 hover:shadow-2xl bg-white/30 backdrop-blur-md border border-white/20"
              style={{
                boxShadow: '0 6px 24px 0 rgba(31, 38, 135, 0.18)',
                backdropFilter: 'blur(10px) saturate(160%)',
                WebkitBackdropFilter: 'blur(10px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <div className="flex flex-row sm:flex-col items-center gap-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c3.866 0 7-1.343 7-3V7a7 7 0 10-14 0v4c0 1.657 3.134 3 7 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4h8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0e82fd] mb-1 text-center sm:text-left">
                    Search by Doctor
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2 hidden sm:block text-center">
                Find the best doctors for your needs and book appointments easily.
              </p>
            </button>

            {/* Search by Hospital Card */}
            <button
              onClick={() => window.location.href = '/doctors'}
              className="flex-1 min-h-[120px] sm:min-h-[160px] rounded-xl shadow-xl p-4 sm:p-6 flex flex-col sm:flex-col items-center justify-center transition hover:scale-105 hover:shadow-2xl bg-white/60 backdrop-blur-lg border border-white/20"
              style={{
                boxShadow: '0 6px 24px 0 rgba(31, 38, 135, 0.18)',
                backdropFilter: 'blur(10px) saturate(160%)',
                WebkitBackdropFilter: 'blur(10px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <div className="flex flex-row sm:flex-col items-center gap-3">
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M16 3v4M8 3v4M4 11h16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0e82fd] mb-1 text-center sm:text-left">
                    Search by Hospital
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2 hidden sm:block text-center">
                Browse hospitals and clinics to find the right healthcare facility.
              </p>
            </button>
          </div>

          {/* Statistics Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { count: '1000+', label: 'Verified Doctors' },
              { count: '500+', label: 'Medical Specialties' },
              { count: '98%', label: 'Patient Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-[#0e82fd] mb-2">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSec;
