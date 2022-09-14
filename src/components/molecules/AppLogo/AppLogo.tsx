import clsx from "clsx";

import { LogoContainer } from "./AppLogo.style";

import { ReactComponent as LogoIcon } from "@/assets/icons/logo.svg";

export type LogoProps = {
  spin?: boolean;
};

export function AppLogo({ spin }: LogoProps) {
  const logoIconClasses = clsx({
    spin,
    logo: true,
  });

  return (
    <LogoContainer>
      <LogoIcon role="img" height="40vmin" className={logoIconClasses} />
    </LogoContainer>
  );
}

AppLogo.defaultProps = {
  spin: false,
};
