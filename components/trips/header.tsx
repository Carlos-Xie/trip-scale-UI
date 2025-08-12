import React from 'react';
import { Pressable } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Header = () => {
    return (
        <ThemedView className="flex-row items-center justify-between px-4 py-3">
            <ThemedText className="text-3xl font-bold">Trips</ThemedText>
            <Link href={{
                pathname: '/new-trips',
            }} asChild>
                <Pressable
                    className="w-14 h-14 rounded-full bg-blue-500 items-center justify-center"
                    accessibilityLabel="Add new trip"
                    accessibilityRole="button"
                >
                    <Ionicons name="add" size={32} color="white" />
                </Pressable>
            </Link>
        </ThemedView>
    );
};

export default Header;
