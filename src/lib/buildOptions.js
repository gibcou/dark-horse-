export const VEHICLES = [
  { value: "truck", label: "Full-Size Truck", price: 0 },
  { value: "jeep", label: "Jeep / SUV", price: 0 },
];

export const PAINTS = [
  { value: "Tactical Black", hex: "#16171a", price: 0 },
  { value: "Blaze Red", hex: "#E1251B", price: 0 },
  { value: "Gunmetal", hex: "#5a6068", price: 0 },
  { value: "Desert Sand", hex: "#b3a179", price: 0 },
  { value: "Forest Green", hex: "#3c4d3c", price: 0 },
  { value: "Arctic White", hex: "#e6e8ea", price: 0 },
];

export const LIFTS = [
  { value: 0, label: "Stock Height", price: 0 },
  { value: 2, label: '2" Lift', price: 1800 },
  { value: 4, label: '4" Lift', price: 3500 },
];

export const TIRES = [
  { value: 33, label: '33" All-Terrain', price: 1400 },
  { value: 35, label: '35" Mud-Terrain', price: 2200 },
  { value: 37, label: '37" Mud-Terrain', price: 3000 },
];

export const WHEELS = [
  { value: "stock", label: "Factory Wheels", price: 0 },
  { value: "method", label: "Method 305", price: 1600 },
  { value: "beadlock", label: "Beadlock", price: 2800 },
];

export const BUMPERS = [
  { value: "stock", label: "Factory Bumper", price: 0 },
  { value: "steel", label: "Steel Bumper", price: 2400 },
  { value: "full", label: "Full Protection", price: 4200 },
];

export const TOPPERS = [
  { value: "none", label: "Open Bed", price: 0 },
  { value: "topper", label: "Truck Topper", price: 2600 },
  { value: "rack", label: "Roof Rack", price: 1900 },
  { value: "tent", label: "Roof-Top Tent", price: 3800 },
];

export const LIGHTS = [
  { value: "none", label: "Factory Lighting", price: 0 },
  { value: "bar", label: "Roof Light Bar", price: 650 },
  { value: "pods", label: "Bumper Pods", price: 400 },
];

export const DEFAULT_BUILD = {
  vehicle: "truck",
  paint: "Tactical Black",
  lift: 0,
  tires: 33,
  wheels: "stock",
  bumper: "stock",
  topper: "none",
  lighting: "none",
};

const find = (opts, v) => opts.find((o) => o.value === v);

export function estimate(build) {
  return (
    find(VEHICLES, build.vehicle)?.price +
    find(PAINTS, build.paint)?.price +
    find(LIFTS, build.lift)?.price +
    find(TIRES, build.tires)?.price +
    find(WHEELS, build.wheels)?.price +
    find(BUMPERS, build.bumper)?.price +
    find(TOPPERS, build.topper)?.price +
    find(LIGHTS, build.lighting)?.price ||
    0
  );
}

export function buildSummary(build) {
  const label = (opts, v) => find(opts, v)?.label || String(v);
  return {
    vehicle_type: label(VEHICLES, build.vehicle),
    paint: label(PAINTS, build.paint),
    lift: label(LIFTS, build.lift),
    tires: label(TIRES, build.tires),
    wheels: label(WHEELS, build.wheels),
    bumper: label(BUMPERS, build.bumper),
    topper: label(TOPPERS, build.topper),
    lighting: label(LIGHTS, build.lighting),
  };
}