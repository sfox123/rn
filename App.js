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
      <Text style={styles.title}>Gas vs Electric</Text>
      <Text style={styles.subTitle}>Gas Car</Text>
      <TextInput
        style={styles.input}
        placeholder="Cost of 1 L of gas"
        onChangeText={(text) => setGasCost(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gas car mileage"
        onChangeText={(text) => setGasMileage(text)}
      />
      <Text style={styles.subTitle}>Electric Car</Text>
      <TextInput
        style={styles.input}
        placeholder="Cost of 1 kwH of electricity"
        onChangeText={(text) => setElectricityCost(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Electric car mileage"
        onChangeText={(text) => setElectricMileage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of km driven per year"
        onChangeText={(text) => setKmDriven(text)}
      />
      <Button title="Calculate" onPress={calculate} />
      <Text style={styles.resultsTitle}>Results</Text>
      <Text style={styles.results}>{results}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  results: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
  },
});
