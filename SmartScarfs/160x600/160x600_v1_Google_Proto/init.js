// Initialization and Polite Loading

  //Make sure Enabler is initialized, otherwise register initialize event handler 
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }

  // if initial load is complete, go on to polite load
  function enablerInitHandler(event) {
    if (Enabler.isPageLoaded()) {
      pageLoadHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadHandler);
    }
  }

  // Polite Load
  function pageLoadHandler(event) {
    // Polite Content 
  }


