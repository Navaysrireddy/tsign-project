/**
 * Formats a date string into a readable format like:
 * Monday, 12 Jun 2025
 */
const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-IN", options);
};

export default formatDate;
