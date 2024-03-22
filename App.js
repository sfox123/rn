import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [gasCost, setGasCost] = React.useState("");
  const [gasMileage, setGasMileage] = React.useState("");
  const [electricityCost, setElectricityCost] = React.useState("");
  const [electricMileage, setElectricMileage] = React.useState("");
  const [kmDriven, setKmDriven] = React.useState("");
  const [results, setResults] = React.useState("");

  const calculate = () => {
    const gasCarCost = (kmDriven / gasMileage) * gasCost;
    const electricCarCost = (kmDriven / electricMileage) * electricityCost;
    const savings = gasCarCost - electricCarCost;
    setResults(`You save $${savings} per year by driving an electric car.`);
  };

  return (
    <View style={styles.container}>
      <Text>Gas vs Electric</Text>
      <Text>Gas Car</Text>
      <TextInput
        placeholder="Cost of 1 L of gas"
        onChangeText={(text) => setGasCost(text)}
      />
      <TextInput
        placeholder="Gas car mileage"
        onChangeText={(text) => setGasMileage(text)}
      />
      <Text>Electric Car</Text>
      <TextInput
        placeholder="Cost of 1 kwH of electricity"
        onChangeText={(text) => setElectricityCost(text)}
      />
      <TextInput
        placeholder="Electric car mileage"
        onChangeText={(text) => setElectricMileage(text)}
      />
      <TextInput
        placeholder="Number of km driven per year"
        onChangeText={(text) => setKmDriven(text)}
      />
      <Button title="Calculate" onPress={calculate} />
      <Text>Results</Text>
      <Text>{results}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
