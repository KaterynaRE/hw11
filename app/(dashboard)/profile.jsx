import { Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useUser } from "../../hooks/UseUser";
import UserOnly from "../../components/auth/UserOnly";


const Profile = () => {
    const { user, logout } = useUser();
    //console.log(user);
    return (
        <UserOnly redirectTo="/login">
            <ThemedView style={styles.container} safe={true} >
                <ThemedText title={true}>Профіль користувача</ThemedText>
                {user && <ThemedText>{user.email}</ThemedText>}
                <Spacer height={60} />
                <Link href="/" style={styles.link}>
                    <ThemedText>На головну</ThemedText>
                </Link>
                <Button onPress={logout} title="Вийти"></Button>
            </ThemedView>
        </UserOnly>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 60,
        gap: 10,
        paddingTop: 20,
    },
    link: {
        marginTop: 20,
        fontSize: 20,
        color: 'blue'
    },

})