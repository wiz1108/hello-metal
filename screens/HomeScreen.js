import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Vibration,
    Alert
} from "react-native";

export default function HomeScreen({ navigation }) {
    const handleHelloMetal = () => {
        Vibration.vibrate(100);
        Alert.alert("Hello Metal", "Welcome to Hello Metal Expo app!");
    }

    const handleDogPress = () => {
        navigation.navigate("Dog");
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>Hello Metal</Text>
        <Text style={styles.subtitle}>A simple Expo app with dog images</Text>

        <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={handleHelloMetal}>
                <Text style={styles.buttonText}>Hello Metal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleDogPress}>
                <Text style={styles.buttonText}>Dog</Text>
            </TouchableOpacity>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#010052ff',
        paddingHorizontal: 24
    },
    title: {
        fontSize: 32,
        color: '#b9b9b9ff',
        fontWeight: 800,
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#9c7878ff',
        fontWeight: 600,
        marginBottom: 32
    },
    button: {
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center'
    },
    primaryButton: {
        backgroundColor: '#8c9697ff'
    },
    secondaryButton: {
        backgroundColor: '#74e683ff'
    },
    buttonGroup: {
        width: '100%',
        gap: 14
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#696e99ff'
    }
})