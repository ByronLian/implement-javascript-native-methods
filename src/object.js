/*
JSON.stringify
*/
const myStringify = (data) => {
  if (data === undefined) return undefined;
  if (data === null) return "null";

  switch (data.constructor) {
    case String:
      return `"${data}"`;
    case Number:
    case Boolean:
      return `${data}`;
    case Array: {
      let result = "";
      for (let i = 0; i < data.length; i++) {
        result += `${myStringify(data[i])}`;
        result += i !== data.length - 1 ? "," : "";
      }
      return `[${result}]`;
    }
    case Object: {
      let result = "";
      const keys = Object.keys(data);
      keys.forEach((key, i) => {
        result += `"${key}":${myStringify(data[key])}`;
        result += i !== keys.length - 1 ? "," : "";
      });
      return `{${result}}`;
    }
    default:
      return "{}";
  }
};
