export default function WelcomeCard() {
  return (
    <div className="h-[16rem] top-[calc(50vh-8rem)] box-border bg-[#01a9de] bg-opacity-50 w-screen flex flex-col items-center justify-center py-7 px-5">
      <ul className="leading-7 mt-2">
        <li><b>Date:</b> June 7th</li>
        <li><b>Time:</b> 10am - 3pm</li>
        <li><b>Location:</b> <a href="https://maps.app.goo.gl/5JZjCNW6XtBTiZEN8" className="underline text-[#00485f] decoration-[#00485f]">Juanita Village Plaza</a></li>
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
