import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useAsyncStore<S>(key: string, initialValue: S) {
  const [state, setState] = useState(initialValue);

  //   load data from async storage
  //   we need to make a function inside because useEffect can't be async
  useEffect(() => {
    async function load() {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        setState(JSON.parse(value));
      }
    }
    load();
  }, [key]);

  // save data to state and async storage
  const storeData = (value: S) => {
    setState(value);
    AsyncStorage.setItem(key, JSON.stringify(value));
  };

  return [state, storeData] as const;
}
