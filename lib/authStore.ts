import {create} from "zustand"

type AuthStore = {
  isAuthenticated: boolean
  authenticate: () => void
  logout: () => void
}

const useAuthStore = create<AuthStore>()((set) => ({
  isAuthenticated: false,
  authenticate: () => {
    set({isAuthenticated: true});
  },
  logout: () => {
    set({isAuthenticated: false});
  },
}))

export default useAuthStore