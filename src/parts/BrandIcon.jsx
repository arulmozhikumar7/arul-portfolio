import React from "react";

import Button from "@elements/button";

export default function BrandIcon() {
  return (
    <Button className="flex flex-col " type="link" href="/">
      <p className="text-4xl text-theme-blue">
        AMK
        <br />
        <span>
          <p className="text-[8px] text-center text-theme-blue">
            Your Friendly Neighborhood Developer
          </p>
        </span>
      </p>
    </Button>
  );
}
