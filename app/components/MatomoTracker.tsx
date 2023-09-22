import { ReactNode } from "react";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const instance = createInstance({
  urlBase: "http://localhost/matomo/",
  siteId: 4,
  trackerUrl: "http://localhost/matomo/matomo.php",
  srcUrl: "http://localhost/matomo/matomo.js",
});

interface MatomoTrackerProps {
  children: ReactNode;
}

const MatomoTracker: React.FC<MatomoTrackerProps> = ({ children }) => {
  return (
    <>
      <MatomoProvider value={instance} />
      {children}
    </>
  );
};

export default MatomoTracker;
