import * as React from 'react';
import { create } from 'zustand';


// ApplicationBar State
interface ApplicationBarData {
  // client components
  appMenuBadge: number | null;
  appMenuItems: React.JSX.Element | null;
  centerItems: React.JSX.Element | null;
  contextMenuItems: React.JSX.Element | null;
  shareMenuItems: React.JSX.Element | null;

  // anchors
  appMenuAnchor: HTMLElement | null;
  contextMenuAnchor: HTMLElement | null;
  shareMenuAnchor: HTMLElement | null;
}

// ApplicationBar Actions
interface ApplicationBarActions {
  // used by the active client to register its components
  registerClientComponents: (center: React.JSX.Element, appMenuBadge: number, appMenuItems: React.JSX.Element, contextMenuItems: React.JSX.Element, shareMenuItems: React.JSX.Element) => void;
  unregisterClientComponents: () => void;

  // used by the appbar or siblings to open/close the app/context menu
  setAppMenuAnchor: (anchor: HTMLElement | null) => void;
  setContextMenuAnchor: (anchor: HTMLElement | null) => void;
  setShareMenuAnchor: (anchor: HTMLElement | null) => void;
}


export const useApplicationBarStore = create<ApplicationBarData & ApplicationBarActions>()(
  (set) => ({

    appMenuAnchor: null,
    appMenuBadge: null,
    appMenuItems: null,
    centerItems: null,
    contextMenuAnchor: null,
    contextMenuItems: null,
    shareMenuAnchor: null,
    shareMenuItems: null,

    registerClientComponents: (centerItems, appMenuBadge, appMenuItems, contextMenuItems, shareMenuItems) =>
      set({ centerItems, appMenuBadge, appMenuItems, contextMenuItems, shareMenuItems }),

    unregisterClientComponents: () =>
      set({ centerItems: null, appMenuBadge: null, appMenuItems: null, contextMenuItems: null, shareMenuItems: null }),

    setAppMenuAnchor: (anchor) => set({ appMenuAnchor: anchor }),

    setContextMenuAnchor: (anchor) => set({ contextMenuAnchor: anchor }),

    setShareMenuAnchor: (anchor) => set({ shareMenuAnchor: anchor }),

  }),
);