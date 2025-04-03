export const formatDate = () => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date().toLocaleDateString("ru-RU", options);
};
