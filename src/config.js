// ── EDIT THIS FILE ─────────────────────────────────────────────
// Drop your photos into /public/projects and set `image: '/projects/yourfile.jpg'`.
// Until then, each frame shows a generated blueprint placeholder.

export const owner = {
  name: 'Illia Maliuk',
  title: 'STEM Portfolio',
  about:
    'This year in my robotics 1 class i am currently designing modeling and assembling essential robot mechanisms. This studio will show my work this year so far where I have done CAD, 3d printing, and laser cutting.',
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
    "galleryTitle": "Build photos",
    "gallery": [
      ["/projects/chain/gusset-bearing.jpg", "The gusset holding the flanged bearing, with the sprocket and shaft", "photo"],
      ["/projects/chain/gearbox-on-board.jpg", "The gearbox on the board", "photo"],
      ["/projects/chain/sprocket-shaft.jpg", "Sprocket on the printed shaft at the gearbox hole", "photo"],
      ["/projects/chain/gusset-sprocket.jpg", "Gusset, bearing and sprocket on the six-inch board", "photo"],
      ["/projects/chain/gusset-back.jpg", "Back of the board: the gusset bolted on with two bolts and nuts", "photo"],
      ["/projects/chain/both-shafts.jpg", "Both shafts and sprockets on the laser-cut board, six inches apart", "photo"]
    ],
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

// Engineering 2 (EngineerTech II) — written from the assignment briefs, not from my own reports yet.
// The `process` steps describe how each assignment ran; swap them for my own notes/quotes as I add them.
const brief = { processTitle: 'Process', processNote: 'from the assignment brief' }
projects.push(
  {
    id: 'rube', plaque: 'Rube Goldberg', room: 'eng2', wall: 'back', slot: 0, title: 'Rube Goldberg Machine', date: 'Aug 14', image: null,
    tags: ['Rube Goldberg', 'Chain reaction', 'Video'],
    text: 'The first assignment of Engineering 2: a Rube Goldberg machine, documented on video. The footage is going into this frame.',
  },
  {
    id: 'vex-part', plaque: 'VEX Part', room: 'eng2', wall: 'back', slot: 1, title: 'Sketch, CAD & Print a VEX Part', date: 'Aug 21', image: null, ...brief,
    tags: ['Sketching', 'CAD', '3D printing'],
    text: 'Pick a part from the VEX hardware containers, then take it from a notebook sketch to a CAD model to a finished 3D print.',
    process: [
      ['Sketch', 'Sketch the part in the engineering sketchbook in 3-D and in orthographic views.'],
      ['CAD', 'Model the part in CAD (Fusion 360 or Onshape).'],
      ['Scale', 'Scale the part so it prints in under 30 minutes, and get approval before printing.'],
      ['Print', 'Print it.'],
      ['Document', 'Take a screenshot from the isometric "home" view with the design timeline visible at the bottom.'],
    ],
  },
  {
    id: 'levers', plaque: 'Levers', room: 'eng2', wall: 'back', slot: 2, title: 'Simple Machines: Levers', date: 'Sep 2', image: null, ...brief,
    tags: ['Levers', 'Mechanical advantage', 'VEX'],
    text: 'Design a device and investigate the mechanical advantage of all three lever classes, first by feel and then with measurements.',
    process: [
      ['Research & sketch', 'Research the three classes of levers, then sketch each one in the notebook, close to real VEX hardware.'],
      ['Build', 'In a group of two or three, build one design for each lever class.'],
      ['Qualitative', 'Investigate each lever without measuring tools, label the observations and take a photo of each lever.'],
      ['CAD', 'Individually CAD an assembly of each design.'],
      ['Quantitative', 'Repeat the investigation with lab masses, rulers and force sensors.'],
      ['Conclusion', 'Write a paragraph with numerical evidence: when the mechanical advantage is greater or less than 1, and how the stabilizing force changes as the mass or the force sensor moves.'],
    ],
  },
  {
    id: 'wheel-axle', plaque: 'Wheel & Axle', room: 'eng2', wall: 'back', slot: 3, title: 'Simple Machines: Wheel & Axle', date: 'Sep 4', image: '/projects/eng2/wa-cad.jpg', ...brief,
    tags: ['Wheel and axle', 'Mechanical advantage', 'VEX'],
    text: 'The same investigation for a wheel and axle, built so the wheel or axle radius can be changed. In my compound machine it measured a mechanical advantage of 5.44 (500 g, 4.9 N, with 0.9 N of input force).',
    gallery: [
      ['/projects/eng2/wa-sketch.jpg', 'Notebook sketch'],
      ['/projects/eng2/wa-cad.jpg', 'CAD'],
      ['/projects/eng2/wa-cad-2.jpg', 'CAD, on its post'],
    ],
    process: [
      ['Design', 'Sketch and build a wheel and axle (it needs string) where either the wheel or the axle radius can be changed.'],
      ['Investigate', 'Run a qualitative investigation first, then a quantitative one with lab masses, rulers and force sensors.'],
      ['Question', 'Work out when the mechanical advantage is greater or less than 1, and what that means for the machine.'],
      ['Teamwork', 'Support teammates who are new to CAD.'],
      ['Conclusion', 'Write a paragraph with numerical evidence.'],
    ],
  },
  {
    id: 'pulleys', plaque: 'Pulley Systems', room: 'eng2', wall: 'back', slot: 4, title: 'Simple Machines: Pulley Systems', date: 'Sep 4', image: '/projects/eng2/pulley-cad.jpg', ...brief,
    tags: ['Pulleys', 'Block and tackle', 'Mechanical advantage'],
    text: 'Investigate a pulley system, comparing fixed and moving pulleys with a focus on block and tackle. In my compound machine the pulley measured a mechanical advantage of 4 (200 g, 1.96 N, with 0.5 N of input force).',
    gallery: [
      ['/projects/eng2/pulley-sketch.jpg', 'Sketch'],
      ['/projects/eng2/pulley-cad.jpg', 'CAD'],
      ['/projects/eng2/pulley-cad-2.jpg', 'CAD, second angle'],
      ['/projects/eng2/pulley-cad-3.jpg', 'CAD, third angle'],
      ['/projects/eng2/pulley-cad-4.jpg', 'CAD, fourth angle'],
      ['/projects/eng2/pulley-cad-5.jpg', 'CAD, fifth angle'],
      ['/projects/eng2/pulley-notes.jpg', 'Notebook analysis'],
    ],
    process: [
      ['Choose', 'Select a pulley system to study: fixed pulleys, moving pulleys, or a block and tackle.'],
      ['Build & CAD', 'Build it and CAD it. Pulleys are not VEX parts, so either model one or use a "good enough" placeholder.'],
      ['Investigate', 'Run the qualitative investigation, then measure with lab masses, rulers and force sensors.'],
      ['Conclusion', 'Write a paragraph with numerical evidence for the mechanical advantage.'],
    ],
  },
  {
    id: 'gears-sprockets', plaque: 'Gears & Sprockets', room: 'eng2', wall: 'right', slot: 0, title: 'Gears & Sprockets', date: 'Sep 4', image: '/projects/eng2/gs-cad.jpg', ...brief,
    tags: ['Gear trains', 'Chain and sprocket', 'CAD'],
    text: 'Investigate gear trains and chain-and-sprocket systems, in a design that works with both an odd and an even number of gears. In my compound machine the gear and sprocket set measured a mechanical advantage of 3.67 (100 g, 1 N, with 0.27 N of input force).',
    gallery: [
      ['/projects/eng2/gs-sketch.jpg', 'Sketch'],
      ['/projects/eng2/gs-cad.jpg', 'CAD'],
      ['/projects/eng2/gs-notes.jpg', 'Notebook analysis'],
    ],
    process: [
      ['Design', 'Make a design that allows both an odd and an even number of gears.'],
      ['Qualitative', 'Comment on the relative speeds and the rotation directions of the gears.'],
      ['CAD', 'Link the gear motion in CAD, following a tutorial video that skips gear creation.'],
      ['Quantitative', 'Measure when the mechanical advantage is above or below 1 (a gear system behaves like a lever for force) and the rotation of each gear or sprocket.'],
      ['Conclusion', 'Write a paragraph with numerical evidence.'],
    ],
  },
  {
    id: 'compound', plaque: 'Compound Machine', room: 'eng2', wall: 'right', slot: 1, title: 'Compound Machine', date: 'Sep 21', image: '/projects/eng2/cad-assembly.jpg',
    tags: ['Compound machine', 'Mechanical advantage', 'Fusion 360', 'Block and tackle'],
    text: "A compound machine that lifts heavy weights more easily by linking a wheel and axle, a gear and sprocket set, and a block and tackle pulley. It was designed for a mechanical advantage of 80; the finished machine measured 19.",
    processTitle: 'Design process', processNote: 'in my own words, from my compound machine write-up',
    gallery: [
      ["/projects/eng2/concept-sketch.jpg", "Concept sketch of the full compound machine"],
      ["/projects/eng2/cad-assembly.jpg", "Full assembly in Fusion 360"],
      ["/projects/eng2/cad-assembly-2.jpg", "Full assembly, second angle"],
      ["/projects/eng2/cad-mechanisms.jpg", "The mechanisms laid out in CAD"],
    ],
    process: [
      ["Define", "After building four simple machines (levers, pulleys, gears and sprockets, and wheels and axles), we needed to combine a few of them into a single compound machine. We decided that our compound machine’s goal is to lift heavy weights easier."],
      ["Why these three", "Since the wheel and axle, sprockets, and pulleys all have rotating wheel systems, we decided they should be easy to combine. We had to connect these components and integrate their functions to maximize total mechanical advantage."],
      ["Power flow", "While we knew how to physically connect the components, we had to figure out the exact sequence to transfer input force into output lift. Noticing an axle-mounted gear and a sprocket gear assembly, we realized we could merge them directly. We combined their individual mechanical advantages by replacing one sprocket gear with the axle-mounted gear. From that point, we linked the wheel and axle to pull up on the block and tackle pulley system with string, which lifted the final weight."],
      ["Build", "Using the gear and sprocket set as our starting point established a clear power flow, completing the compound machine with a few extra VEX parts. We needed a lot of extra parts to support the construction and to ideally position each simple machine so that it can correspond with the others."],
      ["The math", "My group's compound machine was supposed to have a mechanical advantage of 80, ideally, which I got by multiplying the mechanical advantage of each simple machine. The wheel and axle had a mechanical advantage of five in its final form, while the others had a mechanical advantage of two for the sprockets, and then a mechanical advantage of eight for the pulley."],
      ["Measured", "M.A. = output force ÷ input force. Wheel and axle: 500 g (4.9 N) ÷ 0.9 N = 5.44. Gears and sprockets: 100 g (1 N) ÷ 0.27 N = 3.67. Pulley: 200 g (1.96 N) ÷ 0.5 N = 4. Whole machine: 950 g (9.5 N) ÷ 0.5 N = 19."],
      ["Result", "Our final output was 19, resulting in an efficiency of 23.75%."],
      ["Why it fell short", "This relatively low efficiency is likely due to the use of plastic-on-metal and metal-on-metal bushings instead of small ball bearings. The axles also didn't have proper bearings, so they had to rub against metal square-shaped holes. The increased friction between these surfaces causes significant energy loss, reducing the overall efficiency of the machine."],
    ],
  },
)

export const roomProjects = (room) => projects.filter((p) => (p.room || 'robotics') === room)

// Tools on the workbench. x/z are positions on the bench (x: -2.1…2.1 left→right, z: -0.3 back … 0.3 front).
export const tools = [
  { id: 'cad', name: 'Onshape + Illustrator', x: -1.85, z: -0.1, tags: ['CAD', 'FeatureScript', 'Vector drawing'],
    text: 'Where every project starts. I model gearboxes, shafts and chassis in Onshape (using FeatureScripts for exact shafts, spacers and belt/chain geometry) and export hairline drawings to Illustrator for laser cutting.',
    processTitle: 'FRC Design course', processNote: 'from my Onshape assignments',
    process: [
      ['Account setup', 'Accepted the Onshape invitation and followed the frcdesign.org course setup: subscribed to FRCDesignAPP and added the custom FeatureScripts (Julia\'s, Alex\'s, Belt & Chain Gen, Origin Cube and 2471\'s).'],
      ['Stage 1A · Fundamentals', 'Three sections of exercises (6, 4 and 5), with a screenshot for each: 15 in total.'],
      ['Stage 1B · Power transmissions', 'Simple Gearbox (torque vs. speed and mechanical advantage), Two-Stage Gearbox, and Gear and Belt Gearbox (belts and pulleys, chain and sprockets).'],
    ] },
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
  { id: 'safety', name: 'Safety Training', x: 1.45, z: 0.3, tags: ['Shop safety', 'PPE', 'Electronics safety'],
    text: 'Safety comes before grades or projects. Before using each tool or area I wrote a safety summary, did an in-person demo and took a test, and I scored full marks on all five tests.',
    processTitle: 'Key rules', processNote: 'from my safety write-ups',
    process: [
      ['General shop', 'Safety is the number one priority, above grades or projects. Dress so nothing can catch in a moving part (shirt tucked in, sleeves rolled up, jewelry off, hair tied back, no gloves at machines, closed-toed shoes) and always wear eye protection.'],
      ['Hand & power tools', 'Five basic rules: keep tools in good working order, use them only as designed, inspect them before use, follow the manufacturer\'s instructions, and always use PPE.'],
      ['Drill press', 'Remove the chuck key right after tightening, clamp the workpiece, and wait for the spindle to stop. I plan to make securing the piece, pulling the key and checking the table lock automatic.'],
      ['Laser cutter', 'Ventilation matters because of toxic fumes, so use a multi-gas respirator and laser safety glasses, keep a CO2 extinguisher and a water spray bottle close, wait at least 30 seconds before opening, and never leave the machine unattended.'],
      ['Electronics', 'Fuse first off the positive terminal with the switch right after it, confirm a circuit is de-energized with a multimeter, keep signal and power lines separate, and use a single ground point.'],
    ] },
]
