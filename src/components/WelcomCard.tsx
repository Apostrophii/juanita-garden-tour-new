export default function WelcomeCard() {
  return (
    <div className="bg-blue-200 bg-opacity-75 w-full flex flex-col items-center justify-center rounded-md py-7 px-5 flex-1 grow max-w-[90vw] min-w-64 lg:h-[43vh]">
      <ul className="leading-7 mt-2">
        <li><b>Date:</b> June 7th</li>
        <li><b>Time:</b> 10am - 3pm</li>
        <li><b>Location:</b> <a href="https://maps.app.goo.gl/5JZjCNW6XtBTiZEN8" className="underline text-sky-600 decoration-sky-600">Juanita Village Plaza</a></li>
        <li><b>Suggested donation:</b>
          <ul className="ml-3 leading-5 list-disc list-inside">
            <li><b>In advance:</b> $15/adult</li>
            <li><b>Day of:</b> $20/adult</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
