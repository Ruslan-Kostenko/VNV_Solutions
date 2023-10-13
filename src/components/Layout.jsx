// import { Suspense, useEffect, useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// export const Layout = () => {
//   const [home, setHome] = useState(null);
//   const [services, setServices] = useState(1);
//   const [projects, setProjects] = useState(1);
//   const [team, setTeam] = useState(1);
//   const [kuy, setKuy] = useState(null);

//   useEffect(() => {
//     const homeValue = localStorage.getItem('home');
//     const projectValue = localStorage.getItem('projects');
//     const teamValue = localStorage.getItem('team');
//     const serviceValue = localStorage.getItem('services');

//     if (projectValue) {
//       setHome(JSON.parse(homeValue));
//       setServices(JSON.parse(serviceValue));
//       setTeam(JSON.parse(teamValue));
//       setProjects(JSON.parse(projectValue));
//     }
//   }, []);

//   useEffect(() => {
//     if (kuy) {
//       localStorage.setItem('home', JSON.stringify(home));
//       localStorage.setItem('projects', JSON.stringify(projects));
//       localStorage.setItem('team', JSON.stringify(team));
//       localStorage.setItem('services', JSON.stringify(services));

//     }
//   }, [home, projects, team, services, kuy]);

//   const onHandleHome = () => {
//     setHome(null);
//     setServices(1);
//     setProjects(1);
//     setTeam(1);
//     setKuy(1);
    
//   };

//   const onHandleServices = () => {
//     setServices(null);
//     setHome(1);
//     setTeam(1);
//     setProjects(null);
//     setKuy(1);
    
//   };

//   const onHandleTeam = () => {
//     setTeam(null);
//     setProjects(null);
//     setHome(1);
//     setServices(1);
//     setKuy(1);
    
//   };

//   return (
//     <>
//       <header>
//         <nav>
//           {home && (
//             <NavLink to="/" onClick={onHandleHome}>
//               Home
//             </NavLink>
//           )}
//           {services && (
//             <NavLink to="/services" onClick={onHandleServices}>
//               Services
//             </NavLink>
//           )}
//           {projects && <NavLink to="/projects">Projects</NavLink>}
//           {team && (
//             <NavLink to="/team" onClick={onHandleTeam}>
//               Team
//             </NavLink>
//           )}
//         </nav>
//       </header>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
