import { useState } from "react";
import { Dimensions, View } from "react-native";

import authStyles from "../../styles/authStyles";
import BottomNav from "../../components/BottomNav";
import { UserMenuHeader } from "../../components/Header";
import Typography from "../../components/Typography";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { AddSquare, ArrowLeft } from "iconsax-react-native";
import { Calendar } from "react-native-calendars";
import CustomCalendarHeader from "./CustomCalendarHeader";
import CustomCalendarArrow from "./CustomCalendarArrow";
import Hr from "../../components/Hr";
import { ScheduleList } from "../../components/ScheduleList";

const ScheduleScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [newNoteModal, setNewNoteModal] = useState(false);
  const [selected, setSelected] = useState("07/09/2023");

  const shedule = [
    {
      title: "Study for upcoming exam",
      startTime: "10:00",
      endTime: "13:00",
      description:
        "Short description goes here, and all the information can be easily filled...",
    },
    {
      title: "Study for upcoming exam",
      startTime: "10:00",
      endTime: "13:00",
      description:
        "Short description goes here, and all the information can be easily filled...",
    },
    {
      title: "Study for upcoming exam",
      startTime: "10:00",
      endTime: "13:00",
      description:
        "Short description goes here, and all the information can be easily filled...",
    },
    {
      title: "Study for upcoming exam",
      startTime: "10:00",
      endTime: "13:00",
      description:
        "Short description goes here, and all the information can be easily filled...",
    },
  ];

  return (
    <View style={[authStyles.container, { paddingBottom: 16 }]}>
      <UserMenuHeader title="Schedule" />
      <ScrollView
        contentContainerStyle={{
          width,
        }}
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={{ paddingVertical: 24 }}>
          <TouchableOpacity>
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AddSquare color="#51087E" />
              <Typography color="#51087E" style={{ marginLeft: 8 }}>
                New Schedule
              </Typography>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Calendar
            style={{ width: width - 32, marginBottom: 24 }}
            theme={{
              // backgroundColor: "#ffffff",
              // calendarBackground: "#ffffff",
              // textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#51087E",
              selectedDayTextColor: "#ffffff",
              selectedDotColor: "#51087E00",
              // stylesheet: {calendar},
              // textDayStyle: {backgroundColor: '#51087E'},
              // todayTextColor: "#51087E",
              dayTextColor: "#222B45",
              // textDayStyle: {
              //   flex: 0,
              //   flexDirection: "column",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   textAlign: "center",
              //   fontSize: 14,
              //   paddingVertical: 3,
              //   height: 28,
              //   width: 28,
              //   borderRadius: 10,
              // },
              todayTextColor: "#222B45",
              textDisabledColor: "#8F9BB3",
              "stylesheet.day.single": {
                today: {
                  borderRadius: 8,
                },
                // todayText: {
                //   color: "white",
                //   fontWeight: "bold",
                //   fontSize: 19,
                // },
              },
            }}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
            markingType={"custom"}
            arrowsHitSlop={0}
            renderArrow={(direction) => (
              <CustomCalendarArrow direction={direction} />
            )}
            // dayComponent={(date) => (
            //   <View>
            //     <Typography>{JSON.stringify(date)}</Typography>
            //   </View>
            // )}
            renderHeader={(date) => <CustomCalendarHeader date={date} />}
          />
          <Hr color="#EFEFEF" />
          <View
            style={{
              width: width - 32,
              marginTop: 10,
              marginBottom: 16,
              flex: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography medium size={16} color="#1A1A1A">
              Today
            </Typography>
            <TouchableOpacity>
              <Typography
                color="#51087E"
                size={13}
                style={{ textDecorationLine: "underline" }}
              >
                View All
              </Typography>
            </TouchableOpacity>
          </View>
          <View>
            <ScheduleList data={shedule} />
          </View>
        </View>
      </ScrollView>
      <BottomNav navigate={navigate} open={() => setNewNoteModal(true)} />
    </View>
  );
};

export default ScheduleScreen;
