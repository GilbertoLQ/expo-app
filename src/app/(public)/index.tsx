import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VALID_EMAIL = "test@example.com";
const VALID_PASSWORD = "Test123!";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecial: false,
  });
  const inputRefs = useRef<Array<TextInput | null>>([null, null]);
  const translateY = useRef(new Animated.Value(0)).current;
  const errorOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setPasswordValidation({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const showError = (message: string) => {
    setError(message);
    Animated.sequence([
      Animated.timing(errorOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(errorOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showError("Please fill in all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address");
      return;
    }
    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      showError("Invalid email or password");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      router.replace("/(protected)/(tabs)/home");
    } catch (err) {
      showError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = (index: number) => {
    Animated.timing(translateY, {
      toValue: -10 * index,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
        keyboardVerticalOffset={Platform.OS === "ios" ? -32 : 0}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.dismissKeyboard}
          onPress={Keyboard.dismiss}
        >
          <Animated.View
            style={[styles.innerContent, { transform: [{ translateY }] }]}
          >
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/paypal-mark-color.svg")}
                style={styles.logo}
                contentFit="contain"
              />
            </View>

            <View style={styles.form}>
              <TextInput
                testID="login-email"
                ref={(ref) => {
                  inputRefs.current[0] = ref;
                }}
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#999"
                onFocus={() => handleFocus(0)}
                returnKeyType="next"
                onSubmitEditing={() => inputRefs.current[1]?.focus()}
              />

              <TextInput
                testID="login-password"
                ref={(ref) => {
                  inputRefs.current[1] = ref;
                }}
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#999"
                onFocus={() => handleFocus(1)}
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />

              {password.length > 0 && (
                <View style={styles.passwordRequirements}>
                  <View style={styles.requirementRow}>
                    <View
                      style={[
                        styles.checkCircle,
                        passwordValidation.minLength && styles.validRequirement,
                      ]}
                    />
                    <Text style={styles.requirementText}>
                      At least 8 characters
                    </Text>
                  </View>

                  <View style={styles.requirementRow}>
                    <View
                      style={[
                        styles.checkCircle,
                        passwordValidation.hasNumber && styles.validRequirement,
                      ]}
                    />
                    <Text style={styles.requirementText}>
                      Contains a number
                    </Text>
                  </View>

                  <View style={styles.requirementRow}>
                    <View
                      style={[
                        styles.checkCircle,
                        passwordValidation.hasSpecial &&
                          styles.validRequirement,
                      ]}
                    />
                    <Text style={styles.requirementText}>
                      Contains a special character
                    </Text>
                  </View>
                </View>
              )}

              <View style={styles.errorContainer}>
                <Animated.Text
                  testID="login-error"
                  style={[styles.errorText, { opacity: errorOpacity }]}
                >
                  {error}
                </Animated.Text>
              </View>

              <TouchableOpacity
                testID="login-button"
                style={[styles.button, isLoading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                testID="signup-button"
                style={styles.buttonSingup}
                onPress={() => router.push("/")}
                disabled={isLoading}
              >
                <Text style={styles.buttonTextSignup}>Sign up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                testID="forgot-password-button"
                style={styles.forgotButton}
                onPress={() => router.push("/")}
              >
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
  },
  form: {
    gap: 16,
    marginTop: "auto",
    marginBottom: "auto",
    paddingHorizontal: Platform.OS === "ios" ? 0 : 0,
  },
  input: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    fontSize: 16,
    color: "#212529",
    borderWidth: 1,
    borderColor: "transparent",
  },
  dismissKeyboard: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
    paddingBottom: Platform.OS === "ios" ? 16 : 24,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 48,
    marginBottom: 48,
  },
  logo: {
    width: 64,
    height: 64,
  },
  button: {
    height: 52,
    backgroundColor: "#000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonSingup: {
    height: 52,
    backgroundColor: "#f8f9fa",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSignup: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  passwordRequirements: {
    marginTop: 8,
    paddingHorizontal: 4,
  },
  requirementRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  checkCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 8,
  },
  validRequirement: {
    backgroundColor: "#2e7d32",
    borderColor: "#2e7d32",
  },
  requirementText: {
    fontSize: 12,
    color: "#666",
  },
  errorContainer: {
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  errorText: {
    color: "#dc3545",
    fontSize: 14,
    textAlign: "center",
  },
  forgotButton: {
    alignItems: "center",
    padding: 8,
  },
  forgotText: {
    color: "#0070BA",
    fontSize: 14,
  },
  signupText: {
    color: "#0070BA",
    fontSize: 14,
    fontWeight: "600",
  },
});
