export const formatColor = (color) => {
  return `${color}`.trim().toLocaleLowerCase().replace(/\s+/g, "");
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 1,
  }).format(price);
};

export const formatDateSort = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};

export const formatDateFull = (date) => {
  return new Intl.DateTimeFormat("vi", {
    timeStyle: "medium",
    dateStyle: "full",
  }).format(date);
};
export const formatDate = (str) => {
  const date = new Date(str);
  if (!date) return;
  return new Intl.DateTimeFormat("vi", {
    timeStyle: "medium",
    dateStyle: "full",
  }).format(date);
};
