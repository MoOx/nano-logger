import formatLog from "./format"

export default (prefix) => {
  return (...args) => console.log(...formatLog(prefix, ...args))
}
