import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ActivityIndicator
} from "react-native";

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

export default function DogScreen({ navigation }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDog = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(DOG_API_URL);
            const json = await response.json();

            if (json.status !== 'success' || !json.message) {
                throw new Error('Invalid API response');
            }

            setImageUrl(json.message);
        } catch (error) {
            setError("Could not load a dog image.");
        } finally {
            setLoading(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchDog();
        }, [fetchDog])
    );

    return (<View style={styles.container}>
        <View style={styles.imageContainer}>
            {loading && <ActivityIndicator size="large" />}

            {!loading && imageUrl && !error && (
                <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
            )}

            {!loading && error && (
                <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
        <View style={styles.buttonRow}>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010052ff',
        padding: 16
    },
    imageContainer: {
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#414141ff',
        backgroundColor: '#2f2d41ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonRow: {
        marginTop: 16
    },
    errorText: {
        color: '#e71010ff',
        textAlign: 'center',
        fontSize: 16
    }
})