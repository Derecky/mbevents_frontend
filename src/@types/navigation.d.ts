import { Event } from '../_MOCK_/events';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      event: Event;
      cart: undefined;
      cc_payment: undefined;
      pix_payment: undefined;
    }
  }
}