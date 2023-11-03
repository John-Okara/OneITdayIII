import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AgendaScreen() {
  return (
    <View style={styles.backround}>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Header 1</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Header 2</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Header 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 1, Cell 1</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 1, Cell 2</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 1, Cell 3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 2, Cell 1</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 2, Cell 2</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Row 2, Cell 3</Text>
          </View>
        </View>
        {/* Add more rows and cells as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 5,
  },
  cellText: {
    textAlign: "center",
    color: "#66CCFF",
  },
  backround: {
    flex: 1,
    backgroundColor: "#000066",
  },
});

export default AgendaScreen;
