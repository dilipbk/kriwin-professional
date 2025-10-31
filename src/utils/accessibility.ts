// Accessibility testing and validation utilities

export const a11y = {
  // Check color contrast ratio
  getContrastRatio: (foreground: string, background: string): number => {
    const getLuminance = (color: string): number => {
      // Convert hex to RGB
      const hex = color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;

      // Calculate relative luminance
      const sRGB = [r, g, b].map(c => {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);

    return (lighter + 0.05) / (darker + 0.05);
  },

  // Validate WCAG contrast requirements
  validateContrast: (
    foreground: string,
    background: string,
    level: "AA" | "AAA" = "AA",
    size: "normal" | "large" = "normal"
  ): { passes: boolean; ratio: number; required: number } => {
    const ratio = a11y.getContrastRatio(foreground, background);

    const requirements = {
      AA: { normal: 4.5, large: 3 },
      AAA: { normal: 7, large: 4.5 },
    };

    const required = requirements[level][size];
    const passes = ratio >= required;

    return { passes, ratio, required };
  },

  // Check if element has accessible name
  hasAccessibleName: (element: HTMLElement): boolean => {
    return !!(
      element.getAttribute("aria-label") ||
      element.getAttribute("aria-labelledby") ||
      element.getAttribute("title") ||
      (element.tagName === "IMG" && element.getAttribute("alt")) ||
      element.textContent?.trim()
    );
  },

  // Check if interactive element is keyboard accessible
  isKeyboardAccessible: (element: HTMLElement): boolean => {
    const tabIndex = element.getAttribute("tabindex");
    const isInteractive = [
      "A",
      "BUTTON",
      "INPUT",
      "SELECT",
      "TEXTAREA",
    ].includes(element.tagName);

    return isInteractive || (tabIndex !== null && parseInt(tabIndex) >= 0);
  },

  // Find accessibility issues in DOM
  auditPage: (): Array<{
    element: HTMLElement;
    issue: string;
    severity: "error" | "warning";
  }> => {
    const issues: Array<{
      element: HTMLElement;
      issue: string;
      severity: "error" | "warning";
    }> = [];

    // Check for missing alt text on images
    document.querySelectorAll("img").forEach(img => {
      if (!img.getAttribute("alt") && !img.getAttribute("aria-label")) {
        issues.push({
          element: img,
          issue: "Image missing alt text",
          severity: "error",
        });
      }
    });

    // Check for buttons without accessible names
    document.querySelectorAll("button").forEach(button => {
      if (!a11y.hasAccessibleName(button)) {
        issues.push({
          element: button,
          issue: "Button missing accessible name",
          severity: "error",
        });
      }
    });

    // Check for links without accessible names
    document.querySelectorAll("a").forEach(link => {
      if (!a11y.hasAccessibleName(link)) {
        issues.push({
          element: link,
          issue: "Link missing accessible name",
          severity: "error",
        });
      }
    });

    // Check for form inputs without labels
    document.querySelectorAll("input, select, textarea").forEach(input => {
      const id = input.getAttribute("id");
      const hasLabel = id && document.querySelector(`label[for="${id}"]`);
      const hasAriaLabel =
        input.getAttribute("aria-label") ||
        input.getAttribute("aria-labelledby");

      if (!hasLabel && !hasAriaLabel) {
        issues.push({
          element: input as HTMLElement,
          issue: "Form input missing label",
          severity: "error",
        });
      }
    });

    // Check for missing heading hierarchy
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );
    let previousLevel = 0;

    headings.forEach(heading => {
      const currentLevel = parseInt(heading.tagName.charAt(1));

      if (currentLevel > previousLevel + 1) {
        issues.push({
          element: heading as HTMLElement,
          issue: `Heading level skipped (h${previousLevel} to h${currentLevel})`,
          severity: "warning",
        });
      }

      previousLevel = currentLevel;
    });

    return issues;
  },

  // Log accessibility audit results
  logAuditResults: (): void => {
    const issues = a11y.auditPage();

    if (issues.length === 0) {
      console.log("✅ No accessibility issues found!");
      return;
    }

    console.group("🔍 Accessibility Audit Results");

    const errors = issues.filter(issue => issue.severity === "error");
    const warnings = issues.filter(issue => issue.severity === "warning");

    if (errors.length > 0) {
      console.group(`❌ ${errors.length} Error(s)`);
      errors.forEach(({ element, issue }) => {
        console.log(`• ${issue}`, element);
      });
      console.groupEnd();
    }

    if (warnings.length > 0) {
      console.group(`⚠️ ${warnings.length} Warning(s)`);
      warnings.forEach(({ element, issue }) => {
        console.log(`• ${issue}`, element);
      });
      console.groupEnd();
    }

    console.groupEnd();
  },

  // Test keyboard navigation
  testKeyboardNavigation: (): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    console.group("⌨️ Keyboard Navigation Test");
    console.log(`Found ${focusableElements.length} focusable elements`);

    focusableElements.forEach((element, index) => {
      const hasVisibleFocus =
        window.getComputedStyle(element, ":focus-visible").outline !== "none";
      if (!hasVisibleFocus) {
        console.warn(
          `Element ${index + 1} may not have visible focus indicator:`,
          element
        );
      }
    });

    console.groupEnd();
  },
};
