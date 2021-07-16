// Fetch all featured events

export const fetchAllEventsHandler = (array) => {
  return array.filter((data) => data.isFeatured === true);
};

export const showEventDetailsHandler = (array, id) => {
  return array.find((data) => id === data.id);
};
