function withNormalizedKeys(item) {
  return Object.entries(item)
    .map(([key, value]) => [key.replace(/\s+/g, "").toLowerCase(), value])
    .reduce((result, [normalizedKey, value]) => {
      result[normalizedKey] =
        value && typeof value === "object" ? withNormalizedKeys(value) : value;
      return result;
    }, {});
}

// const dataParsed = dataCvs.map((item) => {
//   return withNormalizedKeys(item);
// });
