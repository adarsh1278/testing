

export default function Stats({ logo, price, description, date, percentage }) {
  return (
    <div className="bg-white shadow-md hover:text-white text-gray-600 hover:bg-[#1E3A8A] group rounded-lg p-4 w-full min-w-[220px] h-[140px] flex flex-col justify-between">
      <div className="flex justify-between items-start">
        {/* Icon and Label */}
        <div className="flex items-center">
          <div className="bg-[#7152F30D] group-hover:bg-white p-2 rounded-lg">
            <img src={logo} alt="icon" className="w-6 h-6 group-hover:filter group-hover:brightness-0" />
          </div>
          <span className="ml-3 font-medium truncate group-hover:text-white">{description}</span>
        </div>
      </div>

      {/* Price and Percentage - Aligned on the Same Row */}
      <div className="flex justify-between items-center mt-3">
        {/* Price Amount */}
        <div className="text-2xl font-bold text-[#1b1b1b] group-hover:text-white">
          ${price}
        </div>

        {/* Percentage with Icon */}
        <div
          className={`flex items-center p-2 px-3 rounded-full ${percentage >= 0
            ? 'bg-green-100 text-green-600 group-hover:bg-white group-hover:text-black'
            : 'bg-red-100 text-red-600 group-hover:bg-white group-hover:text-black'
            }`}
        >
          {percentage >= 0 ? (
            <img src="/up.svg" className="h-4 w-4 text-green-500 group-hover:text-black" />
          ) : (
            <img src="/down.svg" className="h-4 w-4 text-red-500 group-hover:text-black" />
          )}
          <span className="ml-1 text-sm truncate group-hover:text-black">{percentage}%</span>
        </div>
      </div>

      {/* Update Date */}
      <div className="mt-1 text-sm text-gray-400 group-hover:text-white">
        Update: {date}
      </div>
    </div>
  );
}
