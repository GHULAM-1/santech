// 'use client';
// import { useState, useEffect } from 'react';
// import TimezoneSelect, { ITimezoneOption } from 'react-timezone-select';
// import { Globe2 } from 'lucide-react'; // Globe icon from Lucide

// export default function TimeZoneSelector() {
//   const [selectedTimezone, setSelectedTimezone] = useState<ITimezoneOption>({
//     value: Intl.DateTimeFormat().resolvedOptions().timeZone,
//     label: Intl.DateTimeFormat().resolvedOptions().timeZone,
//   });

//   const handleTimezoneChange = (timezone: ITimezoneOption) => {
//     setSelectedTimezone(timezone);
//   };

//   // Ensure the dropdown menu is rendered in a portal
//   useEffect(() => {
//     document.body.style.position = 'relative';
//   }, []);

//   return (
//     <div className="w-[350px] p-4 flex items-center gap-2 relative">
//       {/* Globe Icon */}
//       <Globe2 className="w-6 h-6 text-black" />

//       {/* Timezone Select Dropdown */}
//       <div className="flex-1">
//         <TimezoneSelect
//           value={selectedTimezone}
//           onChange={handleTimezoneChange}
//           menuPortalTarget={document.body} // Render the menu as a portal
//           styles={{
//             control: (base) => ({
//               ...base,
//               border: 'none',
//               boxShadow: 'none',
//               '&:hover': { border: 'none' },
//             }),
//             menuPortal: (base) => ({
//               ...base,
//               zIndex: 9999, // Ensure it's on top of everything
//             }),
//             menu: (base) => ({
//               ...base,
//               marginTop: 0, // Remove any space above the menu
//               backgroundColor: 'white',
//               borderRadius: '6px',
//               boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//             }),
//             option: (base) => ({
//               ...base,
//               color: 'black',
//               '&:hover': { backgroundColor: '#e5e5e5' },
//             }),
//             singleValue: (base) => ({
//               ...base,
//               color: 'black',
//             }),
//           }}
//         />
//       </div>
//     </div>
//   );
// }
