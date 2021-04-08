import DashboardCards from "../components/DashboardCards";
import BigCards from "../components/BigCards";

function Dashboard() {
  return (
    <div className="ml-5 overflow-scroll">
      {/* name and staff id */}
      <div className="m-5 ">
        <p className="text-lg  text-blue-600">Victory Ndukwu</p>
        <p className="text-sm text-gray-600">Staff Id: POPO-001-SBA</p>
      </div>
      {/* grid containing horizontal cards */}
      <div className="grid md:grid-cols-4 mb-10">
        {/* Role - frontend */}
        <DashboardCards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
          title={"Role"}
          detail={'"Front End"'}
        />
        {/* Technology Stack */}
        <DashboardCards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          }
          title={"Technology"}
          detail={'"Next JS"'}
        />
        {/* Task */}
        <DashboardCards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
          title={"Task"}
          detail={'"Build a simple project with Next JS using Tailwind CSS"'}
        />
        {/* Duration of task */}
        <DashboardCards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          title={"Duration"}
          detail={'"14 days"'}
        />
      </div>

      <BigCards
        title={"Project Description"}
        detail={
          "A dashboard for an imaginary firm - Popo Inc. - that displays basic information of staff and the current task they are working on."
        }
      />
    </div>
  );
}

export default Dashboard;
