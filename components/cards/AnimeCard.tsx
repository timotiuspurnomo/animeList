import { Colors, Fonts, Icons, Variables } from "@/constants";
import { useFavoriteStore } from "@/store";
import { AnimeDetailType } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FastImage from "@d11/react-native-fast-image";

type Props = { data: AnimeDetailType | undefined };

export default function AnimeCard({ data }: Props) {
  const router = useRouter();
  const { favouriteAnimeList } = useFavoriteStore();
  const genres = data?.genres
    .slice(0, 2)
    .map((genre) => genre.name)
    .join(" • ");
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={!data?.mal_id}
      onPress={() => router.navigate(`/anime/${data?.mal_id}`)}
      style={styles.mainView}
    >
      <FastImage
        source={{
          uri: data?.images.jpg.image_url || "",
          priority: FastImage.priority.low,
        }}
        style={styles.animeImage}
      />
      <Text style={styles.titleText} numberOfLines={1}>
        {data?.titles[data?.titles.length - 1].title}
      </Text>
      <View style={styles.scoreView}>
        <Image source={Icons.star} style={styles.starImage} />
        <Text style={styles.scoreText} numberOfLines={2}>
          {data?.score || "-"}
        </Text>
      </View>
      <Text style={styles.genreText} numberOfLines={2}>
        {genres}
      </Text>
      {favouriteAnimeList[Number(data?.mal_id)] && (
        <FontAwesome name="heart" style={styles.heartIcon} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: "30%",
  },
  scoreView: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 4,
  },
  titleText: {
    fontFamily: Fonts.bold,
    color: Colors.white,
    marginBottom: 6,
  },
  scoreText: {
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  genreText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.grey,
  },
  animeImage: {
    width: "100%",
    height: Variables.screenWidth * 0.4,
    resizeMode: "cover",
    marginBottom: 12,
    borderRadius: 10,
  },
  starImage: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    marginRight: 4,
  },
  heartIcon: {
    top: 5,
    right: 5,
    alignSelf: "flex-end",
    fontSize: 20,
    color: Colors.red,
    position: "absolute",
  },
});
