export default function WelcomeCard() {
  return (
    <div className="h-[min(65vh,26.5rem)] top-[calc(50vh-8rem)] box-border bg-[#01a9de] bg-opacity-50 flex flex-col items-center justify-center py-7 px-5">
      <ul className="leading-6">
        <li><b>Date:</b> June 7th, 2025</li>
        <li><b>Time:</b> 10am - 3pm</li>
        <li><b>Start location:</b> <a href="https://maps.app.goo.gl/5JZjCNW6XtBTiZEN8" className="underline text-[#00485f] decoration-[#00485f]">Juanita Village Plaza</a></li>
        <li><b>Tour style:</b> self-lead</li>
        <li><b>Suggested donation:</b>
          <ul className="ml-3 leading-5 list-disc list-inside">
            <li><b>In advance:</b> $15/adult</li>
            <li><b>Day of:</b> $20/adult</li>
            <li><b>18 and under:</b> Free!</li>
          </ul>
        </li>
      </ul>
      <p className="pt-6 px-4">
        On the day of the tour, pick up your map at the Juanita Neighborhoods Association booth at Juanita Village Plaza.
        If you haven't already pre-registered for a discount online, you can register at the booth on the day of the tour.
      </p>
    </div>
  )
}
