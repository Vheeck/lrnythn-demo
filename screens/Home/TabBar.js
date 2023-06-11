import { Animated, View, TouchableOpacity } from "react-native";
import Typography from "../../components/Typography";

const TabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#F6F8FA",
        borderRadius: 12,
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={{
                flex: 0,
                padding: 12,
                alignItems: "center",
                backgroundColor: isFocused ? "#51087E" : "#F6F8FA",
                borderRadius: 12,
              }}
            >
              {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
              <Typography size={14} color={isFocused ? "#FFFFFF" : "#737373"}>
                {label}
              </Typography>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
