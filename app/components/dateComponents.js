export function LongDateFormat(date) {
  const formatDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatDate;
}
