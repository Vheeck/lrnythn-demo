import { View } from "react-native";

const Card = ({ children }) => {
  return (
    <>
      <View
        style={{
          borderColor: "#4F067C",
          borderWidth: 1,
          borderRadius: 12,
          backgroundColor: "#380E65",
          padding: 20,
        }}
      >
        {children}
      </View>
    </>
  );
};

export default Card;
