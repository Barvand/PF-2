function ResponsiveTab({ onSelectDesktop, onSelectMobile, activeTab }) {
  return (
    <div className="flex gap-1">
      {/* Desktop Icon */}
      <div
        className={`${
          activeTab === "desktop" ? "border-2 border-white" : ""
        } icon bg-black text-white relative cursor-pointer items-center`}
        onClick={onSelectDesktop}
      >
        <img className="" src="/desktop-svg.svg" alt="Desktop Icon" />
      </div>

      {/* Mobile Icon */}
      <div
        className={`${
          activeTab === "mobile" ? "border-2 border-white" : ""
        } icon bg-black text-white rounded relative cursor-pointer`}
        onClick={onSelectMobile}
      >
        <img className=" text-white" src="/mobile-svg.svg" alt="Mobile Icon" />
      </div>
    </div>
  );
}

export default ResponsiveTab;
