"use client";

import React from "react";

const ConversionTracker = () => {
  // Helper function to track events
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        send_to: "G-Y0CNWK2XHX",
        ...parameters,
      });
    }
  };

  // Track lead conversion
  const trackLeadConversion = (source = "contact_form") => {
    trackEvent("conversion", {
      event_category: "Lead",
      event_label: "Contact Form Submission",
      value: 1,
      source: source,
    });

    trackEvent("lead_generated", {
      event_category: "Engagement",
      event_label: "Thank You Page Visit",
      custom_parameter_1: source,
      custom_parameter_2: "upsale_lead",
    });
  };

  // Track form submission
  const trackFormSubmission = (
    formName = "contact_form",
    location = "footer_section"
  ) => {
    trackEvent("form_submit", {
      event_category: "Lead Generation",
      event_label: "Contact Form Submitted",
      form_name: formName,
      form_location: location,
    });

    trackEvent("generate_lead", {
      event_category: "Lead",
      event_label: "Contact Form Lead",
      value: 1,
      currency: "ILS",
      form_name: formName,
    });
  };

  // Track form start
  const trackFormStart = (
    formName = "contact_form",
    location = "footer_section"
  ) => {
    trackEvent("form_start", {
      event_category: "Lead Generation",
      event_label: "Contact Form Button Clicked",
      form_name: formName,
      form_location: location,
    });
  };

  // Track page view with conversion
  const trackConversionPageView = (
    pageTitle = "Thank You - Lead Generated"
  ) => {
    trackEvent("page_view", {
      page_title: pageTitle,
      page_location: typeof window !== "undefined" ? window.location.href : "",
      conversion: true,
    });
  };

  // Export functions for use in other components
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.upsaleConversionTracker = {
        trackLeadConversion,
        trackFormSubmission,
        trackFormStart,
        trackConversionPageView,
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ConversionTracker;
