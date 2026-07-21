
import { notFound } from "next/navigation";
import React from 'react';
import { services as serviceData } from '@/app/lib/schema';
import Link from "next/link";

// Define the shape of the content for each service page
interface ServicePageContent {
    [key: string]: {
        title: string;
        content: JSX.Element;
    };
}

const servicePageContent: ServicePageContent = {
  'emergency-plumbing': {
    title: '24/7 Emergency Plumber in Denver & Englewood',
    content: (
      <>
        <p className="lead">When a plumbing crisis strikes, every second counts. A burst pipe flooding your basement, a sewer backing up into your home, or the sudden smell of gas are not just inconveniences—they are emergencies that threaten your property, your safety, and your peace of mind. Peach Tree Plumbing is the leading provider of <strong>24/7 emergency plumbing services in Denver, Englewood, and the surrounding metro area</strong>. Our mission is to deliver immediate, expert solutions to resolve your crisis, mitigate damage, and restore normalcy with professionalism and speed.</p>
        <hr className="my-5" />

        <h2 className="fw-bold h3">Understanding a True Plumbing Emergency</h2>
        <p>It can be difficult to know when a plumbing issue crosses the line from a routine repair to a full-blown emergency. As a rule, an emergency is any situation that poses an immediate risk to your health, safety, or property. This includes:</p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item"><strong>Major Water Leaks & Burst Pipes:</strong> Uncontrolled water flow that can lead to significant structural damage, electrical hazards, and mold growth.
          </li>
          <li className="list-group-item"><strong>Sewer System Backup:</strong> Raw sewage backing up through drains, toilets, or showers, posing a serious health hazard.
          </li>
          <li className="list-group-item"><strong>Suspected Gas Leaks:</strong> The smell of rotten eggs or sulfur is a critical sign of a natural gas leak, which is a fire and explosion risk. If you smell gas, evacuate immediately, call your gas company from outside, and then call us.
          </li>
           <li className="list-group-item"><strong>No Water in the Home:</strong> A sudden, complete loss of water could indicate a problem with your water main and requires immediate attention.
           </li>
        </ul>
        <p>If you are experiencing any of these situations, do not hesitate. Call our emergency hotline immediately. Delaying can increase the damage and the cost of repairs exponentially.</p>

        <h2 className="fw-bold h3 mt-5">Our Emergency Plumbing Protocol: What to Expect When You Call</h2>
        <p>When you call Peach Tree Plumbing in an emergency, you set in motion a rapid-response protocol honed by years of experience in the Denver area.</p>
        <ol>
          <li><strong>Immediate Triage:</strong> Our on-call expert will listen to your situation and may provide initial guidance over the phone, such as how to shut off your main water supply, to prevent further damage while our team is en route.</li>
          <li><strong>Rapid Dispatch:</strong> We dispatch a licensed, fully-equipped emergency plumber to your location. Our vans are rolling warehouses, stocked with the parts and tools needed to handle the vast majority of plumbing emergencies on the first visit.</li>
          <li><strong>On-Site Assessment & Upfront Pricing:</strong> Our plumber will quickly and accurately diagnose the problem, explain the necessary repairs in clear terms, and provide you with a transparent, upfront price before any work begins. There are no hidden fees.</li>
          <li><strong>Expert Resolution:</strong> Whether it requires repairing a burst pipe, clearing a main sewer line with a hydro-jetter, or securing a gas line, our plumber will execute the solution efficiently and effectively, adhering to the highest standards of safety and quality.</li>
           <li><strong>Damage Mitigation & Post-Service Support:</strong> Our job isn&apos;t done until the immediate crisis is averted. We will advise you on any necessary next steps for water damage restoration and ensure your plumbing system is functioning safely.
           </li>
        </ol>

         <h2 className="fw-bold h3 mt-5">In-Depth: Most Demanded Emergency Plumbing Tasks</h2>

        <h3 className="fw-bold h4 mt-4">Burst Pipe and Major Leak Repair</h3>
        <p>The harsh freeze-thaw cycles in Colorado make burst pipes a common and devastating emergency. When a pipe bursts, it can release several gallons of water per minute, flooding your home and causing catastrophic damage. Our technicians are experts in locating the source of the leak, whether it&apos;s in a wall, a ceiling, or under a slab. We perform swift, durable repairs using high-quality materials like copper or PEX to secure the line and prevent future failures. We also work to minimize demolition and will perform the repair with surgical precision to save you on restoration costs.</p>

        <h3 className="fw-bold h4 mt-4">Sewer and Drain Line Backup Clearance</h3>
        <p>A main line clog is one of the most stressful plumbing emergencies. It brings your entire home&apos;s plumbing to a standstill and can introduce hazardous waste into your living space. Our most demanded service for this is <strong>hydro-jetting</strong>. Unlike a traditional snake, which just punches a hole through the blockage, a hydro-jetter uses high-pressure water (up to 4000 PSI) to obliterate the clog—be it tree roots, grease buildup, or other obstructions—and scour the entire inner diameter of the pipe clean. This not only solves the immediate problem but also helps prevent future backups.</p>

         <h3 className="fw-bold h4 mt-4">Emergency Water Heater Repair & Replacement</h3>
        <p>A failed water heater can mean a sudden cold shower, or worse, a tank leak that floods the surrounding area. Our emergency service covers both tank-style and tankless water heaters. Common emergency tasks include replacing faulty heating elements or thermocouples, addressing pilot light failures on gas models, and, most critically, responding to leaking tanks. If a tank is actively leaking, we can perform an emergency shutdown and replacement to get your hot water back on and prevent serious water damage.</p>

        <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Plumbing Emergencies</h2>

        <div className="accordion" id="faqAccordionEmergency">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOneEmergency">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneEmergency" aria-expanded="false" aria-controls="collapseOneEmergency">
                <strong>How can I shut off my water in an emergency?</strong>
              </button>
            </h2>
            <div id="collapseOneEmergency" className="accordion-collapse collapse" aria-labelledby="headingOneEmergency" data-bs-parent="#faqAccordionEmergency">
              <div className="accordion-body">
                In most homes in the Denver area, the main water shut-off valve is located in the basement, on an exterior wall where the water service line enters the house. It may also be in a utility closet or crawl space. Look for a wheel-handle (gate valve) or a lever-handle (ball valve). Turn it clockwise until it stops. If you can&apos;t find it or it won&apos;t turn, call us immediately.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwoEmergency">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoEmergency" aria-expanded="false" aria-controls="collapseTwoEmergency">
                <strong>Is my plumbing emergency covered by my homeowner&apos;s insurance?</strong>
              </button>
            </h2>
            <div id="collapseTwoEmergency" className="accordion-collapse collapse" aria-labelledby="headingTwoEmergency" data-bs-parent="#faqAccordionEmergency">
              <div className="accordion-body">
                Most standard homeowner&apos;s insurance policies cover the *damage* caused by a sudden and accidental plumbing failure (like a burst pipe), but not the cost of repairing the pipe itself. Coverage varies greatly, so it is crucial to contact your insurance provider. We provide detailed, itemized invoices that can help you with your insurance claim.
              </div>
            </div>
          </div>
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingThreeEmergency">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeEmergency" aria-expanded="false" aria-controls="collapseThreeEmergency">
                <strong>What&apos;s the difference between a drain snake and hydro-jetting?</strong>
              </button>
            </h2>
            <div id="collapseThreeEmergency" className="accordion-collapse collapse" aria-labelledby="headingThreeEmergency" data-bs-parent="#faqAccordionEmergency">
              <div className="accordion-body">
               A drain snake (or auger) is a mechanical tool that physically breaks up a clog or hooks onto it to be pulled out. It&apos;s effective for simple clogs. Hydro-jetting is a far more powerful and comprehensive solution. It uses a high-pressure hose to spray water in a 360-degree pattern, not only destroying the blockage (even invasive tree roots) but also cleaning the entire pipe wall, which helps prevent future clogs. It is the preferred method for main line backups and commercial drain maintenance.
              </div>
            </div>
          </div>
        </div>
        <p className="fw-bold mt-5">In a plumbing emergency, you need a team you can trust to act fast and get the job done right. Peach Tree Plumbing is that team. Save our number. When crisis strikes, day or night, call us at <Link href="tel:720-298-1900">720-298-1900</Link> for immediate, expert help.</p>
      </>
    )
  },
  'water-heaters': {
    title: 'Water Heater Repair & Installation in Denver',
    content: (
        <>
            <p className="lead">From a hot morning shower to clean dishes and laundry, a reliable water heater is the unsung hero of your home. When it falters, your entire daily routine is disrupted. Peach Tree Plumbing offers <strong>expert water heater repair, replacement, and installation services across the Denver metropolitan area</strong>. We are masters of our craft, specializing in diagnosing complex issues, performing precision repairs, and installing modern, high-efficiency systems that provide lasting value.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3">Diagnosing the Problem: When to Call a Professional</h2>
            <p>Water heaters often give warning signs before a complete failure. Recognizing these signs can save you from a cold shower and a potential flood. Call us if you notice:</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>No Hot Water or Lukewarm Water:</strong> The most obvious sign. This can be caused by a faulty heating element (electric), a thermocouple or pilot light issue (gas), or a malfunctioning thermostat.</li>
                <li className="list-group-item"><strong>Strange Noises (Popping, Rumbling, Whining):</strong> This is often a sign of significant sediment buildup at the bottom of your tank. The noise is water boiling and bubbling up through the sediment layer. This is a serious issue that reduces efficiency and can lead to tank failure.</li>
                <li className="list-group-item"><strong>Leaking From the Tank:</strong> Any water pooling around the base of your water heater is a critical issue. While it could be a simple fix like a loose connection or a faulty temperature and pressure (T&P) relief valve, it often signifies internal corrosion and impending tank failure.</li>
                 <li className="list-group-item"><strong>Rusty or Discolored Water:</strong> If you only see rusty water when you turn on the hot tap, it&apos;s a strong indication that the inside of your water heater&apos;s tank is corroding. The anode rod, which is supposed to prevent this, may be depleted.</li>
                 <li className="list-group-item"><strong>Foul Odor:</strong> A rotten egg smell from your hot water is often caused by bacteria flourishing in the sediment layer within the tank.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Our Most Demanded Water Heater Services</h2>
            
            <h3 className="fw-bold h4 mt-4">Water Heater Repair</h3>
            <p>Before recommending a full replacement, our first priority is always to see if a cost-effective repair can be made. Our technicians are highly skilled in troubleshooting all makes and models, both gas and electric. Our most common repairs include:</p>
            <ul>
                <li><strong>Thermocouple Replacement:</strong> A common and inexpensive fix for gas water heaters that won&apos;t stay lit.</li>
                <li><strong>Heating Element and Thermostat Replacement:</strong> The most frequent repair for electric models experiencing a loss of heat.</li>
                <li><strong>T&P Valve Replacement:</strong> A crucial safety component that can sometimes leak and require replacement.</li>
                <li><strong>Gas Control Valve/Burner Assembly Repair:</strong> A more complex repair for gas heaters that our certified professionals are qualified to perform.</li>
            </ul>

            <h3 className="fw-bold h4 mt-4">Water Heater Installation and Replacement</h3>
            <p>An average tank-style water heater lasts about 8-12 years. If your unit is in that age range and experiencing issues, replacement is often the most economical choice. A new, modern water heater will be more energy-efficient, saving you money on your utility bills. Our installation process is meticulous:</p>
            <ol>
                <li><strong>Proper Sizing:</strong> We help you select the right size tank for your family&apos;s needs to ensure you never run out of hot water.</li>
                <li><strong>Code Compliance:</strong> We ensure your new installation is 100% up to all local Denver and Englewood plumbing and safety codes, including proper ventilation, seismic strapping, and expansion tank installation where required.</li>
                <li><strong>Professional Connections:</strong> We use high-quality materials for all water and gas connections, ensuring a leak-free, reliable setup.</li>
                <li><strong>Old Unit Disposal:</strong> We will safely drain and remove your old water heater from your property.</li>
            </ol>

            <h2 className="fw-bold h3 mt-5">The Tankless Revolution: Upgrade to Endless Hot Water</h2>
            <p>One of the most popular upgrades we perform is the switch from a traditional tank to a <strong>tankless water heater</strong>. Instead of constantly keeping 40-50 gallons of water hot, a tankless unit heats water on demand, the instant you turn on the tap. The benefits are significant:</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Endless Hot Water:</strong> Never run out of hot water again, even if you have a full house of guests.</li>
                <li className="list-group-item"><strong>Energy Savings:</strong> By only heating water when you need it, you can reduce your water heating costs by up to 30-40%.</li>
                <li className="list-group-item"><strong>Longer Lifespan:</strong> Tankless water heaters can last 20 years or more, nearly double the life of a traditional tank.</li>
                <li className="list-group-item"><strong>Space Savings:</strong> These compact units are mounted on a wall, freeing up valuable floor space where your old tank used to be.</li>
            </ul>
            <p>Our team specializes in tankless conversions, handling everything from selecting the right-sized unit for your home&apos;s flow rate to upgrading gas lines if necessary for proper performance.</p>

            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Water Heaters</h2>

            <div className="accordion" id="faqAccordionWaterHeater">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneWH">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneWH" aria-expanded="false" aria-controls="collapseOneWH">
                            <strong>How long should my water heater last?</strong>
                        </button>
                    </h2>
                    <div id="collapseOneWH" className="accordion-collapse collapse" aria-labelledby="headingOneWH" data-bs-parent="#faqAccordionWaterHeater">
                        <div className="accordion-body">
                            In the Denver area, a typical tank-style water heater lasts between 8 and 12 years. The area&apos;s hard water can contribute to sediment buildup and corrosion, which can shorten the lifespan. A tankless water heater, on the other hand, can last 20 years or more with proper maintenance.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoWH">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoWH" aria-expanded="false" aria-controls="collapseTwoWH">
                            <strong>Is a tankless water heater worth the extra cost?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoWH" className="accordion-collapse collapse" aria-labelledby="headingTwoWH" data-bs-parent="#faqAccordionWaterHeater">
                        <div className="accordion-body">
                            For most homeowners, yes. While the upfront investment is higher, the long-term benefits—endless hot water, significant energy savings, a longer lifespan, and saved space—provide a strong return on investment. It&apos;s a particularly good choice for larger families or anyone who values the convenience and efficiency.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeWH">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeWH" aria-expanded="false" aria-controls="collapseThreeWH">
                            <strong>What is preventative maintenance for a water heater?</strong>
                        </button>
                    </h2>
                    <div id="collapseThreeWH" className="accordion-collapse collapse" aria-labelledby="headingThreeWH" data-bs-parent="#faqAccordionWaterHeater">
                        <div className="accordion-body">
                            The most important maintenance task for a tank-style heater is to have it flushed annually. This process drains the tank and removes the sediment that builds up, which improves efficiency and extends the life of the heater. We also inspect the anode rod, a critical component that protects the tank from rust, and check the T&P valve for safe operation.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Whether you need an urgent repair, a high-efficiency replacement, or want to explore the benefits of a tankless system, Peach Tree Plumbing has the expertise to get the job done right. Contact us today at <Link href="tel:720-298-1900">720-29h-1900</Link> for a free consultation and estimate.</p>
        </>
    )
  },
  'leak-detection': {
    title: 'Advanced Leak Detection Services in Denver',
     content: (
        <>
            <p className="lead">A hidden leak is a silent threat to your home and your wallet. Unseen drips behind walls, under floors, or beneath your foundation can cause thousands of dollars in structural damage and create a breeding ground for mold. Peach Tree Plumbing provides <strong>expert, non-invasive leak detection services for residents and businesses in Denver and Englewood</strong>, using state-of-the-art technology to pinpoint the exact location of a leak without destroying your property.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3">The &apos;Why&apos;: Understanding the Dangers of Hidden Leaks</h2>
            <p>Many homeowners underestimate the destructive power of a persistent leak. It&apos;s not just about the wasted water; it&apos;s about protecting the integrity of your home. A leak can:</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Compromise Your Foundation:</strong> A slab leak—a leak in the pipes beneath your home&apos;s concrete foundation—can cause the soil to shift, leading to cracks in your foundation, walls, and floors.</li>
                <li className="list-group-item"><strong>Promote Toxic Mold Growth:</strong> Persistent moisture from a hidden leak creates the perfect environment for black mold, which can cause serious respiratory issues and other health problems.</li>
                <li className="list-group-item"><strong>Destroy Building Materials:</strong> Wood rot, crumbling drywall, and ruined flooring are common consequences of untreated leaks.</li>
                 <li className="list-group-item"><strong>Skyrocket Your Water Bill:</strong> A single, small leak can waste thousands of gallons per month, leading to an unexpectedly high utility bill. This is often the first and only sign a homeowner has of a problem.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Our Technology: The Most Advanced Leak Detection Tools</h2>
            <p>Guesswork has no place in professional leak detection. At Peach Tree Plumbing, we invest in the latest technology to ensure accuracy and avoid unnecessary damage to your home. Our most in-demand tools include:</p>
            
            <h3 className="fw-bold h4 mt-4">Acoustic Leak Detection</h3>
            <p>This is the workhorse of our industry. We use highly sensitive microphones and audio processors that can actually *hear* the distinct sound of water escaping a pressurized pipe. By listening at various points along your plumbing lines, our trained technicians can determine the precise location of the leak, even if it&apos;s buried under several feet of concrete.</p>

            <h3 className="fw-bold h4 mt-4">Infrared (Thermal Imaging) Cameras</h3>
            <p>For hot water leaks, thermal imaging is invaluable. An infrared camera allows us to see temperature differences on the surface of a wall, floor, or ceiling. A hidden hot water leak will create a distinct warm spot, revealing its path and location without the need for a single hole. This is a completely non-destructive method that provides immediate visual evidence of the problem.</p>

            <h3 className="fw-bold h4 mt-4">Digital Pressure Testers and Metering</h3>
             <p>To confirm a leak exists, we can isolate different sections of your plumbing and use a digital pressure tester. If a section of pipe cannot hold pressure, it confirms a leak within that line. We then use our other tools to pinpoint its exact location. This methodical process ensures we are always chasing a confirmed leak and not a false alarm.</p>

            <h2 className="fw-bold h3 mt-5">Slab Leak Detection: The Most Critical Service</h2>
            <p>Slab leaks are the most feared type of plumbing leak in the Denver area, and for good reason. They are difficult to access and have the potential to cause the most damage. Our team specializes in slab leak detection and repair. The process involves precise location using our advanced tools, followed by offering you the best repair options:</p>
            <ul>
                <li><strong>Direct Access Repair:</strong> If the leak is in an accessible location, this involves opening a small section of the slab, repairing the single faulty section of pipe, and patching the concrete. This is the most common and least disruptive method.</li>
                <li><strong>Pipe Rerouting or Repiping:</strong> If the leaking pipe is old, has multiple leaks, or is in a very difficult-to-access spot, it often makes more sense to decommission the old line and reroute a new one through the walls or ceiling. In homes with older, failing systems, a full repipe might be the most cost-effective long-term solution.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Leak Detection</h2>

            <div className="accordion" id="faqAccordionLeakDetection">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneLD">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneLD" aria-expanded="false" aria-controls="collapseOneLD">
                            <strong>My water bill is high, but I don&apos;t see any water. Do I have a leak?</strong>
                        </button>
                    </h2>
                    <div id="collapseOneLD" className="accordion-collapse collapse" aria-labelledby="headingOneLD" data-bs-parent="#faqAccordionLeakDetection">
                        <div className="accordion-body">
                            It&apos;s highly likely. An unexplained spike in your water bill is the number one symptom of a hidden leak. You can perform a simple test: ensure all water-using appliances are off, then go look at your water meter. If the small triangle or dial on the meter is spinning, water is flowing somewhere, and you have a leak. Call us immediately.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoLD">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoLD" aria-expanded="false" aria-controls="collapseTwoLD">
                            <strong>Will you have to tear up my whole floor to find a slab leak?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoLD" className="accordion-collapse collapse" aria-labelledby="headingTwoLD" data-bs-parent="#faqAccordionLeakDetection">
                        <div className="accordion-body">
                           Absolutely not. The entire purpose of our advanced leak detection equipment is to avoid this. Our goal is to pinpoint the leak to within a square foot, allowing for a precise, minimally invasive repair. We only open up what is absolutely necessary to fix the pipe.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeLD">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeLD" aria-expanded="false" aria-controls="collapseThreeLD">
                            <strong>Is it possible to have a leak in my gas line?</strong>
                        </button>
                    </h2>
                    <div id="collapseThreeLD" className="accordion-collapse collapse" aria-labelledby="headingThreeLD" data-bs-parent="#faqAccordionLeakDetection">
                        <div className="accordion-body">
                            Yes. While we often focus on water leaks, gas leak detection is a critical safety service we provide. If you ever smell natural gas (a rotten egg or sulfur smell), do not use any electronics or light switches. Evacuate your home immediately and call your gas utility&apos;s emergency line from a safe distance. Once they have shut off the gas, you can call us for professional leak location and repair.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Don&apos;t let a hidden leak compromise your home and your finances. If you suspect a problem, trust the experts with the right tools for the job. Contact Peach Tree Plumbing today at <Link href="tel:720-298-1900">720-298-1900</Link> for professional, non-invasive leak detection.</p>
        </>
    )
  },
  'pipe-repair': {
    title: 'Expert Pipe Repair & Whole-Home Repiping in Denver',
    content: (
        <>
            <p className="lead">The pipework in your home is like its circulatory system, delivering fresh water and removing waste day in and day out. But as pipes age, they become susceptible to corrosion, leaks, and catastrophic failures. Peach Tree Plumbing provides <strong>comprehensive pipe repair and whole-home repiping services in Denver and Englewood</strong>, offering permanent solutions to failing plumbing and peace of mind for homeowners.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3">Is Your Home&apos;s Plumbing a Ticking Time Bomb?</h2>
            <p>Many homes in the Denver area, particularly those built before the 1990s, have outdated or problematic pipe materials. It&apos;s crucial to recognize the warning signs of a failing system:</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Low or Fluctuating Water Pressure:</strong> This is a classic symptom of mineral buildup and corrosion inside old galvanized steel pipes, restricting water flow.
                </li>
                <li className="list-group-item"><strong>Rusty or Brown Water:</strong> If you get discolored water from your taps, especially after a period of disuse, it&apos;s a clear sign that your pipes are corroding from the inside out.</li>
                <li className="list-group-item"><strong>Frequent Leaks:</strong> One leak might be an anomaly. Two or more leaks in a short period indicate that your entire plumbing system is reaching the end of its lifespan.</li>
                 <li className="list-group-item"><strong>Visible Corrosion:</strong> Check any exposed pipes in your basement or crawlspace. If you see flaking, discoloration, or bumps, the same is happening to pipes you can&apos;t see.</li>
            </ul>
            <p>If your home has old, gray, threaded galvanized pipes, it&apos;s not a matter of *if* they will fail, but *when*. Proactively repiping your home is the single best way to prevent the devastating water damage a major failure can cause.</p>

            <h2 className="fw-bold h3 mt-5">Our Most Demanded Pipe Repair & Replacement Services</h2>
            
            <h3 className="fw-bold h4 mt-4">Emergency Burst & Frozen Pipe Repair</h3>
            <p>Colorado&apos;s notorious freeze-thaw cycles put immense stress on water pipes. When a pipe bursts, it&apos;s a full-blown emergency. Our 24/7 team responds immediately to:</p>
            <ul>
                <li><strong>Safely Thaw Frozen Pipes:</strong> We use professional-grade heating equipment to gently thaw frozen sections, preventing them from bursting. Never use an open flame on a frozen pipe.</li>
                <li><strong>Repair Burst Sections:</strong> If a pipe has already burst, we will shut off the water, cut out the damaged section, and install a durable new piece of pipe, ensuring a solid, lasting repair.</li>
            </ul>

            <h3 className="fw-bold h4 mt-4">Whole-Home Repiping: The Permanent Solution</h3>
            <p>A whole-home repipe is the process of replacing all the hot and cold water supply lines in your home. While it sounds daunting, our process is designed to be as minimally invasive as possible. We are experts in this procedure, which adds significant value and safety to your home. Here’s why it’s the best long-term investment:</p>
            <ol>
                <li><strong>Consultation and Material Selection:</strong> We will assess your current system and walk you through the best modern material choices—typically PEX or Copper.</li>
                <li><strong>Strategic Installation:</strong> Our plumbers are masters at routing new pipes through walls, ceilings, and attics with minimal drywall incisions. We meticulously plan the installation to minimize disruption to your life.</li>
                <li><strong>Final Connection and Testing:</strong> We typically get the new system fully installed before making the final switchover, leaving you without water for only a few hours, not days.</li>
            </ol>

             <h3 className="fw-bold h4 mt-4">PEX vs. Copper: Choosing the Right Material for Your Denver Home</h3>
             <p>The two leading materials for repiping are PEX and Copper. We are experts in installing both.</p>
             <p><strong>PEX (Cross-Linked Polyethylene)</strong> is the modern standard for most residential repipes. It&apos;s a flexible, durable plastic tubing that is our most recommended material for its numerous advantages:</p>
             <ul>
                <li><strong>Freeze-Resistant:</strong> PEX can expand and contract, making it far less likely to burst in freezing Colorado temperatures.</li>
                <li><strong>Corrosion-Proof:</strong> It is immune to the rust and mineral buildup that plagues metal pipes.</li>
                <li><strong>Faster Installation:</strong> Its flexibility means fewer fittings and less time spent running lines, which translates to lower labor costs for you.</li>
             </ul>
             <p><strong>Copper</strong> is the traditional, premium choice. It has a proven track record of durability and has natural antimicrobial properties. While it is more expensive and labor-intensive to install, it remains an excellent choice for longevity and reliability.</p>

            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Repiping</h2>
            <div className="accordion" id="faqAccordionPipeRepair">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOnePR">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnePR" aria-expanded="false" aria-controls="collapseOnePR">
                            <strong>How long does a whole-home repipe take?</strong>
                        </button>
                    </h2>
                    <div id="collapseOnePR" className="accordion-collapse collapse" aria-labelledby="headingOnePR" data-bs-parent="#faqAccordionPipeRepair">
                        <div className="accordion-body">
                           The average-sized home can typically be repiped in 2-5 days. We understand it&apos;s an intrusion, and our teams work efficiently and cleanly to complete the job as quickly as possible while maintaining the highest quality standards.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoPR">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoPR" aria-expanded="false" aria-controls="collapseTwoPR">
                            <strong>Will I be without water during the entire process?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoPR" className="accordion-collapse collapse" aria-labelledby="headingTwoPR" data-bs-parent="#faqAccordionPipeRepair">
                        <div className="accordion-body">
                          No. Our process is designed to keep your water on for the majority of the project. We typically run all the new lines and only shut the water off for a few hours on the final day to make the connections to your fixtures.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreePR">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreePR" aria-expanded="false" aria-controls="collapseThreePR">
                            <strong>Do you repair the drywall after the job is done?</strong>
                        </button>
                    </h2>
                    <div id="collapseThreePR" className="accordion-collapse collapse" aria-labelledby="headingThreePR" data-bs-parent="#faqAccordionPipeRepair">
                        <div className="accordion-body">
                           Our primary expertise is plumbing. The repiping process requires making small, precise cuts in the drywall to run the new lines. While we are very clean and respectful of your home, the final patching and painting of the drywall is typically handled by a painter or drywall specialist to ensure a perfect finish. We focus on giving you a flawless plumbing system.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Don&apos;t wait for a plumbing catastrophe. If you&apos;re dealing with old, unreliable pipes, take control of the situation. Contact Peach Tree Plumbing today at <Link href="tel:720-298-1900">720-298-1900</Link> for an expert consultation on pipe repair or a whole-home repipe.</p>
        </>
    )
  },
  'toilet-repair': {
    title: 'Toilet Repair & Installation Services in Denver',
    content: (
      <>
          <p className="lead">A malfunctioning toilet is more than just an inconvenience; it can disrupt your entire household, waste a shocking amount of water, and even lead to water damage. Peach Tree Plumbing provides <strong>expert toilet repair, unclogging, and installation services for homes across Denver and Englewood</strong>. From a simple, annoying phantom flush to a major clog, our master plumbers have the tools and expertise to restore your bathroom to perfect working order.</p>
          <hr className="my-5" />

          <h2 className="fw-bold h3">Anatomy of a Toilet: Understanding the Common Culprits</h2>
          <p>Most toilet problems originate from a few key components within the tank. Understanding these parts helps you understand what needs fixing:</p>
          <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><strong>The Fill Valve:</strong> This is the tall column in the tank that refills the tank and bowl with water after you flush. A faulty or miscalibrated fill valve can cause a constantly running toilet or a weak flush.</li>
              <li className="list-group-item"><strong>The Flapper:</strong> This rubber or plastic seal at the bottom of the tank lifts when you flush, allowing water to rush into the bowl. A warped, degraded, or poorly sealed flapper is the #1 cause of a &quot;running&quot; or &quot;phantom flushing&quot; toilet, silently leaking water from the tank into the bowl.</li>
              <li className="list-group-item"><strong>The Flush Valve Assembly:</strong> This includes the overflow tube and the seat for the flapper. A crack in this assembly can cause a persistent leak.</li>
               <li className="list-group-item"><strong>The Wax Ring:</strong> This is not in the tank, but at the base of the toilet. It creates an airtight and watertight seal between the toilet and the drainpipe. A failing wax ring is the cause of water leaking at the base and the release of sewer gas odors.</li>
          </ul>

          <h2 className="fw-bold h3 mt-5">Our Most Demanded Toilet Repair Services</h2>
          
          <h3 className="fw-bold h4 mt-4">Clogged Toilet Repair</h3>
          <p>Everyone has faced a clog that a plunger can&apos;t fix. These deep, stubborn blockages can be caused by flushing foreign objects (like baby wipes, even &quot;flushable&quot; ones), excessive toilet paper, or problems further down the drain line. Our most demanded service for this is the <strong>toilet auger (or closet snake)</strong>. This professional tool is designed specifically to navigate the toilet&apos;s internal trap without scratching the porcelain, breaking up or retrieving the blockage. For more serious issues, we can use a camera to inspect the drain line to see if the problem lies further down the system.</p>

          <h3 className="fw-bold h4 mt-4">Running Toilet Repair</h3>
          <p>A running toilet can waste over 200 gallons of water a day, adding a significant amount to your Denver Water bill. The sound alone is enough to drive a homeowner crazy. We can fix this fast. Our process involves:</p>
          <ol>
              <li><strong>Diagnosis:</strong> We first identify the source of the leak, whether it&apos;s a bad flapper, a misadjusted float, a faulty fill valve, or a cracked overflow tube.</li>
              <li><strong>Component Replacement:</strong> We carry a full range of high-quality replacement parts on our trucks. We will replace the worn-out components with durable, new parts to ensure a long-lasting repair. We often recommend a full tank rebuild kit for older toilets, which replaces all the key components at once for total peace of mind.</li>
          </ol>

          <h3 className="fw-bold h4 mt-4">Leaking Toilet Repair</h3>
          <p>Water on the floor around your toilet should never be ignored. We address the two main causes:</p>
          <ul>
              <li><strong>Leaking at the Base:</strong> This almost always indicates a failed wax ring. To fix this, we must remove the toilet, scrape off the old wax, inspect the toilet flange (the part that connects to the floor and drain) for damage, and install a brand new wax ring, re-seating the toilet securely.</li>
              <li><strong>Leaking from the Tank:</strong> This can be caused by brittle bolts and gaskets between the tank and the bowl. We can replace these components to create a fresh, watertight seal.</li>
          </ul>

          <h2 className="fw-bold h3 mt-5">Upgrade Your Throne: The Benefits of a New Toilet Installation</h2>
          <p>If your toilet was manufactured before the mid-1990s, you are literally flushing money down the drain. Older toilets can use 3.5 to 7 gallons per flush (GPF)! Modern, EPA WaterSense-certified toilets use just <strong>1.28 GPF or less</strong>, without sacrificing performance. The benefits of installing a new toilet are compelling:</p>
          <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><strong>Massive Water Savings:</strong> A family can save over 16,000 gallons of water per year by upgrading to a high-efficiency toilet, leading to significant savings on your utility bills.</li>
              <li className="list-group-item"><strong>Improved Flushing Power:</strong> Modern toilet engineering has created powerful flush systems that clear the bowl effectively with much less water, reducing the chance of clogs.</li>
              <li className="list-group-item"><strong>New Features and Comfort:</strong> Options like comfort height (chair height) toilets are easier to use for adults and the elderly. Dual-flush models offer a choice between a full or partial flush for even more water savings.</li>
          </ul>
          <p>Our professional installation ensures your new toilet is set perfectly, with a flawless wax ring seal and no leaks, giving you years of trouble-free performance.</p>

          <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Toilets</h2>
          <div className="accordion" id="faqAccordionToiletRepair">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOneTR">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneTR" aria-expanded="false" aria-controls="collapseOneTR">
                          <strong>Why does my toilet flush by itself (phantom flushing)?</strong>
                      </button>
                  </h2>
                  <div id="collapseOneTR" className="accordion-collapse collapse" aria-labelledby="headingOneTR" data-bs-parent="#faqAccordionToiletRepair">
                      <div className="accordion-body">
                         This is almost always caused by a slow leak from the tank into the bowl, due to a worn-out or poorly fitting flapper. The tank water level slowly drops until it triggers the fill valve to turn on and refill the tank. It&apos;s a sign that your flapper needs to be replaced.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwoTR">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTR" aria-expanded="false" aria-controls="collapseTwoTR">
                          <strong>Are &quot;flushable&quot; wipes really flushable?</strong>
                      </button>
                  </h2>
                  <div id="collapseTwoTR" className="accordion-collapse collapse" aria-labelledby="headingTwoTR" data-bs-parent="#faqAccordionToiletRepair">
                      <div className="accordion-body">
                         Absolutely not. As professional plumbers, we can tell you unequivocally that so-called &quot;flushable&quot; wipes are one of the leading causes of major clogs and sewer backups. They do not break down in water the way toilet paper does. Never flush anything other than human waste and toilet paper.
                      </div>
                  </div>
              </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThreeTR">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeTR" aria-expanded="false" aria-controls="collapseThreeTR">
                          <strong>My toilet is rocking or wobbly. Is that a serious problem?</strong>
                      </button>
                  </h2>
                  <div id="collapseThreeTR" className="accordion-collapse collapse" aria-labelledby="headingThreeTR" data-bs-parent="#faqAccordionToiletRepair">
                      <div className="accordion-body">
                         Yes, it needs to be addressed immediately. A wobbly toilet means the seal of the wax ring has been broken. This allows water to leak onto the subfloor with every flush, which can cause rot, mold, and major structural damage over time. The toilet needs to be reset with a new wax ring.
                      </div>
                  </div>
              </div>
          </div>

          <p className="fw-bold mt-5">From a simple clog to a full bathroom upgrade, don&apos;t let toilet troubles disrupt your day. For fast, professional toilet repair and installation, contact the experts at Peach Tree Plumbing. Call us at <Link href="tel:720-298-1900">720-298-1900</Link> to schedule your service.</p>
      </>
  )
  },
  'natural-gas-plumbing': {
    title: 'Certified Natural Gas Line Plumber in Denver',
    content: (
        <>
            <p className="lead">Natural gas is a clean, efficient, and affordable energy source for your home, but it demands absolute respect. When it comes to installing, repairing, or modifying gas lines, there is zero room for error. Peach Tree Plumbing is your <strong>certified and insured natural gas plumbing expert in Denver and Englewood</strong>. We put safety above all else, ensuring that every connection is secure, every installation is code-compliant, and your family is protected.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3 text-danger">GAS LEAK EMERGENCY: WHAT TO DO</h2>
            <p className="fw-bold">If you smell the rotten egg/sulfur odor of natural gas in your home:</p>
            <ol>
                <li><strong>DO NOT</strong> operate any electronics—don&apos;t turn on/off lights, use your phone, or unplug appliances.</li>
                <li><strong>DO NOT</strong> create a flame or spark.</li>
                <li><strong>EVACUATE</strong> everyone from the building immediately, leaving the door open behind you.</li>
                <li><strong>CALL 911</strong> or your utility company&apos;s emergency line (Xcel Energy in Colorado is 1-800-895-2999) from a safe distance outside your home.</li>
            </ol>
            <p>Once the utility has secured the area and shut off the gas, you can call us for professional leak location and repair services. We are certified to find the source of the leak and perform the necessary repairs to restore your service safely.</p>

            <h2 className="fw-bold h3 mt-5">Our Most Demanded Natural Gas Plumbing Services</h2>
            <p>Our licensed plumbers are fully certified for gas line work, combining technical expertise with a rigorous adherence to safety protocols.</p>

            <h3 className="fw-bold h4 mt-4">New Gas Appliance Installation & Hookup</h3>
            <p>Are you upgrading your kitchen with a new gas range? Or installing a high-efficiency gas dryer? A proper, professional hookup is critical. We install gas lines and connect a wide variety of appliances, including:</p>
            <ul>
                <li>Gas Stoves, Cooktops, and Ovens</li>
                <li>Gas Dryers</li>
                <li>Gas Water Heaters (Tank and Tankless)</li>
                <li>Gas Fireplace Inserts and Log Sets</li>
            </ul>
            <p>Our service includes not just the final connection, but running new gas lines where needed, ensuring the pipe is correctly sized for the appliance&apos;s BTU load, and thoroughly leak-testing the entire system before commissioning.</p>

            <h3 className="fw-bold h4 mt-4">Outdoor Living: Gas Lines for Grills, Fire Pits, and Heaters</h3>
            <p>Transform your backyard into an outdoor oasis by ditching the propane tanks. We are specialists in running permanent natural gas lines for outdoor features. This is one of our most popular services in the Denver area.</p>
             <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Natural Gas BBQ Grills:</strong> Enjoy the convenience of an endless fuel supply for your grill. Never run out of propane in the middle of a cookout again!</li>
                <li className="list-group-item"><strong>Custom Gas Fire Pits:</strong> We can run the line for your dream fire pit, creating a stunning and warm centerpiece for your patio.</li>
                <li className="list-group-item"><strong>Patio Heaters & Pool Heaters:</strong> Extend the use of your outdoor spaces into the cooler months with professionally installed gas lines for patio and pool heaters.</li>
            </ul>

            <h3 className="fw-bold h4 mt-4">Gas Leak Detection and Repair</h3>
            <p>After the immediate emergency is handled by your utility, our job begins. We use professional-grade gas detection tools and a soap-and-water solution to pinpoint the exact location of the leak in your home&apos;s piping system. Common causes include failed fittings, corroded pipes, or damaged appliance connectors. Once located, we can isolate the section, replace the faulty component or pipe, and perform a rigorous pressure test to guarantee the system is 100% sealed and safe before restoring service.</p>


            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Gas Lines</h2>
            <div className="accordion" id="faqAccordionGas">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneGas">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneGas" aria-expanded="false" aria-controls="collapseOneGas">
                            <strong>Can I do my own gas line work?</strong>
                        </button>
                    </h2>
                    <div id="collapseOneGas" className="accordion-collapse collapse" aria-labelledby="headingOneGas" data-bs-parent="#faqAccordionGas">
                        <div className="accordion-body">
                           <strong>Absolutely not.</strong> This cannot be stressed enough. Working with natural gas is not a DIY project. It requires specific tools, knowledge of local codes, and an understanding of how to properly size and test gas systems. The risk of fire, explosion, and carbon monoxide poisoning is far too great. Always hire a licensed and certified professional for any gas plumbing work.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoGas">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoGas" aria-expanded="false" aria-controls="collapseTwoGas">
                            <strong>What kind of pipes are used for natural gas?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoGas" className="accordion-collapse collapse" aria-labelledby="headingTwoGas" data-bs-parent="#faqAccordionGas">
                        <div className="accordion-body">
                          The most common material used for interior gas piping is black iron pipe (often called black steel pipe). For some applications, particularly underground for outdoor features, flexible corrugated stainless steel tubing (CSST) or specific types of polyethylene (PE) pipe may be used. The material and installation methods are strictly dictated by local plumbing codes.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeGas">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeGas" aria-expanded="false" aria-controls="collapseThreeGas">
                            <strong>Do I need a permit for gas line work?</strong>
                        </button>
                    </h2>
                    <div id="collapseThreeGas" className="accordion-collapse collapse" aria-labelledby="headingThreeGas" data-bs-parent="#faqAccordionGas">
                        <div className="accordion-body">
                          Yes. In almost all jurisdictions, including Denver and surrounding municipalities, a permit and subsequent inspection are required for any new gas line installation or significant modification. This is a critical safety step. As part of our service, we handle the entire permitting and inspection process for you, ensuring the work is done correctly and officially approved.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Your family&apos;s safety is non-negotiable. For certified, professional, and safe natural gas plumbing services, trust the experts at Peach Tree Plumbing. Contact us today at <Link href="tel:720-298-1900">720-298-1900</Link> to discuss your project.</p>
        </>
    )
  },
  'residential-plumbing': {
    title: 'Full-Service Residential Plumber for the Denver Metro Area',
    content: (
        <>
            <p className="lead">For homeowners in Denver and Englewood, a smoothly running plumbing system is the bedrock of a comfortable and safe home. At Peach Tree Plumbing, we are your <strong>trusted, full-service residential plumbing partner</strong>. We are not just specialists in one area; we are masters of the entire home plumbing ecosystem. From a dripping kitchen faucet to a full basement sump pump installation, we provide reliable, expert service for every pipe, drain, and fixture in your house.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3">The Heart of the Home: Kitchen Plumbing Services</h2>
            <p>The kitchen is often the busiest room in the house, and its plumbing needs to keep up. We are experts in all aspects of kitchen plumbing to ensure your workspace is fully functional.</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Faucet Repair and Installation:</strong> We can fix any drip or leak, or upgrade you to a modern pull-down or touchless faucet. A single dripping faucet can waste over 3,000 gallons a year!</li>
                <li className="list-group-item"><strong>Garbage Disposal Services:</strong> Is your disposal jammed, humming, or leaking? We can repair most units or install a powerful new one. We&apos;ll remind you to never put fibrous vegetables, grease, or coffee grounds down your disposal.</li>
                <li className="list-group-item"><strong>Dishwasher Installation and Repair:</strong> We can install your new dishwasher, ensuring the water and drain lines are secure and leak-free.</li>
                 <li className="list-group-item"><strong>Ice Maker & Refrigerator Water Lines:</strong> We safely run and connect water lines for refrigerators, providing fresh, filtered water and ice on demand.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Your Private Oasis: Bathroom Plumbing Services</h2>
            <p>From the morning rush to a relaxing evening bath, your bathroom plumbing is essential. We handle it all:</p>
            <ul>
                <li><strong>Sink, Faucet, and Pop-up Drain Repairs:</strong> We fix leaky faucets, clogged drains, and broken pop-up assemblies to keep your vanity in perfect working order.</li>
                <li><strong>Shower and Bathtub Plumbing:</strong> From repairing leaky showerheads and tub spouts to replacing faulty diverter valves (the knob that switches water from the tub to the shower), we have you covered.</li>
                <li><strong>Bathroom Remodels:</strong> Planning a bathroom renovation? We work with you or your contractor to ensure the plumbing is done right, from moving drain lines to installing new fixtures for a seamless, professional result.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Protect Your Basement: Sump Pump Services</h2>
            <p>For any Denver home with a basement, a functional sump pump is not a luxury—it&apos;s essential protection against flooding from heavy rain or melting snow. A failed pump can lead to thousands of dollars in water damage.</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Sump Pump Repair and Maintenance:</strong> We can diagnose why your pump isn&apos;t working, from a faulty float switch to a clogged discharge line. Regular testing is key!</li>
                <li className="list-group-item"><strong>Sump Pump Installation and Replacement:</strong> We install reliable primary sump pumps and highly recommend a <strong>battery backup sump pump system</strong>. This secondary pump automatically takes over if the primary pump fails or, more importantly, if the power goes out during a major storm—the most common time for pump failure.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Keeping it Flowing: Drain Cleaning Services</h2>
            <p>Clogs are an inevitable part of homeownership. While some can be handled with a plunger, many require professional tools to be cleared effectively and safely, without damaging your pipes.</p>
             <ul>
                <li><strong>Kitchen Sink Clogs:</strong> Often caused by a buildup of grease, soap, and food waste. We use professional snakes to cut through the blockage and restore flow.</li>
                <li><strong>Bathroom Sink and Tub Drains:</strong> Typically clogged by hair and soap scum. We can quickly and cleanly remove the obstruction.</li>
                <li><strong>Main Line Sewer Cleaning:</strong> If multiple drains in your house are backing up, the problem is in your main sewer line. We use powerful augers and hydro-jetting technology to clear even the toughest blockages, like tree roots.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions about Residential Plumbing</h2>
            <div className="accordion" id="faqAccordionResidential">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneResi">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneResi" aria-expanded="false" aria-controls="collapseOneResi">
                            <strong>What can I do about low water pressure?</strong>
                        </button>
                    </h2>
                    <div id="collapseOneResi" className="accordion-collapse collapse" aria-labelledby="headingOneResi" data-bs-parent="#faqAccordionResidential">
                        <div className="accordion-body">
                          Low water pressure can have several causes. It could be due to a partially closed main valve, a failing pressure reducing valve (PRV), or, most commonly in older homes, corroded and clogged galvanized pipes. Our plumbers can diagnose the exact cause and recommend the best solution, from a simple adjustment to a full repipe.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoResi">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoResi" aria-expanded="false" aria-controls="collapseTwoResi">
                            <strong>Are chemical drain cleaners safe to use?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoResi" className="accordion-collapse collapse" aria-labelledby="headingTwoResi" data-bs-parent="#faqAccordionResidential">
                        <div className="accordion-body">
                         As professionals, we strongly advise against using harsh chemical drain cleaners. They can be ineffective on tough clogs, can damage your pipes (especially older ones), and are toxic to the environment. Worse, if they fail to work, it leaves a pipe full of caustic chemicals, which is dangerous for you and for the plumber who has to come fix it properly. Mechanical cleaning with a snake or auger is always the safer and more effective option.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Peach Tree Plumbing is your partner in maintaining a safe and healthy home. For any residential plumbing need, large or small, contact the most trusted name in Denver plumbing. Call us at <Link href="tel:720-298-1900">720-298-1900</Link> for upfront pricing and expert service.</p>
        </>
    )
  },
  'commercial-plumbing': {
    title: 'Expert Commercial & Industrial Plumber in Denver',
    content: (
        <>
            <p className="lead">For a business, a plumbing problem isn&apos;t an inconvenience—it&apos;s a threat to your operation, your reputation, and your bottom line. At Peach Tree Plumbing, we are a leading <strong>commercial and industrial plumbing contractor serving Denver, Englewood, and the Front Range</strong>. We understand that commercial plumbing demands a higher level of expertise, durability, and responsiveness. We are the trusted partner for businesses, property managers, and HOAs who require a plumbing service that operates at the speed of business.</p>
            <hr className="my-5" />

            <h2 className="fw-bold h3">The Commercial Difference: Why Your Business Needs a Specialist</h2>
            <p>Commercial plumbing systems are fundamentally different from their residential counterparts. They are subjected to far greater usage, require larger and more durable fixtures, and must adhere to a stricter set of public health and safety codes. Our licensed commercial plumbers are specifically trained to manage the complexity and scale of these systems.</p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Code Compliance is Paramount:</strong> We are experts in all local, state, and ADA (Americans with Disabilities Act) plumbing codes. We ensure your facility is not only functional but fully compliant, protecting you from liability and fines.</li>
                <li className="list-group-item"><strong>Minimizing Downtime:</strong> We know that a closed restroom or a backed-up kitchen can shut down your business. Our goal is rapid response and efficient, first-time resolution to get you operational again as quickly as possible.</li>
                <li className="list-group-item"><strong>Heavy-Duty Equipment:</strong> We utilize commercial-grade equipment, from powerful hydro-jetters capable of clearing large-diameter sewer lines to heavy-duty water heaters designed for constant demand.</li>
            </ul>

            <h2 className="fw-bold h3 mt-5">Our Most Demanded Commercial Plumbing Services</h2>
            
            <h3 className="fw-bold h4 mt-4">Commercial Drain and Sewer Line Services</h3>
            <p>The drains in a commercial property are its most abused asset. From restaurant kitchens to high-traffic public restrooms, clogs are inevitable. Our premier service is <strong>commercial hydro-jetting</strong>. It is the only truly effective way to clean commercial sewer lines. The high-pressure water scours the inside of the pipes, removing years of accumulated grease, sludge, and debris, restoring the line to like-new condition and preventing future emergency backups.</p>

            <h3 className="fw-bold h4 mt-4">Grease Trap and Interceptor Services</h3>
            <p>For any food service establishment in Denver, a properly functioning grease trap isn&apos;t optional—it&apos;s a legal requirement. Grease traps prevent fats, oils, and grease (FOG) from entering the municipal sewer system, where they cause major blockages. We provide:</p>
            <ul>
                <li><strong>Grease Trap Installation:</strong> We install correctly-sized grease traps and interceptors for restaurants, commercial kitchens, and food processing facilities, ensuring you are compliant with local wastewater regulations.</li>
                <li><strong>Grease Trap Pumping and Maintenance:</strong> Regular, professional cleaning and pumping of your grease trap is essential to avoid foul odors, catastrophic backups, and costly fines.</li>
            </ul>

            <h3 className="fw-bold h4 mt-4">Backflow Prevention, Testing, and Certification</h3>
            <p>This is one of the most critical public health services we provide. A backflow preventer is a device that ensures contaminated water from your property cannot flow backward into the city&apos;s clean water supply. Municipalities, including Denver Water, legally require all commercial properties to have a backflow preventer installed and tested annually by a certified professional.</p>
             <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item"><strong>Backflow Device Installation:</strong> We install the correct type of backflow prevention assembly for your property&apos;s specific hazard level.</li>
                <li className="list-group-item"><strong>Annual Testing & Certification:</strong> Our certified backflow testers will perform the required annual test and submit all necessary paperwork to the local water authority to keep you in compliance.</li>
                <li className="list-group-item"><strong>Backflow Repair:</strong> If your device fails its test, we are qualified to repair or replace it to ensure public safety.</li>
            </ul>

             <h2 className="fw-bold h3 mt-5">Your Partner for All Commercial Needs</h2>
             <p>We build long-term relationships with our commercial clients, becoming a trusted part of their facilities management team. Our other services include:</p>
              <ul>
                <li><strong>Commercial Water Heater Repair & Installation:</strong> Servicing and installing high-capacity, heavy-duty water heaters and boilers that can meet the constant demands of your business.</li>
                <li><strong>Tenant Finishes and New Construction:</strong> We partner with general contractors on plumbing for new commercial builds and tenant space remodels, providing expert planning and installation.</li>
                <li><strong>Fixture Repair & Replacement:</strong> We repair and install commercial-grade toilets, urinals, flushometers, and faucets.</li>
            </ul>


            <h2 className="fw-bold h3 mt-5">Frequently Asked Questions for Businesses</h2>
            <div className="accordion" id="faqAccordionCommercial">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneComm">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneComm" aria-expanded="false" aria-controls="collapseOneComm">
                            <strong>What is the difference between residential and commercial drain cleaning?</strong>
                        </button>
                    </h2>
                    <div id="collapseOneComm" className="accordion-collapse collapse" aria-labelledby="headingOneComm" data-bs-parent="#faqAccordionCommercial">
                        <div className="accordion-body">
                           The main difference is the severity and the solution. Commercial clogs, especially in restaurants, are dominated by grease and food solids, which are hard and sticky. A simple snake is often ineffective. Commercial hydro-jetting uses high-pressure water to completely emulsify and flush away this buildup, which is far more effective and longer-lasting for high-use drain lines.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoComm">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoComm" aria-expanded="false" aria-controls="collapseTwoComm">
                            <strong>Can I sign up for a preventative maintenance plan?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwoComm" className="accordion-collapse collapse" aria-labelledby="headingTwoComm" data-bs-parent="#faqAccordionCommercial">
                        <div className="accordion-body">
                          Yes, and we highly recommend it. We work with businesses to create custom preventative maintenance plans. This often includes scheduled drain treatments with hydro-jetting, regular grease trap cleaning, and annual backflow testing. A maintenance plan is the best way to prevent costly emergency shutdowns and ensure your business runs smoothly.
                        </div>
                    </div>
                </div>
            </div>

            <p className="fw-bold mt-5">Protect your investment and your operation. For a commercial plumbing partner that understands the unique needs of your business, contact Peach Tree Plumbing today. Call us at <Link href="tel:720-298-1900">720-298-1900</Link> to schedule a consultation.</p>
        </>
    )
  },
};

// Generate static pages at build time
export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic, SEO-friendly metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const service = serviceData.find((s) => s.slug === params.slug);
    const pageContent = servicePageContent[params.slug];

    if (!service || !pageContent) {
        return {
            title: "Service Not Found",
            description: "The service you are looking for does not exist."
        }
    }

    // Generic fallback description
    let description = `Expert ${service.name} services in the Denver metro area. Peach Tree Plumbing offers reliable and professional solutions for your home or business.`;

    // Custom descriptions for pages with full content
    if (params.slug === 'emergency-plumbing') {
      description = `Expert 24/7 emergency plumbing services in the Denver metro area. We handle burst pipes, sewer backups, gas leaks, and more. Call for immediate response.`;
    }
    if (params.slug === 'water-heaters') {
      description = `Denver's top choice for water heater repair, replacement, and installation. We service all models and specialize in high-efficiency tankless water heaters.`;
    }
    if (params.slug === 'leak-detection') {
      description = `Non-invasive leak detection in Denver. We use advanced acoustic and thermal technology to find hidden water and slab leaks without damaging your home.`;
    }
    if (params.slug === 'pipe-repair') {
      description = `Expert pipe repair and whole-home repiping services in Denver. We specialize in replacing old galvanized pipes with modern PEX and copper to prevent leaks.`;
    }
    if (params.slug === 'toilet-repair') {
      description = `Denver toilet repair and installation experts. We fix clogged, running, and leaking toilets fast. Ask us about high-efficiency toilet upgrades.`;
    }
    if (params.slug === 'natural-gas-plumbing') {
      description = `Certified natural gas plumber in Denver. We install gas lines for appliances, fire pits, and grills. Emergency gas leak detection and repair. Safety is our priority.`;
    }
     if (params.slug === 'residential-plumbing') {
      description = `Your full-service residential plumber in Denver. We handle kitchen plumbing, bathroom fixtures, sump pumps, drain cleaning, and more. No job is too small.`;
    }
    if (params.slug === 'commercial-plumbing') {
      description = `Denver's trusted commercial plumbing contractor. We specialize in hydro-jetting, grease traps, backflow prevention, and 24/7 emergency service for businesses.`;
    }

    return {
        title: `${pageContent.title} | Peach Tree Plumbing`,
        description: description,
    }
}

// The actual page component
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData.find((s) => s.slug === params.slug);
  const pageContent = servicePageContent[params.slug];

  if (!service || !pageContent) {
    notFound();
  }

  return (
    <div className="container mt-5 py-5">
      <header className="mb-4 text-center">
        <h1 className="display-4 fw-bold">{pageContent.title}</h1>
      </header>
      <hr className="my-4" />
      <article>
        {pageContent.content}
      </article>
    </div>
  );
}
