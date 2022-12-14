import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
} from "react-native";

import React, { useCallback, useEffect, useState } from "react";
import logonoirsmall from "../assets/logonoirsmall.png";

import { useFonts, Roboto_900Black, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

import CircularProgress from "./components/CircularProgress";

import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Value, cond, eq } from "react-native-reanimated";
import { mix, onGestureEvent, withTransition } from "react-native-redash";

const Premium = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Roboto_900Black, Roboto_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon.Button
          name="user-plus"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("AddAFriend")}
        ></Icon.Button>

        <View style={styles.iconRight}>
          <Icon.Button
            name="user-circle"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("Profil")}
          ></Icon.Button>

          <Icon.Button
            name="send"
            color={"black"}
            backgroundColor={"transparent"}
            onPress={() => navigation.navigate("Messages")}
          ></Icon.Button>
        </View>
      </View>

      <View style={styles.secondHeader}>
        <View style={{height: 120, width: 155}}>
            <Image source={logonoirsmall} style={styles.logo} />
        </View>
      </View>
      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>PLAN PREMIUM : </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.textTitre}>HABITUDES ILLIMIT??ES</Text> 
        <Text style={styles.textBody}>
          Le plan gratuit permet d???avoir uniquement 4 habitudes. Cr??ez d??s
          maintenant autant d???habitudes que vous le souhaitez et r??alisez vos
          objectifs.
        </Text>

        <Text style={styles.textTitre}>GROUPES ILLIMIT??S</Text>
        <Text style={styles.textBody}>
          Le plan gratuit permet de cr??er uniquement un groupe. Cr??ez d??s
          maintenant autant de groupe que vous le souhaitez avec vos amis.{" "}
        </Text>

        <Text style={styles.textTitre}>NOUVELLE MISE ?? JOUR</Text>
        <Text style={styles.textBody}>
          De nouvelles MAJ de contenues payantes arrivent, elles seront
          gratuites pour vous
        </Text>
      </View>
      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>7jours d???essai gratuit 
2,99???/mois </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{fontSize: 10}}> Abonnement mensuel. Annulable n???importe quand</Text>
      </View>

      <View style={styles.viewValidate}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <LinearGradient
            colors={["#FF3B01", "#FACA21"]}
            style={styles.buttonValidate}
          >
            <Text style={styles.buttonText}>premium ?? VIE
9,99??? une fois </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{fontSize: 10}}>Toutes les fonctionnalit??s Premium ?? vie pour 9,99???</Text>
      </View>

      <View style={styles.footer}>
        <Icon.Button
          name="home"
          color={"black"}
          backgroundColor={"transparent"}
        ></Icon.Button>

        <Icon.Button
          name="bar-chart"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("Stats")}
        ></Icon.Button>

        <TouchableOpacity onPress={() => navigation.navigate("AddHabitOne")}>
          <LinearGradient colors={["#FF3B01", "#FACA21"]} style={styles.button}>
            <Text style={styles.textbutton}>+</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Icon.Button
          name="group"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("GroupFriends")}
        ></Icon.Button>

        <Icon.Button
          name="gear"
          color={"black"}
          backgroundColor={"transparent"}
          onPress={() => navigation.navigate("Seetings")}
        ></Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  header: {
    width: "100%",
    flexDirection: "row",

    paddingTop: "5%",
    justifyContent: "space-between",
  },

  iconRight: {
    flexDirection: "row",
  },

  secondHeader: {
    justifyContent: "center",
    alignItems: "center",
   flex: 3

   
  },

  logo: {
    width: undefined,
    height: undefined,
    flex: 1
 

    //311 355px
  },

  body: {
    flex: 7,
    
  },

  viewValidate: {
    flex: 1,
    padding: "5%",

    justifyContent: "center",
    alignItems: "center",
  },

  buttonValidate: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  buttonText: {
    fontFamily: "Roboto_900Black",
    textTransform: "uppercase",
    letterSpacing: 0.04,
    color: "white",

    alignSelf: "center",
  },

  textTitre: {
    fontFamily: "Roboto_900Black",
    margin: "2%"


  },

  textBody: {
    fontFamily: "Roboto_400Regular",
    marginLeft: "2%"
  },

  footer: {
    flex: 1,

    justifyContent: "space-between",

    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: "5%"
  },

  button: {
    borderRadius: 20,
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  textbutton: {
    color: "white",
    fontSize: 25,
  },
});

export default Premium;
