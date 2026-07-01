
type CardProps = {
  time: string;
  faculty: string;
  subject: string;
}
const Card = ({time, faculty, subject }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-6 space-y-4 ">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{subject}</h2>
        <p className=" font-bold text-green-700">Time: {time}</p>
        <p className="text-gray-700">Faculty: {faculty}</p>
    </div>
  )
}

export default Card
