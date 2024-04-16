module.exports = function (source) {
  if (process.env.NODE_ENV === "production") {
    return source.replace(
      /\{\/\*\s*START_DEV_ONLY\s*\*\/\}[\s\S]*?\{\/\*\s*END_DEV_ONLY\s*\*\/\}/g,
      ""
    );
  }
  return source;
};
