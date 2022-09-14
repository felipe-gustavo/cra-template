import styled from "styled-components";

export const LogoContainer = styled.div`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo.spin {
      animation: App-logo-spin infinite 20s linear;
    }
  }
`;
