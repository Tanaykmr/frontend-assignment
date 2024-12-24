import { FaArrowUpLong } from 'react-icons/fa6';
import antLogo from '../../assets/ant_logo.svg';
import pieChart from '../../assets/pie_chart.svg';

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
