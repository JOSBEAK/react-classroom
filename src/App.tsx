import { useState } from "react";
import Card from "./Card";

   const timetable = [
    {
      id: 1,
      time: "9:00 AM - 10:00 AM",
      subject: "Mathematics",
      faculty: "Dr. Sharma",
    },
    {
      id: 2,
      time: "10:00 AM - 11:00 AM",
      subject: "Physics",
      faculty: "Prof. Verma",
    },
    {
      id: 3,
      time: "11:15 AM - 12:15 PM",
      subject: "Chemistry",
      faculty: "Dr. Singh",
    },
    {
      id: 4,
      time: "1:00 PM - 2:00 PM",
      subject: "Computer Science",
      faculty: "Ms. Gupta",
    },
  ];
function App() {

  const [newTimetable, setNewTimetable] = useState(timetable);

  const addLecture = () => {


    const newLecture = {
      id: newTimetable.length + 1,
      time: "9:00 AM - 10:00 AM",
      subject: "New Subject",
      faculty: "New Faculty",
    };
    setNewTimetable([...newTimetable, newLecture]);

    console.log(newTimetable)
    
  }
  return (
    <div className = 'flex flex-wrap gap-4 p-4 items-center justify-center bg-gray-100 min-h-screen'>
     {newTimetable.map((item) => (
        <Card
          key={item.id}
          time={item.time}
          subject={item.subject}
          faculty={item.faculty}
        />
      ))}
      <button onClick={addLecture} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> + Add Lecture</button>
    </div>
  )
}

export default App
