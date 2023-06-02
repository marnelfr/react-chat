import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
import { ROUTES } from "../../../constants/routes";
import { chatActions } from "../slices/chat";
import usePrivateAxios from "../../auth/hooks/usePrivateAxios";

const useChat = () => {
  const chat = useAppSelector((state) => state.chat);
  const [isLoading, setIsLoading] = useState(true);
  const axios = usePrivateAxios();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadCharts = async () => {
      const response = await axios.get(ROUTES.chats);
      dispatch(chatActions.loadChats(response?.data));
    };
    loadCharts().finally(() => {
      setIsLoading(false);
    });
  }, []);

  return { chat, isLoading };
};

export default useChat;
