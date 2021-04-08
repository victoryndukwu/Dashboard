function DashboardCards({ icon, title, detail }) {
  return (
    <div className="flex-col w-60 h-40 bg-white shadow-lg rounded">
      <div className="m-5 ">{icon}</div>
      <div className="m-5 text-blue-600">{title}</div>
      <div className="m-5 text-gray-500 text-sm">{detail}</div>
    </div>
  );
}

export default DashboardCards;
