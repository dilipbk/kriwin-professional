// Viewport utilities for mobile optimization

export const viewport = {
  // Get viewport dimensions
  getViewportSize: () => ({
    width: Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ),
    height: Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ),
  }),

  // Check if device is mobile
  isMobile: () => {
    return window.innerWidth < 768;
  },

  // Check if device is tablet
  isTablet: () => {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  },

  // Check if device is desktop
  isDesktop: () => {
    return window.innerWidth >= 1024;
  },

  // Get safe area insets for devices with notches
  getSafeAreaInsets: () => {
    const style = getComputedStyle(document.documentElement);
    return {
      top: parseInt(style.getPropertyValue("env(safe-area-inset-top)") || "0"),
      right: parseInt(
        style.getPropertyValue("env(safe-area-inset-right)") || "0"
      ),
      bottom: parseInt(
        style.getPropertyValue("env(safe-area-inset-bottom)") || "0"
      ),
      left: parseInt(
        style.getPropertyValue("env(safe-area-inset-left)") || "0"
      ),
    };
  },

  // Prevent zoom on input focus (iOS Safari)
  preventZoomOnFocus: () => {
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector("meta[name=viewport]");
      if (el !== null) {
        const content = el.getAttribute("content");
        const re = /maximum-scale=[0-9.]+/g;

        if (content) {
          let newContent: string;
          if (re.test(content)) {
            newContent = content.replace(re, "maximum-scale=1.0");
          } else {
            newContent = [content, "maximum-scale=1.0"].join(", ");
          }
          el.setAttribute("content", newContent);
        }
      }
    };

    const enableIosTextFieldZoom = () => {
      const el = document.querySelector("meta[name=viewport]");
      if (el !== null) {
        const content = el.getAttribute("content");
        if (content) {
          const newContent = content.replace(
            /maximum-scale=[0-9.]+/g,
            "maximum-scale=5.0"
          );
          el.setAttribute("content", newContent);
        }
      }
    };

    // Disable zoom on focus
    document.addEventListener("focusin", addMaximumScaleToMetaViewport, false);
    document.addEventListener("focusout", enableIosTextFieldZoom, false);
  },

  // Optimize for PWA display modes
  isPWA: () => {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      // @ts-expect-error - for iOS Safari standalone mode
      window.navigator.standalone === true
    );
  },

  // Handle orientation changes
  onOrientationChange: (
    callback: (orientation: "portrait" | "landscape") => void
  ) => {
    const handleOrientationChange = () => {
      const orientation =
        window.innerHeight > window.innerWidth ? "portrait" : "landscape";
      callback(orientation);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    // Initial call
    handleOrientationChange();

    // Return cleanup function
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  },
};
