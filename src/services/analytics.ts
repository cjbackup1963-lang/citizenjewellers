/*
|--------------------------------------------------------------------------
| Citizen Jewellers - Google Analytics Events
|--------------------------------------------------------------------------
*/

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/*
|--------------------------------------------------------------------------
| Generic GA4 event
|--------------------------------------------------------------------------
*/

export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    console.warn(
      `Google Analytics unavailable. Event not sent: ${eventName}`
    );

    return;
  }

  window.gtag("event", eventName, parameters);

  console.log(
    `📊 GA4 Event: ${eventName}`,
    parameters
  );
}

/*
|--------------------------------------------------------------------------
| WhatsApp Click
|--------------------------------------------------------------------------
*//*
|--------------------------------------------------------------------------
| Gold Price Alert Signup
|--------------------------------------------------------------------------
*/

export function trackGoldAlertSignup(
  interest: string
) {
  trackEvent("gold_alert_signup", {
    interest_type: interest,
  });
}

export function trackWhatsAppClick(
  location: string
) {
  trackEvent("whatsapp_click", {
    link_location: location,
  });
}