export type EventNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      event: EventNavigationProps;
      cart: undefined;
      cc_payment: undefined;
      pix_payment: undefined;
    }
  }
}