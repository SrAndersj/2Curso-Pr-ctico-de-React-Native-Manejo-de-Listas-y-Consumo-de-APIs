import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { map, capitalize } from "lodash";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";

    return { backgroundColor: color, width: `${num}%` };
  };

  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blcokTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>

          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },

  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },

  blcokTitle: {
    width: "30%",
  },

  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },

  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 10,
    borderRadius: 20,
    overflow: "hidden",
  },

  bar: {
    // backgroundColor: "red",
    // width: "40%",
    height: 10,
    borderRadius: 20,
  },
});
