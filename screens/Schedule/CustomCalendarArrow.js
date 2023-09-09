import React from "react";
import { View } from "react-native";
import Typography from "../../components/Typography";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react-native";

const CustomCalendarArrow = ({ direction }) => {
  return (
    <View
      style={direction === "left" ? { marginLeft: -8 } : { marginRight: -18 }}
    >
      <View
        style={{
          flex: 0,
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderWidth: 1,
          borderColor: "#F4F5F7",
          borderRadius: 10,
        }}
      >
        {direction === "left" ? (
          <ArrowLeft2 size={18} color="#1A1A1A" />
        ) : (
          <ArrowRight2 size={18} color="#1A1A1A" />
        )}
      </View>
    </View>
  );
};

export default CustomCalendarArrow;
