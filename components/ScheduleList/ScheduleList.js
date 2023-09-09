import { View } from "react-native";
import Schedule from "./Schedule";

const ScheduleList = ({ data }) => {
  return (
    <View>
      {data.map(({ title, description, startTime, endTime }, i) => {
        return (
          <Schedule
            title={title}
            description={description}
            startTime={startTime}
            endTime={endTime}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default ScheduleList;
