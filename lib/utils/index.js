export function formatDate(dateString, options) {
  // Check if dateString is a valid date
  const dateObject = new Date(dateString);
  if (isNaN(dateObject.getTime())) {
      return "Invalid Date";
  }

  // If dateString is valid, proceed with formatting
  const { format } = new Intl.DateTimeFormat('en-US', options);
  return format(dateObject);
}
