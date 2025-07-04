
import React, { useContext, useEffect,useState} from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


export default function App() {

  const [user,setUser]= useState(null)
  const [loggedInUserData,setloggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  
useEffect(()=>{
const loggedInUser = localStorage.getItem('loggedInUser')

if(loggedInUser){
const userData = JSON.parse(loggedInUser)
setUser(userData.role)
setloggedInUserData(userData.data)
}
},[])





useEffect(() => {
  if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
    setLocalStorage();
  }
}, []);


  
const handleLogin = (email,password)=> {
if(email=== 'admin@example.com' && password === '123'){
  setUser('admin')
  const adminData = { email, password };
  setloggedInUserData(adminData)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
}else if(userData)
  {
    const employee =  userData.find((e)=>email == e.email && e.password == password )
if(employee){
  setUser('employee')
  setloggedInUserData(employee)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
}
  
}
else{
  alert("Invalid Credentials")
}
}

const data = useContext(AuthContext)
console.log(data)
  return (
  <>
   
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
    {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
  
  </>
);
}
