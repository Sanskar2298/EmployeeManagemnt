



const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Submit report",
        description: "Submit the Q2 sales report to manager",
        date: "2025-06-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Update client list",
        description: "Add recent clients to the CRM",
        date: "2025-06-19",
        category: "CRM",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Team meeting",
        description: "Join the marketing sync-up",
        date: "2025-06-21",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Bug fixing",
        description: "Fix login issue on mobile",
        date: "2025-06-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Push to GitHub",
        description: "Push updated code to main branch",
        date: "2025-06-20",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Code review",
        description: "Review PR #203",
        date: "2025-06-21",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Unit testing",
        description: "Add tests for auth module",
        date: "2025-06-22",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Diya",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Design banner",
        description: "Create a banner for the homepage",
        date: "2025-06-19",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Research competitors",
        description: "Analyze top 3 market competitors",
        date: "2025-06-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Meeting with vendor",
        description: "Discuss pricing and features",
        date: "2025-06-21",
        category: "Logistics",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstname: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare invoice",
        description: "Create invoice for client X",
        date: "2025-06-18",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Audit prep",
        description: "Prepare documents for audit",
        date: "2025-06-20",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Budget planning",
        description: "Plan next quarter's budget",
        date: "2025-06-23",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Ishita",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "System monitoring",
        description: "Check logs for unusual activity",
        date: "2025-06-20",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Reset server",
        description: "Restart backend services",
        date: "2025-06-19",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Fix DNS issue",
        description: "Resolve internal network resolution errors",
        date: "2025-06-21",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Firewall config",
        description: "Update firewall rules",
        date: "2025-06-22",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


 const admin = 
  {
    "email": "admin@example.com",
    "password": "123"
  };


export const setLocalStorage = () => {
localStorage.setItem('employee',JSON.stringify(employees))

localStorage.setItem('admin',JSON.stringify(admin))




}

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employee'))
const admin = JSON.parse(localStorage.getItem('admin'))

return {employees,admin};

};