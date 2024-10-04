import { createContext, PropsWithChildren, useContext } from "react";
import { Friend } from "../data";
import useAsyncStore from "../Hooks/useAsyncStorage";

interface ContextValue {
  friendList: Friend[];
  addFriend: (friend: Friend) => void;
  removeFriend: (id: number) => void;
}

export const FriendContext = createContext<ContextValue>({} as ContextValue);

export default function FriendProvider({ children }: PropsWithChildren) {
  const [friends, setFriends] = useAsyncStore<Friend[]>("friends", []);

  // uppdaterar listan med ett nytt moment
  const addFriend = (newFriend: Friend) => {
    const updateFriends = [...friends, newFriend];
    setFriends(updateFriends);
  };

  // uppdaterar listan med alla saker FÖRUTOM objektet med inkommande id
  const removeFriend = (id: number) => {
    const updateFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updateFriends);
  };

  return (
    <FriendContext.Provider
      value={{ friendList: friends, addFriend, removeFriend }}
    >
      {children}
    </FriendContext.Provider>
  );
}

export const useFriendProvider = () => useContext(FriendContext);
