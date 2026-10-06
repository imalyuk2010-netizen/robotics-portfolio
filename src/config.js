// ── EDIT THIS FILE ─────────────────────────────────────────────
// Drop your photos into /public/projects and set `image: '/projects/yourfile.jpg'`.
// Until then, each frame shows a generated blueprint placeholder.

export const owner = {
  name: 'Illia Maliuk',
  title: 'Robotics Portfolio',
  about:
    'I design, model and prototype robot mechanisms — CAD in Onshape, 3D printing, laser cutting and hands-on assembly. This studio is a walk-through of the work.',
  email: 'illiamaliuk123@gmail.com',
}

// Rooms you can walk between. Projects without a `room` belong to 'robotics'.
export const rooms = [
  { id: 'robotics', name: 'Robotics 1' },
  { id: 'eng2', name: 'Engineering 2' },
]

// Projects in chronological order (oldest first). wall: 'back' (slots 0-4, left→right) then 'right' (slots 0-2, back→front).
// `process` quotes are taken directly from my weekly reports ('…' marks a skipped passage).
export const projects = [
  {
    "id": "cardboard",
    "wall": "back",
    "slot": 0,
    "title": "Cardboard Arm Prototype",
    "date": "Aug 10–13",
    "image": "/projects/cardboard.jpg",
    "video": "/projects/cardboard.webm",
    "tags": [
      "Sketching",
      "Rapid prototyping",
      "Teamwork"
    ],
    "text": "A two-day rapid prototype of a multi-joint articulating arm: sketch first, build the leanest version that moves, then let each iteration fix one specific problem.",
    "process": [
      [
        "Approach",
        "Before any prototyping, me and my partner started by making sketches of a few designs. While my partner made sketches of two different projects, we chose my multi joint articulating arm sketch."
      ],
      [
        "First build",
        "On the first day of work, we made a prototype with minimal cardboard, just connecting the joints with cardboard pieces and tape. Even though it was slightly unstable, the prototype seemed to move in all the places it should have."
      ],
      [
        "Problem",
        "The cardboard pieces were too thin to adequate structure the arm during motion."
      ],
      [
        "My contribution",
        "Specifically, I worked on the precision joint drilling while my partner worked on cutting the structural arm pieces. This allowed us to work efficiently and with precision."
      ],
      [
        "Iteration",
        "On our second day of work we decided to fix our stability issues with secondary pieces of cardboard across every joint. Also we decided to replace some horizontally striped cardboard with stiffer single piece cardboard pieces. … This proved to be effective because we minimized the motion in the arm pieces while still retaining joint mobility."
      ],
      [
        "Lesson",
        "Through this prototyping process, we learned that the initial prototype should minimize material to visual a digital image or sketch. Then when building up from then, each iteration should improve function and minimize the problem."
      ]
    ]
  },
  {
    "id": "gearbox-build",
    "wall": "back",
    "slot": 1,
    "title": "Gearbox Assembly",
    "date": "Aug 17–21",
    "image": "/projects/gearbox-build.jpg",
    "tags": [
      "Assembly",
      "Motor mounting",
      "Shop safety"
    ],
    "text": "My first real mechanism: a gearbox built from a guide and verified under motor power, preceded by the shop-safety training and CAD setup that the rest of the year builds on.",
    "process": [
      [
        "Mindset",
        "Doing this helped me understand WHY the shop's rules exist, not just what they are: for example, learning that loose or baggy clothing and dangling items like jewelry or drawstrings need to be avoided because they can get pulled into the moving parts of a machine made the rule feel like a direct response to a real hazard rather than an arbitrary policy."
      ],
      [
        "Verification",
        "After finishing the online portion of the assignment and completing the physical build, I mounted the motor to the structure and confirmed it worked correctly: the assembly had very little unwanted play and the structure stayed stable, which showed me the gearbox was assembled and tightened to the right specification."
      ],
      [
        "Lesson",
        "I plan to double-check that a part matches the build guide before applying force to seat it, so I can catch a similar mismatch on my own next time."
      ],
      [
        "Setting up CAD",
        "Working through each step showed me how much of our CAD workflow depends on these shared libraries rather than Onshape's built-in tools — features like the belt-and-chain generator and origin cube exist specifically to speed up FRC-style part design, so having them ready now means I won't have to stop mid-project later to track them down."
      ],
      [
        "Plan",
        "Going forward, my plan is to actually use these custom features as soon as I start designing parts rather than letting them sit unused, and to keep this account organized from the start — clear naming, tidy folders — so my CAD work stays easy for teammates and mentors to follow as our designs get more complex."
      ]
    ]
  },
  {
    "id": "chassis",
    "wall": "back",
    "slot": 2,
    "title": "FRC Chassis CAD",
    "date": "Aug 24 – Sep 11",
    "image": "/projects/chassis.jpg",
    "tags": [
      "Onshape",
      "FRC",
      "Drivetrain"
    ],
    "text": "Learning to CAD a robot frame in Onshape, from a single box tube to a full drivetrain with swerve modules, and fixing my own modeling mistakes as I found them.",
    "process": [
      [
        "Start",
        "In exercise two, I added more box tubes into a robot's frame. In this exercise, I learned how to position a box tube where I need it to be based on symmetry."
      ],
      [
        "Method",
        "I have began to understand the procedure of creating a part - first sketch it using tools like the center rectangle and then modify it using tools like transform or mirror, and then extrude it and modify."
      ],
      [
        "Mistake spotted",
        "I plan to use plates to connect box tubes in cad next so I don't have the issue of floating pieces like I did when carding my triangle structure on top of the drivetrain."
      ],
      [
        "Fix",
        "I connected the essential drivetrain components with 0.1 in wide gussets and plates. … While now I was able to make gussets to connect box tubes, I did not have a way to connect all the pieces to the tubes. In the next section, I learned how to insert a rivet from the frc design."
      ],
      [
        "Assembly",
        "I inserted the swerve module to the corner of my box tube drive train, and I used to fasten tool to align the screw holes on the module with the box tube by fastening the bolt hole of the module to the hole on the tube. I then mirrored to to all 4 corners."
      ],
      [
        "Lesson",
        "In this assemblies section I learned how to fasten items down to the drive train and all other tubes , which is essential to be able to cad a robot frame. I plan to always use this now to show how I can use screws or rivets to connect my components."
      ]
    ]
  },
  {
    "id": "testboard",
    "wall": "back",
    "slot": 3,
    "title": "Drill-to-Laser Test Board",
    "date": "Aug 24 – Sep 11",
    "image": "/projects/testboard.jpg",
    "tags": [
      "Failure analysis",
      "Laser cutting",
      "Onshape → Illustrator"
    ],
    "text": "A test board to mount my gearbox. The hand-drilled version failed, and working out why led me to a laser-cut one that fit every bolt.",
    "process": [
      [
        "Challenge",
        "The challenge at hand was to perfectly align the drill press hole with the gearbox's ideal bearing placement (in which a shaft would be able to move from the motor to the bearing that's mounted)."
      ],
      [
        "First attempt",
        "I removed the flat panel from the gearbox bracket and used its 8 threaded holes as a template to trace the hole locations onto the board near one short side, because tracing directly from the real part is the most reliable way to make the pattern match the bracket."
      ],
      [
        "Result",
        "I tried to screw it on my gearbox with the bearing, but the alignment issues with my bolt holes only let me fit 2 screws."
      ],
      [
        "Diagnosis",
        "I had a lot of problems with aligning my cutting with the actual mounting points on the gearbox because it's hard for me to sketch a 1:1 accurate representation of the holes by hand and pencil. Then it's even harder to precisely cut the holes accurately with no deviation."
      ],
      [
        "Decision",
        "This is why moving forward I plan to use a laser-cut hole pattern to maximize precision. A laser cut option will be more optimal than hand tools and hand-operated machines because first a vector image can accurately represent a digital scan of the gearbox, and a machine cutter will be more precise than my wobbly hands."
      ],
      [
        "Execution",
        "I went to Onshape and downloaded a digital 3D file of the actual gearbox assembly. I then exported the only bracket that connects to the wooden board, and copied the bolt and bearing pattern, so that I can export that into Adobe Illustrator as a drawing from Onshape. This was the most important step because it allowed me to have the exact same measurements, from bolts to bearing, instead of having to draw it or sketch it by hand."
      ],
      [
        "Outcome",
        "Then laser cut the pattern onto my board and fit all eight screws, which was a major improvement, comparing it to the hand or power tool cut patterns."
      ],
      [
        "Lesson",
        "This procedure taught me that using hand tools / machines are not always the most practical solution."
      ]
    ]
  },
  {
    "id": "electrical",
    "wall": "back",
    "slot": 4,
    "title": "Gearbox Electrical System",
    "date": "Sep 14–18",
    "image": "/projects/electrical.jpg",
    "video": "/projects/electrical.webm",
    "tags": [
      "Power distribution",
      "Debugging",
      "Safety"
    ],
    "text": "Wiring the full power chain for my gearbox motor. It did not spin on the first try, and the fix turned out to be mechanical, not electrical.",
    "process": [
      [
        "Why",
        "Next, to power my gearbox, I needed to work with electronics. I completed the electronic safety assignment to get myself familiar with the things I'll be working with, so I wouldn't damage a component or hurt myself using the parts."
      ],
      [
        "Key principle",
        "The biggest takeaway I got from these sources was that the fuse has to be the first component off the positive battery terminal with the switch right after it, because anything between the battery and the switch stays energized even when the switch is off."
      ],
      [
        "Approach",
        "This assignment is a test of whether the motor works under real robot power (with all the components), and a motor only spins if every stage before it is right: the fuse, the power distribution hub, the breaker, and the motor controller. This is why I didn't only wire the motor but all the components."
      ],
      [
        "Build order",
        "I worked outward from the power source. I fused the power distribution hub first for the parts I was using, because the fuse is what protects everything downstream if too much current tries to flow."
      ],
      [
        "Failure & debug",
        "The first try did not work. The Neo motor was powered but my gearbox gear would not spin. I figured the motor was not putting out enough torque to overcome the friction inside my gearbox, probably from wear or age, so i first went back to make sure my wiring was right, then I went back to the mechanical side. I took the gearbox apart, loosened it so the gears could turn freely, and re-greased them."
      ],
      [
        "Lesson",
        "A lesson I am taking from this is that the motor not spinning is not automatically an electrical problem. My circuit was correct the whole time, and the resistance was mechanical. Next time I will check that the gearbox turns freely by hand before I ever connect a battery."
      ]
    ]
  },
  {
    "id": "gearbox2",
    "wall": "right",
    "slot": 0,
    "title": "Two-Stage Gearbox",
    "date": "Sep 14–18",
    "image": "/projects/gearbox2.jpg",
    "tags": [
      "Onshape",
      "FeatureScript",
      "Gear ratios"
    ],
    "text": "A two-stage reduction modeled layout-first, so every later feature inherits correct spacing instead of needing repair.",
    "process": [
      [
        "Layout first",
        "I started with a layout sketch in the part studio of exercise 2. I drew the second stage first, a 20 tooth gear driving a 50 tooth gear, then the first stage, a 12 tooth motor pinion driving a 50 tooth gear, and then a 2.5 inch circle for the motor outline. This layout makes sure that the gear spacing is correct from the very start."
      ],
      [
        "Built off it",
        "Next I made a new sketch for the plate profile while referencing the layout sketch, so the plate picks up the gear positions based on my previous layout."
      ],
      [
        "Why mirror",
        "I used the Mirror sketch tool to copy the geometry from the left side to the right instead of drawing it twice, because mirroring keeps both sides truly identical and a change on one side follows to the other."
      ],
      [
        "Precision",
        "These FeatureScript give me an advantage because I needed the Shaft and spacers to be a precise size. Instead of sketching them, getting them from the FeatureScript is a lot more reliable."
      ],
      [
        "Questioning the process",
        "The instructions pointed out that lightening this early is not actually best practice, because on a real mechanism every change to the plate means redoing the lightening, so you wait until after design review. I did it here either way because of the instructions, but on my own designs I will lighten last."
      ],
      [
        "Extending it",
        "I connected the two pulley centers with a line and set its length with #BeltCTC_5mm(60, 12, 36) for a 60 tooth HTD belt, which gave a 3.462 inch center distance."
      ],
      [
        "Reflection",
        "This one went smoothly, and I think that is because of the order I worked in. Layout sketch first, then the plate built off that sketch, then FeatureScripts and Replicate/mirror for anything repeated meant I was not going back to fix mistakes."
      ]
    ]
  },
  {
    "id": "hex",
    "wall": "right",
    "slot": 1,
    "title": "Hex Shaft Prototyping",
    "date": "Sep 14–25",
    "image": "/projects/hex.jpg",
    "tags": [
      "3D printing",
      "Tolerances",
      "Tapping"
    ],
    "text": "Finding the right fit for a printed hex shaft by testing several sizes at once, then practicing a new tool on the rejects before touching the real part.",
    "process": [
      [
        "Why prototype",
        "It is a prototyping assignment, which means the point is to get the size right through small test prints before committing to a full part, so I do not waste filament and class time on a shaft that turns out not to fit."
      ],
      [
        "First assumption",
        "I designed mine slightly smaller than half an inch flat to flat. I did that on purpose rather than modeling exactly half an inch, because a 3D printer that I use is not super accurate, so the filament can expand a little, causing it to be thicker than modeled."
      ],
      [
        "What the test showed",
        "After I printed my first iteration that I had in Onshape, that was 0.499 in flat to flat. I figured out that it was too small. I knew this because there was too much wiggle room within the shaft hole."
      ],
      [
        "Smarter iteration",
        "Instead of printing a bigger one by one, I just scaled the previous ones' width and length by 100.1%, 100.5%, and 101%. Putting these iterations into a single print saved time and let me test multiple sizes while only running the printer once."
      ],
      [
        "Result",
        "After they printed, I tested each one in the gearbox and found that the 101% scaled version had the best fit."
      ],
      [
        "Using the rejects",
        "Practicing on the bad Hex shafts gave me an idea of how to properly do it, so I wouldn't mess up on my main shaft."
      ],
      [
        "Lesson",
        "Printing several scaled versions in one print is a faster way to find the right fit than testing one size at a time, and that practicing a new tool on parts I am not going to use lets me learn the correct technique before working on the real part."
      ]
    ]
  },
  {
    "id": "chain",
    "wall": "right",
    "slot": 2,
    "title": "Chain Drive (In Progress)",
    "date": "Sep 21 – Oct 2",
    "image": "/projects/chain.jpg",
    "tags": [
      "In progress",
      "#25 chain",
      "Iteration"
    ],
    "text": "A chain-driven gearbox that is still in progress. So far: the research, the math for the layout, three rounds of gusset iteration, and a clear test plan for when the chain goes on.",
    "process": [
      [
        "Research first",
        "When I started the Working with Chain project I first read through the REV Robotics Chain & Sprocket Guide to get a basic understanding before I started working with chain."
      ],
      [
        "Design for the real part",
        "Because the bearing is going to be going into a laser-cut hole the same size, it's not going to be perfectly snug. This is why I have to create a press-fit gusset using CAD to make it secure into the test board using bolts."
      ],
      [
        "Measuring was not enough",
        "my measurements weren't perfect because the caliper was not able to measure exact distances in the awkward shape of the gusset. So I had to do a process of elimination by making a few iterations of different-sized gussets."
      ],
      [
        "Iteration",
        "I tried distances of 12 millimeters, 10 mm, and 8 mm. At 12 mm, there was too much gusset material, and the bolt holes ended up too far out, so they didn't line up with the bolts. At 8 mm, the gusset was too short to reach the bolts. Through these iterations, I found that 10 mm was the ideal distance because it lined the bolt holes up with the bolts without adding extra material."
      ],
      [
        "The math",
        "I chose 6 in because the assignment asked for about 6 in with 16-tooth sprockets, and with the number 25 chain, that distance works out to an exact even number of links. … Links = 2 × (center distance ÷ chain pitch) + number of teeth … 2 × (6 ÷ 0.25) + 16 = 48 + 16 = 64 links"
      ],
      [
        "Cross-check",
        "I also checked this in Onshape using the #ChainCTC_25(64, 16, 16) function from the FRC Design course, and it gave the same 6 inch center distance."
      ],
      [
        "Found an error",
        "There was a tenth of an inch gap on both sides between the edge of the wheel and the edge of the gearbox. This means either my spacer was a little too long or my shaft was a little too short."
      ],
      [
        "Judgment call",
        "I decided that this was a minor problem because the washers on both sides still helped secure the bolt securely without the bolt moving in or out of the construction."
      ],
      [
        "Test plan",
        "I haven't fitted the chain yet … I will check three things to know that the layout works: The chain sits snug without sagging, doesn't skip on the sprocket teeth where the motor runs, and both sprockets line up in the same place."
      ],
      [
        "Lesson",
        "I learned that practical tests are just as useful as the calculations you do before any of the practical tests. … the most important part was that I needed to do math and small tests to save myself from remaking everything too many times."
      ]
    ]
  }
]

// Engineering 2 room — placeholders until real projects are added (same fields as above, plus room: 'eng2').
projects.push(
  ...[1, 2, 3].map((n) => ({
    id: `eng2-${n}`, room: 'eng2', wall: 'back', slot: n, title: `Project ${n}`, date: 'Coming soon', image: null,
    tags: ['Engineering 2', 'Coming soon'],
    text: 'This frame is reserved for my Engineering 2 work. Projects, photos and my design process will be added here as the class goes on.',
  }))
)

export const roomProjects = (room) => projects.filter((p) => (p.room || 'robotics') === room)

// Tools on the workbench. x/z are positions on the bench (x: -2.1…2.1 left→right, z: -0.3 back … 0.3 front).
export const tools = [
  { id: 'cad', name: 'Onshape + Illustrator', x: -1.85, z: -0.1, tags: ['CAD', 'FeatureScript', 'Vector drawing'],
    text: 'Where every project starts. I model gearboxes, shafts and chassis in Onshape (using FeatureScripts for exact shafts, spacers and belt/chain geometry) and export hairline drawings to Illustrator for laser cutting.' },
  { id: 'laser', name: 'Laser Cutter', x: -0.95, z: -0.05, tags: ['Precision', 'Test boards'],
    text: 'Used to cut a test board with the exact bolt and bearing pattern of my gearbox bracket — far more repeatable than hand-drilling.' },
  { id: 'printer', name: '3D Printer (Bambu Lab)', x: 1.0, z: -0.05, tags: ['Bambu Studio', 'Prototyping', 'Tolerances'],
    text: 'Printed hex-shaft test pieces at 100.1%, 100.5% and 101% scale in a single run to dial in the fit instead of guessing — the printer expands filament slightly, so tolerance testing is essential.' },
  { id: 'drill', name: 'Drill Press', x: 1.95, z: -0.1, tags: ['Shop safety', 'Test board'],
    text: 'Trained and tested on drill press safety, then used it to make my first drilled gearbox test board — which taught me why precision matters and led to the laser-cut version.' },
  { id: 'gearbox', name: 'Gearbox', x: -1.45, z: 0.28, tags: ['Assembly', 'Two-stage', 'Motor'],
    text: 'Built a real gearbox from the build guide and modeled a two-stage reduction in Onshape. After mounting the motor it ran with minimal play and a stable structure.' },
  { id: 'tap', name: 'Tap & Hand Tools', x: -0.55, z: 0.3, tags: ['Tapping', 'Hand tools'],
    text: 'Practiced tapping threads on rejected hex shafts first — keeping the tap straight and backing out regularly — before cutting the final shaft.' },
  { id: 'chain', name: 'Chain & Sprockets', x: 0.3, z: 0.3, tags: ['#25 chain', 'Chain breaker', 'Ratios'],
    text: 'Learning chain drives for my in-progress chain project: sprocket pitch vs. clearance diameter, 120°+ of wrap to prevent skipping, and how a chain breaker and master link join a chain.' },
]
