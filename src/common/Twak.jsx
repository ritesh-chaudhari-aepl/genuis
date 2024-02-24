"use client";
import { useEffect, useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function Twak() {
  const tawkMessengerRef = useRef();

  useEffect(() => {
    // Customize Tawk.to messenger before loading
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onBeforeLoad = function () {
      window.Tawk_API.maximize();
    };
  }, []);

  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div className="App">
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

      <TawkMessengerReact
        propertyId="64f19ab4a91e863a5c110220"
        widgetId="1h97s8l07"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
}

export default Twak;
