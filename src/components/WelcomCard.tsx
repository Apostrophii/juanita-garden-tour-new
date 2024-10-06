export default function WelcomeCard() {
  return (
    <div className="bg-blue-500 bg-opacity-50 w-9/12 flex flex-col items-center rounded-md py-7 px-5 flex-1">
      <h2 className="text-lg">
        You&apos;re Invited!
      </h2>
      <ul className="leading-7 mt-2">
        <li><b>Date:</b> June 7th</li>
        <li><b>Time:</b> 10-3pm</li>
        <li><b>Location:</b> Juanita Village Plaza</li>
        <li><b>Price</b> <i>(suggested donation):</i>
          <ul className="ml-3 leading-5 list-disc list-inside">
            <li><b>In advance:</b> $15/Adult</li>
            <li><b>Day of:</b> $20/Adult</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
