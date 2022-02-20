import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    coinListTextColor: string;
    coinListColor: string;
    accentColor: string;
  }
}
