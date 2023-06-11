import { Dimensions, View } from "react-native";
import { SearchNormal1 } from "iconsax-react-native";
import Input from "../../components/Input";
import authStyles from "../../styles/authStyles";

const SearchBar = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <>
      <View
        style={{
          marginTop: 22,
        }}
      >
        <Input
          placeholder="Search..."
          beforeIcon={
            <SearchNormal1 color="#737373" variant="Linear" size={20} />
          }
          noBorder
        />
      </View>
      <View
        style={{
          flex: 0,
          width,
          height: 1,
          marginTop: 16,
          marginBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <View style={[authStyles.hr, { backgroundColor: "#F6F8FA" }]} />
      </View>
    </>
  );
};

export default SearchBar;
