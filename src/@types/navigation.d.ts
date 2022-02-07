export type EventNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      event: EventNavigationProps;
      cart: undefined;
    }
  }
}