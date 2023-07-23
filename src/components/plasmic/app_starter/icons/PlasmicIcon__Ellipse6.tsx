// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse6Icon(props: Ellipse6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1919 1680"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#fLjLxc3lF8a)"}>
        <ellipse
          cx={"959.5"}
          cy={"840"}
          rx={"533.5"}
          ry={"414"}
          fill={"currentColor"}
          fillOpacity={".3"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"fLjLxc3lF8a"}
          x={"0"}
          y={"0"}
          width={"1919"}
          height={"1680"}
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
            result={"effect1_foregroundBlur_1_550"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
