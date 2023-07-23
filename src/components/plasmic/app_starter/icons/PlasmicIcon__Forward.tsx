// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ForwardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ForwardIcon(props: ForwardIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.34 10.833h9.309L9.582 14.9a.84.84 0 000 1.183.83.83 0 001.175 0l5.492-5.491a.83.83 0 000-1.175l-5.483-5.5A.83.83 0 109.59 5.092l4.058 4.075H4.34a.836.836 0 00-.834.833c0 .458.375.833.834.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ForwardIcon;
/* prettier-ignore-end */
