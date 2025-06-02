# TestID Reference for Appium Testing

Este documento proporciona una lista completa de todos los atributos **testID** añadidos a los componentes interactivos en toda la aplicación **PayPal Clone** para pruebas automatizadas con **Appium**.

## Authentication Screens

### Login Screen (`/(public)/index.tsx`)

- `login-email` - Email input field
- `login-password` - Password input field
- `login-button` - Sign in button
- `signup-button` - Sign up button
- `forgot-password-button` - Forgot password link
- `login-error` - Error message display

## Navigation

### Tab Navigation (`/(protected)/(tabs)/_layout.tsx`)

- Tab accessibility labels:
  - "Home Tab" - Home tab
  - "Payments Tab" - Payments tab
  - "Wallet Tab" - Wallet tab

## Home Screen (`/(protected)/(tabs)/home.tsx`)

- `home-screen` - Main container
- `home-screen-title` - Title text
- `home-menu-button` - Menu navigation button
- `home-profile-button` - Profile navigation button

## Header Components

### Wallet Header (`/src/components/common/headers/walletHeaders.tsx`)

- `wallet-header` - Header container
- `wallet-header-menu` - Menu container
- `wallet-header-wallet-tab` - Wallet tab button
- `wallet-header-rewards-tab` - Rewards tab button
- `wallet-header-activity-tab` - Activity tab button

### Payments Header (`/src/components/common/headers/paymentsHeader.tsx`)

- `payments-header` - Header container
- `payments-header-title` - "Payments" title
- `payments-header-menu` - Menu container
- `payments-header-send-tab` - Send tab button
- `payments-header-bill-tab` - Bill tab button
- `payments-header-give-tab` - Give tab button
- `payments-header-request-tab` - Request tab button

## Wallet Screens

### Overview (`/(protected)/(tabs)/wallet/overview.tsx`)

- `wallet-overview-scroll` - ScrollView container
- `wallet-overview-container` - Main content container

### Activity (`/(protected)/(tabs)/wallet/activity.tsx`)

- `wallet-activity-scroll` - ScrollView container
- `wallet-activity-container` - Main content container
- `wallet-activity-title` - "Activity" title

### Rewards (`/(protected)/(tabs)/wallet/rewards.tsx`)

- `wallet-rewards-scroll` - ScrollView container
- `wallet-rewards-container` - Main content container
- `wallet-rewards-title` - "Rewards" title

## Payment Screens

### Layout (`/(protected)/(tabs)/payments/_layout.tsx`)

- `payments-layout-root` - Root layout container

### Send (`/(protected)/(tabs)/payments/send.tsx`)

- `send-screen` - Main container
- `send-screen-title` - "Send" title

### Bill (`/(protected)/(tabs)/payments/bill.tsx`)

- `bill-screen` - Main container
- `bill-screen-title` - "Bill" title

### Give (`/(protected)/(tabs)/payments/give.tsx`)

- `give-screen` - Main container
- `give-screen-title` - "Give" title

### Request (`/(protected)/(tabs)/payments/request.tsx`)

- `request-screen` - Main container
- `request-screen-title` - "Request" title

## Profile Screen (`/(protected)/profile/index.tsx`)

- `profile-screen` - Main container
- `profile-screen-title` - "Profile" title
- `profile-back-button` - Back navigation button
- `profile-logout-button` - Logout button

## Menu Screen (`/(protected)/menu/index.tsx`)

- `menu-screen` - Main container
- `menu-screen-title` - "menu" title
- `menu-back-button` - Back navigation button

## UI Components

### FloatingActionButton (`/src/components/ui/buttons/FloatingActionButton.ios.tsx`)

- Accepts `testID` prop
- Automatically creates `{testID}-icon` for the icon element

### LoadingSpinner (`/src/components/ui/loading/loadingSpinner.tsx`)

- `loading-spinner` - Container
- `loading-spinner-indicator` - ActivityIndicator element

### SkeletonBox (`/src/components/ui/skeletonBox/index.tsx`)

- Accepts `testID` prop for individual skeleton elements

### IconSymbol (`/src/components/ui/icons/IconSymbol.ios.tsx`)

- Accepts `testID` prop for icon accessibility

## Testing Guidelines

### Naming Convention

- Use kebab-case for all testID values
- Include screen/component context: `{screen}-{element}-{action}`
- For lists/arrays: `{base-name}-{index}`
- For child elements: `{parent-testid}-{child-element}`

### Best Practices

1. All interactive elements (buttons, inputs, touchables) have testID
2. Main containers and screens have testID for context
3. Navigation elements are properly labeled
4. Form validation states are testable
5. Dynamic content (lists, sections) include index-based testIDs

### Example Appium Test Selectors

```javascript
// Login flow
await driver.elementById("login-email").sendKeys("test@example.com");
await driver.elementById("login-password").sendKeys("Test123!");
await driver.elementById("login-button").click();

// Navigation
await driver.elementById("home-menu-button").click();
await driver.elementById("menu-back-button").click();

// Tab navigation
await driver.elementByAccessibilityId("Wallet Tab").click();
await driver.elementById("wallet-header-activity-tab").click();

// Logout
await driver.elementById("home-profile-button").click();
await driver.elementById("profile-logout-button").click();
```

## Coverage Summary

✅ Pantallas de autenticación (inicio de sesión, validación, errores)
✅ Navegación principal (pestañas, encabezados, botones flotantes)
✅ Todas las pantallas de la billetera (resumen, actividad, recompensas)
✅ Todas las pantallas de pagos (enviar, facturar, donar, solicitar)
✅ Pantallas de perfil y menú
✅ Componentes centrales de la interfaz (botones, carga, esqueletos, iconos)
✅ Elementos interactivos en toda la app

La aplicación ahora cuenta con una cobertura completa de testID para pruebas automatizadas con Appium u otros frameworks de testing.
