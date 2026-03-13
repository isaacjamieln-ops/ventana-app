import { useEffect, useState } from "react";

export default function InstallPWA() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {

    const handler = (e) => {

      e.preventDefault();

      setDeferredPrompt(e);

      console.log("PWA instalable detectada");

    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);

  }, []);

  const installApp = async () => {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;

    console.log(choice.outcome);

    setDeferredPrompt(null);

  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={installApp}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        padding: "12px 18px",
        background: "#0d6efd",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      📲 Instalar App
    </button>
  );
}