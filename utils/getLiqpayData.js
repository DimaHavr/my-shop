export function utf8_to_b64(str) {
  if (typeof window === "undefined") {
    // Server-side implementation
    const buffer = Buffer.from(str, "utf-8");
    return buffer.toString("base64");
  } else {
    // Client-side implementation
    return window.btoa(unescape(encodeURIComponent(str)));
  }
}

export function b64_to_utf8(str) {
  if (typeof window === "undefined") {
    // Server-side implementation
    const buffer = Buffer.from(str, "base64");
    return buffer.toString("utf-8");
  } else {
    // Client-side implementation
    return decodeURIComponent(escape(window.atob(str)));
  }
}
