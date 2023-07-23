// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3Icon(props: Ellipse3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1642 1391"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#OM-AJjygeea)"}>
        <ellipse
          cx={"820.976"}
          cy={"695.027"}
          rx={"394.976"}
          ry={"269.027"}
          fill={"currentColor"}
          fillOpacity={".25"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"OM-AJjygeea"}
          x={"0"}
          y={"0"}
          width={"1641.95"}
          height={"1390.05"}
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
            result={"effect1_foregroundBlur_1_548"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse3Icon;
/* prettier-ignore-end */
