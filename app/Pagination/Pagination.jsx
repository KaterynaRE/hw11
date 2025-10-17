import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";
import { View, Pressable, Text, StyleSheet } from "react-native";


export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={[
                    styles.button,
                    currentPage === 1 && styles.disabledButton
                ]}
            >
                <Text style={styles.arrow}>{"<"}</Text>
            </Pressable>

            {pages.map((page) => (
                <Pressable
                    key={page}
                    onPress={() => onPageChange(page)}
                    style={[
                        styles.page,
                        page === currentPage && styles.activePage
                    ]}
                >
                    <Text
                        style={[
                            styles.pageText,
                            page === currentPage && styles.activePageText
                        ]}
                    >
                        {page}
                    </Text>
                </Pressable>
            ))}

            <Pressable
                onPress={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={[
                    styles.button,
                    currentPage === totalPages && styles.disabledButton
                ]}
            >
                <Text style={styles.arrow}>{">"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
    },
    button: {
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 20,
        backgroundColor: "#ececec",
    },
    disabledButton: {
        opacity: 0.5,
    },
    arrow: {
        fontSize: 18,
        color: "#263238",
    },
    page: {
        width: 36,
        height: 36,
        marginHorizontal: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        backgroundColor: "#ececec",
    },
    activePage: {
        backgroundColor: "#263238",
    },
    pageText: {
        color: "#263238",
        fontSize: 16,
    },
    activePageText: {
        color: "#fff",
        fontWeight: "bold",
    },
});