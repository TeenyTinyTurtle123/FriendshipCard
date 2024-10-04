# FriendshipCard

FriendshipCard är en enkel liten app där du kan skapa kort av dina vänner och skriva ner vad för saker de gillar och presentideer som du tror dem skulle gilla. Sedan när det närmar sig deras födelsedag eller liknande, så har du en liten lista på saker du skulle kunna köpa till dem.

## Installera och kör programmet

```bash
npm install
```

Starta programmet

```bash
npm start
```

## Innehåll

Programmet är skapat med:

- React-Native
- React-Navigation
- Expo
  - Image, AsyncStorage, ImagePicker, Picker, SafeAreaContext
- Skrivet med TypeScript

## Expo komponenter:

- Image - https://docs.expo.dev/versions/latest/sdk/image/

Används: ToDetailButton + FriendCard

- Async storage - https://docs.expo.dev/versions/latest/sdk/async-storage/

Används: useAsyncStorage (hook)

- ImagePicker - https://docs.expo.dev/versions/latest/sdk/imagepicker/

Används: CreateFriend

- Picker - https://docs.expo.dev/versions/latest/sdk/picker/

Används: CreateFriendScreen

- SafeAreaContext - https://docs.expo.dev/versions/latest/sdk/safe-area-context/

Används: alla screens

## React Native komponenter

- Text
- View
- ScrollView
- TextInput
- Alert
- StyleSheet
- Pressable

## Uppfyllda krav

- Alla krav för godkänt

  - 4 RN-komponenter + 4 Expo komponenter
  - Komponenterna är skriva här i filen
  - React Navigation används
  - Git & Github har används
  - README fil finns
  - Inlämnad i tid
  - Presentation utförd

- VG krav, alla utom 1
  - Alla krav för G
  - Pratar med ett API - https://api.adviceslip.com/#object-slip
  - valfri extern modul - Zod - https://zod.dev/?id=introduction
  - (ej gjord) Förbered för lansering till en Appstore
