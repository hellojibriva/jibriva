// Nigeria's 6 geopolitical zones and their 36 states + FCT. This is a
// standard, publicly known Nigerian administrative grouping — not a value
// supplied by WAHIS — used only to roll up WAHIS state-level records for
// analysis. State names match the geoBoundaries ADM1 "shapeName" field
// (see data/brucellosis/nigeria-states.geojson) so both datasets join
// cleanly on state name.

export type GeopoliticalZone =
  | "North Central"
  | "North East"
  | "North West"
  | "South East"
  | "South South"
  | "South West";

export const ZONE_STATES: Record<GeopoliticalZone, string[]> = {
  "North Central": ["Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau", "Abuja Federal Capital Territory"],
  "North East": ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
  "North West": ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
  "South East": ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
  "South South": ["Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers"],
  "South West": ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
};

const STATE_TO_ZONE: Record<string, GeopoliticalZone> = Object.fromEntries(
  Object.entries(ZONE_STATES).flatMap(([zone, states]) =>
    states.map((state) => [state, zone as GeopoliticalZone]),
  ),
);

export function getZoneForState(state: string): GeopoliticalZone | undefined {
  return STATE_TO_ZONE[state];
}
