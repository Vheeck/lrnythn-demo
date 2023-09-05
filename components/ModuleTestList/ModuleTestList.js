import { View } from "react-native";
import ModuleTest from "./ModuleTest";

const ModuleTestList = ({ data }) => {
  return (
    <View>
      {data.map(({ name, description, scoreObtained, scoreObtainable }, i) => {
        return (
          <ModuleTest
            name={name}
            description={description}
            scoreObtained={scoreObtained}
            scoreObtainable={scoreObtainable}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default ModuleTestList;
