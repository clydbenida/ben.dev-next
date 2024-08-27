import { useEffect, useState } from "react";

type DeviceTypes = "android" | "ipad" | "iphone" | "pc";

/**
 * Hook for checking device type
 */
export const useDeviceType = (): DeviceTypes => {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("pc");
  useEffect(() => {
    if (navigator.userAgent.match(/Android/i)) {
      setDeviceType("android");
    } else if (navigator.userAgent.match(/iPhone/i)) {
      setDeviceType("iphone");
    } else if (navigator.userAgent.match(/iPad/i)) {
      setDeviceType("ipad");
    } else {
      setDeviceType("pc");
    }
  }, []);

  return deviceType;
};
