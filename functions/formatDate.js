const formatDate = (date) => {
  return `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate()}`;
};

export default formatDate;
