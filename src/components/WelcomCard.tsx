export default function WelcomeCard() {
  return (
    <div className="bg-blue-200 bg-opacity-75 w-full flex flex-col items-start rounded-md py-7 px-5 flex-1 grow lg:-mr-8 lg:-mt-8 z-10 max-w-96 min-w-64">
      <h2 className="text-lg">
        You&apos;re Invited!<br/><br/>
      </h2>
      <p>
        We are highlighting North Kirkland's beautiful gardens for the first time in over 10 years.<br/><br/>
        Money raised will go toward scholarships for Juanita High School students so come out and show them your support!<br/>
      </p>
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
