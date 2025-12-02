const toReadable = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const month = date.toLocaleString("default", { month: "long" });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};

export { toReadable };
