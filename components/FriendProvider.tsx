import { createContext, PropsWithChildren } from "react";
import { FriendCard } from "../data";
import useAsyncStore from "../Hooks/useAsyncStorage";

interface ContextValue {
  friendList: FriendCard[];
}

export const FriendContext = createContext<ContextValue>({} as ContextValue);

export default function FriendProvider({ children }: PropsWithChildren) {
  // Async Storage saker
  const [friends, setFriends] = useAsyncStore("friends", []);

  return (
    <FriendContext.Provider value={{ friendList: friends }}>
      {children}
    </FriendContext.Provider>
  );
}
