// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow1Icon(props: Arrow1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M92.414 16.414a2 2 0 000-2.828L79.686.858a2 2 0 10-2.828 2.828L88.172 15 76.858 26.314a2 2 0 102.828 2.828l12.728-12.728zM0 17h91v-4H0v4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow1Icon;
/* prettier-ignore-end */
