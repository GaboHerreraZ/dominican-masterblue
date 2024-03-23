"use client";

import { useLoadingStore } from "@/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const SingOutButton = ({ onClick }: { onClick: () => void }) => {
  const supabase = createClientComponentClient();
  const tooggleLoading = useLoadingStore((state) => state.toggleLoading);

  const handleSignOut = async () => {
    tooggleLoading(true);
    await supabase.auth.signOut();
    tooggleLoading(false);
    onClick();
  };

  return (
    <button
      onClick={handleSignOut}
      className="border-[1px] border-gold px-2 rounded hover:bg-black/5  transition-all duration-500 text-white"
    >
      <label className="cursor-pointer">Cerrar Sesión</label>
    </button>
  );
};
