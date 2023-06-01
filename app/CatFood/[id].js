import { useState } from "react";
import Africa from "../../Components/CatDetails/Africa/Africa";
import Chinese from "../../Components/CatDetails/Chinese/Chinese";
import Italian from "../../Components/CatDetails/Italian/Italian";
import Tabs from "../../Components/Tabs/Tabs";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const tabs = ["Africa", "Chinese", "Italian"];

const CatFoodDetails = () => {
  
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabData = () => {
    switch (activeTab) {
      case "Africa":
        return <Africa />;

      case "Chinese":
        return <Chinese />;

      case "Italian":
        return <Italian />;

      default:
        <Text>There's no recipe left</Text>;
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>

      {displayTabData()}
    </ScrollView>
  );
};

export default CatFoodDetails;
