import React from 'react';
import {Image, Pressable, FlatList, TouchableOpacity} from 'react-native';
import {Link, useNavigation, useRouter} from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { View, Text} from 'react-native';

interface TripCardProps {
  destination: string;
  country: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  travelType: 'solo' | 'family' | 'business' | 'friends';
  avatarUrl?: string;
}

// 模拟数据
const MOCK_TRIPS: TripCardProps[] = [
  {
    destination: 'Shanghai',
    country: 'China',
    startDate: new Date('2025-08-07'),
    endDate: new Date('2025-08-07'),
    imageUrl: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    travelType: 'solo',
      avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Smith&background=4CAF50&color=fff'
  },
  {
    destination: 'Tokyo',
    country: 'Japan',
    startDate: new Date('2025-09-15'),
    endDate: new Date('2025-09-20'),
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    travelType: 'family',
    avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Smith&background=4CAF50&color=fff'
  },
  {
    destination: 'Singapore',
    country: 'Singapore',
    startDate: new Date('2025-10-01'),
    endDate: new Date('2025-10-05'),
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80',
    travelType: 'business',
    avatarUrl: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=FF5722&color=fff'
  }
];

const TripCard: React.FC<TripCardProps> = ({
  destination,
  country,
  startDate,
  endDate,
  imageUrl,
  travelType,
  avatarUrl
}) => {
  const router = useRouter();
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit'
    });
  };

  return (
      <TouchableOpacity  onPress={() => router.push('/trip-details')} activeOpacity={0.8}>
    <ThemedView className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 shadow-lg mb-6">
      {/* 背景图片 */}
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-72"
        resizeMode="cover"
      />

      {/* 日期和目的地覆盖层 */}
      <View className="absolute top-6 left-6 right-6">
        <Text className="text-white text-xl font-semibold mb-2">
          {`${formatDate(startDate)} - ${formatDate(endDate)}`}
        </Text>
        <Text className="text-white text-4xl font-bold">
          {`${destination}, ${country}`}
        </Text>
      </View>

      {/* 底部信息栏 */}
      <ThemedView className="p-4 flex-row items-center justify-between">
        <ThemedView className="flex-row items-center">
          {/* 头像 */}
          {avatarUrl && (
            <Image
              source={{ uri: avatarUrl }}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <ThemedView>
            <ThemedText className="text-lg font-semibold">
              {`${destination}, ${country}`}
            </ThemedText>
            <ThemedView className="flex-row items-center mt-1">
              <ThemedText className="text-zinc-600 dark:text-zinc-400">
                {`${formatDate(startDate)}, ${new Date(startDate).getFullYear()}`}
              </ThemedText>
              <ThemedView className="w-1.5 h-1.5 rounded-full bg-zinc-400 mx-2" />
              <ThemedText className="text-zinc-600 dark:text-zinc-400 capitalize">
                {travelType}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
      </TouchableOpacity>

  );
};

// 卡片列表组件
export const TripCardList: React.FC = () => {
  return (
    <FlatList
      data={MOCK_TRIPS}
      keyExtractor={(item) => `${item.destination}-${item.startDate}`}
      renderItem={({ item }) => <TripCard {...item} />}
      className="px-6"
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TripCard;
