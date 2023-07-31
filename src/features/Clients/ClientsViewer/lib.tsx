import {
  LocationSVG16,
  PhoneSVG16,
  UserSVG16,
} from "../../../shared/assets";

export function SwitcherSVGIcon(
  condition: "user" | "phoneNumber" | "location"
) {
  switch (condition) {
    case "user":
      return <UserSVG16 />;
    case "phoneNumber":
      return <PhoneSVG16 />;
    case "location":
      return <LocationSVG16 />;
  }
}
