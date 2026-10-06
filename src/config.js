// ── EDIT THIS FILE ─────────────────────────────────────────────
// Drop your photos into /public/projects and set `image: '/projects/yourfile.jpg'`.
// Until then, each frame shows a generated blueprint placeholder.

export const owner = {
  name: 'Illia Maliuk',
  title: 'Robotics Design & Fabrication',
  about:
    'I design, model and prototype robot mechanisms — CAD in Onshape, 3D printing, laser cutting and hands-on assembly. This studio is a walk-through of the work.',
  email: 'illiamaliuk123@gmail.com',
}

// Projects in chronological order (oldest first). wall: 'back' (slots 0-4, left→right) then 'right' (slots 0-2, back→front).
export const projects = [
  { id: 'cardboard', wall: 'back', slot: 0, title: 'Cardboard Arm Prototype', date: 'Aug 10–13', image: '/projects/cardboard.jpg', video: '/projects/cardboard.webm',
    tags: ['Sketching', 'Rapid prototyping', 'Teamwork'],
    text: 'Sketched designs with my partner and built my multi-joint articulating arm in cardboard. I drilled the precision joints while my partner cut the arm pieces. The first version was wobbly, so we added support pieces across every joint and swapped in stiffer cardboard. Lesson: start minimal, then improve function with each iteration.' },
  { id: 'gearbox-build', wall: 'back', slot: 1, title: 'Gearbox Assembly', date: 'Aug 17–21', image: '/projects/gearbox-build.jpg',
    tags: ['Assembly', 'Motor mounting', 'Troubleshooting'],
    text: 'Physically assembled a gearbox from the build guide, caught a part mismatch before forcing it, and verified the motor-mounted result had minimal play and a stable structure.' },
  { id: 'chassis', wall: 'back', slot: 2, title: 'FRC Chassis CAD', date: 'Aug 31 – Sep 11', image: '/projects/chassis.jpg',
    tags: ['Onshape', 'FRC', 'Framing'],
    text: 'Learned Onshape fundamentals and then modeled chassis framing for the FRC Design course — tube frame, gussets and drive modules assembled into a full robot base.' },
  { id: 'testboard', wall: 'back', slot: 3, title: 'Laser-Cut Test Board', date: 'Sep 8–11', image: '/projects/testboard.jpg',
    tags: ['Onshape', 'Illustrator', 'Laser cutting'],
    text: 'Replaced a hand-drilled board with a laser-cut one: exported the gearbox bracket bolt and bearing pattern from Onshape into Illustrator so the holes match the real part exactly.' },
  { id: 'electrical', wall: 'back', slot: 4, title: 'Gearbox Electrical System', date: 'Sep 14–18', image: '/projects/electrical.jpg', video: '/projects/electrical.webm',
    tags: ['Power distribution', 'Motor controller', 'Wiring'],
    text: 'Wired the full electrical system that powers the gearbox motor — battery and breaker, power distribution panel, microcontroller and motor controller — and tested that the motor spins the laser-cut board correctly.' },
  { id: 'gearbox2', wall: 'right', slot: 0, title: 'Two-Stage Gearbox', date: 'Sep 14–18', image: '/projects/gearbox2.jpg',
    tags: ['Onshape', 'FeatureScript', 'Gear ratios'],
    text: 'Modeled a two-stage reduction (12T pinion → 50T, then 20T → 50T) from a layout sketch, with mirrored plate geometry and FeatureScript-generated shafts and spacers for exact sizing.' },
  { id: 'hex', wall: 'right', slot: 1, title: 'Hex Shaft Prototyping', date: 'Sep 14–25', image: '/projects/hex.jpg',
    tags: ['3D printing', 'Bambu Studio', 'Tapping'],
    text: 'Modeled a wheel shaft in Onshape, but the 0.499 in hex printed too loose. I printed three scaled variants (100.1%, 100.5%, 101%) in one run, tested them in the gearbox, and found 101% fit best — then practiced tapping on the rejects.' },
  { id: 'chain', wall: 'right', slot: 2, title: 'Chain Drive (In Progress)', date: 'Sep 21 – Oct 2', image: '/projects/chain.jpg',
    tags: ['In progress', '#25 chain', 'Sprockets'],
    text: 'Currently building a chain-driven gearbox. So far: studied chain and sprocket fundamentals (pitch vs. clearance diameter, 120°+ wrap), built the gearbox prototype with wheel, spacer and bolts, and iterated the bearing gusset (12 → 10 → 8 mm) until the bolt holes lined up. The chain loop itself is the next step.' },
]

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
