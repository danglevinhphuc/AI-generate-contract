import { create } from "zustand";

export interface messagesState {
    messages: string,
    isLoading:boolean,
    handleSetMessages: (param: string) => void,
    toggleLoading: () => void
}

export const useMessagesStore = create<messagesState>()((set) => ({
  messages: '',
  isLoading: false,
  handleSetMessages: (messages:string) => set((state) => ({ ...state, messages: messages })),
  toggleLoading: () => set((state) => ({ ...state, isLoading: !state.isLoading }))
}));