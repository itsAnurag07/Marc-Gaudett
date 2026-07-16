"use client";

import React, { useEffect, useRef } from "react";

interface KitNewsletterProps {
  layout?: "horizontal" | "vertical";
}

export default function KitNewsletter({ layout = "horizontal" }: KitNewsletterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing children to prevent duplication on HMR / navigation
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://marcgaudett.kit.com/db36f008f0/index.js";
    script.async = true;
    script.setAttribute("data-uid", "db36f008f0");

    containerRef.current.appendChild(script);

    // Apply inline styles to form elements
    const styleForm = () => {
      const form = containerRef.current?.querySelector("form");
      if (!form) return;

      // 1. Reset styles for the form and all its parent wrappers inside the container
      let current = form as HTMLElement | null;
      while (current && current !== containerRef.current) {
        if (current.style.margin !== "0px" || current.style.maxWidth !== "none") {
          current.style.setProperty("margin", "0px", "important");
          current.style.setProperty("padding", "0px", "important");
          current.style.setProperty("background", "transparent", "important");
          current.style.setProperty("border", "none", "important");
          current.style.setProperty("box-shadow", "none", "important");
          current.style.setProperty("width", "100%", "important");
          current.style.setProperty("max-width", "none", "important");
        }
        current = current.parentElement;
      }

      // 2. Locate form elements
      const input = form.querySelector(".formkit-input") as HTMLInputElement | null;
      const submit = form.querySelector(".formkit-submit") as HTMLButtonElement | null;

      if (input && submit) {
        // Clear max-width and resets on all wrapper elements inside the form
        form.querySelectorAll("*").forEach((el) => {
          const htmlEl = el as HTMLElement;
          if (htmlEl.tagName === "DIV" || htmlEl.classList.contains("formkit-background") || htmlEl.classList.contains("formkit-fields") || htmlEl.classList.contains("formkit-field")) {
            htmlEl.style.setProperty("max-width", "none", "important");
            htmlEl.style.setProperty("width", "100%", "important");
            htmlEl.style.setProperty("margin", "0px", "important");
            htmlEl.style.setProperty("padding", "0px", "important");
            htmlEl.style.setProperty("background", "transparent", "important");
            htmlEl.style.setProperty("box-shadow", "none", "important");
          }
        });

        // 3. Align input and button
        const parent = (input.closest(".formkit-fields") || input.closest("form") || input.parentElement) as HTMLElement | null;
        if (parent) {
          const expectedDirection = layout === "vertical" ? "column" : "row";
          if (parent.style.flexDirection !== expectedDirection || parent.style.flexWrap !== "nowrap") {
            parent.style.setProperty("display", "flex", "important");
            parent.style.setProperty("flex-direction", expectedDirection, "important");
            parent.style.setProperty("flex-wrap", "nowrap", "important");
            parent.style.setProperty("align-items", "stretch", "important");
            parent.style.setProperty("gap", "12px", "important");
            parent.style.setProperty("width", "100%", "important");
            parent.style.setProperty("max-width", "100%", "important");
            parent.style.setProperty("margin", "0px", "important");
            parent.style.setProperty("padding", "0px", "important");
            parent.style.setProperty("background", "transparent", "important");
            parent.style.setProperty("border", "none", "important");
            parent.style.setProperty("box-shadow", "none", "important");
          }
        }

        // 4. Style input field wrapper to stretch
        const field = (input.closest(".formkit-field") || input.parentElement) as HTMLElement | null;
        if (field && field !== parent && field.style.flex !== "1 1 auto") {
          field.style.setProperty("flex", "1 1 auto", "important");
          field.style.setProperty("width", "100%", "important");
          field.style.setProperty("margin", "0px", "important");
          field.style.setProperty("padding", "0px", "important");
          field.style.setProperty("border", "none", "important");
          field.style.setProperty("background", "transparent", "important");
        }

        // 5. Style the input itself
        if (input.style.borderRadius !== "9999px") {
          input.style.setProperty("margin", "0px", "important");
          input.style.setProperty("width", "100%", "important");
          input.style.setProperty("height", "48px", "important");
          input.style.setProperty("padding", "0 24px", "important");
          input.style.setProperty("font-size", "14px", "important");
          input.style.setProperty("color", "#1c1917", "important");
          input.style.setProperty("background-color", "#ffffff", "important");
          input.style.setProperty("border", "1px solid #c5c1b9", "important");
          input.style.setProperty("border-radius", "9999px", "important");
          input.style.setProperty("outline", "none", "important");
          input.style.setProperty("box-shadow", "0 1px 2px 0 rgba(0, 0, 0, 0.05)", "important");

          input.onfocus = () => input.style.setProperty("border-color", "#000000", "important");
          input.onblur = () => input.style.setProperty("border-color", "#c5c1b9", "important");
        }

        if (input.placeholder !== "Your email address") {
          input.placeholder = "Your email address";
        }

        // 6. Style the button itself
        if (submit.style.borderRadius !== "9999px" || submit.style.flex !== "none") {
          submit.style.setProperty("margin", "0px", "important");
          submit.style.setProperty("height", "48px", "important");
          submit.style.setProperty("padding", "0 32px", "important");
          submit.style.setProperty("font-size", "14px", "important");
          submit.style.setProperty("font-weight", "600", "important");
          submit.style.setProperty("color", "#ffffff", "important");
          submit.style.setProperty("background-color", "#000000", "important");
          submit.style.setProperty("border", "none", "important");
          submit.style.setProperty("border-radius", "9999px", "important");
          submit.style.setProperty("cursor", "pointer", "important");
          submit.style.setProperty("box-shadow", "0 1px 2px 0 rgba(0, 0, 0, 0.05)", "important");
          submit.style.setProperty("display", "inline-flex", "important");
          submit.style.setProperty("justify-content", "center", "important");
          submit.style.setProperty("align-items", "center", "important");
          submit.style.setProperty("white-space", "nowrap", "important");
          submit.style.setProperty("flex", layout === "vertical" ? "1 1 auto" : "none", "important");
          submit.style.setProperty("width", layout === "vertical" ? "100%" : "auto", "important");
          submit.style.setProperty("flex-shrink", "0", "important");

          submit.onmouseenter = () => submit.style.setProperty("background-color", "#1f2937", "important");
          submit.onmouseleave = () => submit.style.setProperty("background-color", "#000000", "important");
          
          if (layout === "vertical") {
             submit.innerText = "Join Operator Notes";
          }
        }
      }

      // 7. Hide ConvertKit brand styling & guarantee text
      const toHide = form.querySelectorAll(".formkit-powered-by, .formkit-powered-by-convertkit, .formkit-guarantee, .formkit-header, .formkit-subheader");
      toHide.forEach((el) => {
        if ((el as HTMLElement).style.display !== "none") {
          (el as HTMLElement).style.setProperty("display", "none", "important");
        }
      });
    };

    // Use MutationObserver to style elements immediately upon insertion and dynamic changes
    const observer = new MutationObserver(() => {
      if (containerRef.current) {
        observer.disconnect();
        styleForm();
        observer.observe(containerRef.current, {
          childList: true,
          subtree: true,
          attributes: true
        });
      }
    });

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      observer.disconnect();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [layout]);

  return (
    <div
      ref={containerRef}
      className="kit-newsletter-container w-full min-h-[80px]"
    />
  );
}

