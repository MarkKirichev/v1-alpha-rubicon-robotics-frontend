// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1Icon(props: Ellipse1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1957 1649"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#WRJYC2pMnza)"}>
        <ellipse
          cx={"978.142"}
          cy={"824.436"}
          rx={"552.142"}
          ry={"398.436"}
          fill={"currentColor"}
          fillOpacity={".4"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"WRJYC2pMnza"}
          x={"0"}
          y={"0"}
          width={"1956.28"}
          height={"1648.87"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"213"}
            result={"effect1_foregroundBlur_1_547"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse1Icon;
/* prettier-ignore-end */
