function ResponsiveTab() {
  return (
    <div className="flex gap-1">
      {/* Desktop Icon */}
      <div className="icon bg-black text-white border-white rounded relative">
        <img
          className="p-2 border-white"
          src="/desktop-svg.svg"
          alt="Desktop Icon"
        />
      </div>

      {/* Mobile Icon */}
      <div className="icon bg-black border-white rounded relative">
        <img
          className="p-2 text-white"
          src="/mobile-svg.svg"
          alt="Mobile Icon"
        />
      </div>
    </div>
  );
}

export default ResponsiveTab;
