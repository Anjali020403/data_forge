import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo } from 'assets';
import { forge } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={ forge } alt="Data-Forge" style={{ width: "40px", height: "auto",paddingTop: "20px"}} />
        ) : (
          <img src={ logo } alt="Data-Forge" style={{ width: "180px", height: "auto",paddingTop: "20px"}} />
        )}
      </Link>
    </Button>

    </div>
  );
};
