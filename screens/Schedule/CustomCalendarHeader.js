import React from "react";
import { View } from "react-native";
import Typography from "../../components/Typography";

const CustomCalendarHeader = ({ date }) => {
  const dateObject = new Date(date);
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <View>
      <Typography
        medium
        size={19}
        style={{ textAlign: "center", color: "#51087E" }}
      >
        {months[month]}
      </Typography>
      <Typography
        medium
        size={12}
        style={{ textAlign: "center", color: "#8F9BB3" }}
      >
        {year}
      </Typography>
    </View>
  );
};

export default CustomCalendarHeader;
