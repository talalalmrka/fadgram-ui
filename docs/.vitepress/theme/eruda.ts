import eruda from "eruda";

export function initEruda() {
  if (typeof window === "undefined") {
    return;
  }

  eruda.init();
}