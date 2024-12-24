import antLogo from '../../assets/ant_logo.svg';
import pieChart from '../../assets/pie_chart.svg';
import { FaArrowUpLong } from 'react-icons/fa6';

// export default function HeroSection() {
// 	return (
// 		<div className="relative mb-8">
// 			{" "}
// 			{/* Changed to mt-8 for less top margin */}
// 			<div className="bg-white rounded-lg mb-4 shadow-all-sides divide-y divide-gray-300">
// 				<div className="p-6">
// 					<div className="flex items-center gap-2">
// 						<img src={antLogo} alt="Ant Logo" className="w-6 h-6 object-contain" />
// 						<span className="text-xl text-[#081735] font-bold">AI to Detect & Autofix Bad Code</span>
// 					</div>
// 				</div>
// 				<div className="flex  justify-center items-center gap-20 p-6">
// 					<div className="text-center">
// 						<div className="text-2xl font-bold text-[#081735]">30+</div>
// 						<div className="text-2xl text-gray-600">Languages Supported</div>
// 					</div>
// 					<div className="text-center">
// 						<div className="text-2xl font-bold text-[#081735]">10K+</div>
// 						<div className="text-2xl text-gray-600">Developers</div>
// 					</div>
// 					<div className="text-center">
// 						<div className="text-2xl font-bold text-[#081735]">100K+</div>
// 						<div className="text-2xl text-gray-600">Hours Saved</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="mb-6 divide-y divide-gray-300 rounded-lg bg-white shadow-all-sides">
        <div className="mb-4 flex items-center gap-2 px-6 pb-3 pt-6">
          <img src={antLogo} alt="Ant Logo" className="h-6 w-6" />
          <span className="text-xl font-bold text-[#081735]">
            AI to Detect & Autofix Bad Code
          </span>
        </div>
        <div className="flex justify-around gap-8 px-6 pb-6 pt-3">
          <div className="flex justify-center">
            <div className="text-center font-semibold">
              30+
              <br />
              <span className="text-sm text-gray-600">Languages Support</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-center font-semibold">
              10K+
              <br />
              <span className="text-sm text-gray-600">Developers</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center font-semibold">
              100K+
              <br />
              <span className="text-sm text-gray-600">Hours Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white rounded-lg shadow-all-sides p-4 absolute -bottom-5 -right-2 z-10 translate-y-20 -translate-x"> */}
      <div className="absolute -bottom-20 -right-2 z-10 w-[280px] translate-y-10 rounded-lg bg-white p-4 shadow-all-sides">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <img src={pieChart} alt="Pie Chart" />
          </div>
          <div className="text-center text-sm font-semibold">
            <span className="flex items-center justify-center text-[#0049C6]">
              <FaArrowUpLong className="mr-1" />
              14%
            </span>
            <span className="text-sm text-gray-600">This Week</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-sm">Issues Fixed</div>
        </div>
        <div className="mt-1 text-2xl font-bold">500K+</div>
      </div>
    </div>
  );
}
