import React from "react";
import SidebarItem from "../SidebarItem";
import StarSvg from "../../UI/Svg/Star";
import GiftSvg from "../../UI/Svg/Gift";
import NotificationItem from "./NotificationItem";
import NotificationSection from "./NotificationSection";
import LockSvg from "../../UI/Svg/Lock";
import RefreshSvg from "../../UI/Svg/Refresh";
import PowerSvg from "../../UI/Svg/Power";
import NotificationPlaceholder from "../../UI/Placeholder/Notification";

type NotificationProps = {
  isActive?: boolean;
};

const Notification: React.FC<NotificationProps> = ({ isActive }) => {
  return (
    <SidebarItem
      title="Notification"
      id="tab-content-notification"
      isActive={isActive}
    >
      <NotificationSection title="Today">
        <NotificationItem
          title="Congratulations!"
          time="08:45 PM"
          content="You win 5GB free disk space. What you can do now is to go
                    throw them and si what there are up to."
          svg={<StarSvg />}
          svgType="warning"
          subSvg={<GiftSvg />}
        />
      </NotificationSection>

      <NotificationSection title="Yesterday">
        <NotificationItem
          title="Password Changed"
          time="04:25 PM"
          content="Your password has been updated successfully."
          svg={<LockSvg />}
          svgType="success"
          subSvg={<RefreshSvg />}
        />
      </NotificationSection>

      <NotificationSection title="Previous">
        <NotificationItem
          title="Password Changed"
          time="04:25 PM"
          content="Your password has been updated successfully."
          svg={<LockSvg />}
          svgType="success"
          subSvg={<RefreshSvg />}
        />
        <NotificationItem
          title="Update your password"
          time="04:25 PM"
          content="Please update your password. It has been compromised"
          svg={<LockSvg />}
          svgType="warning"
          subSvg={<PowerSvg />}
        />

        <NotificationPlaceholder />
      </NotificationSection>
    </SidebarItem>
  );
};

export default Notification;
