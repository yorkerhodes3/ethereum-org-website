const shadows = {
  // using css variables bc shadows do not support color tokens yet
  primary: "4px 4px 0px 0px var(--eth-colors-primaryLight)",
  outline: "0 0 0 4px var(--eth-colors-primaryHover)",
  table:
    "0 14px 66px rgba(0,0,0,.07), 0 10px 17px rgba(0,0,0,.03), 0 4px 7px rgba(0,0,0,.05)",
  drop: "0 4px 17px 0 var(--eth-colors-blackAlpha-200)",
  tableBox: {
    light:
      "0 14px 66px rgba(0,0,0,.07), 0 10px 17px rgba(0,0,0,.03), 0 4px 7px rgba(0,0,0,.05)",
    dark: "0 14px 66px hsla(0,0%,96.1%,.07), 0 10px 17px hsla(0,0%,96.1%,.03), 0 4px 7px hsla(0,0%,96.1%,.05)",
  },
  tableItemBox: {
    light: "0 1px 1px rgba(0, 0, 0, 0.1)",
    dark: "0 1px 1px hsla(0,0%,100%,.1)",
  },
}

export default shadows
