export default (path, file = false) => {
  return () => {
    return import(
      `../views/${path || ""}${path ? "/" : ""}${file || "index"}.vue`
    );
  };
};
