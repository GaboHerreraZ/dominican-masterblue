import { Menu } from "@/app/components/dashboard/menu";
import { PowerOffIcon } from "@/app/utils/iconsUtils";
import { useTranslationStore } from "@/store/translationStore";
import { useAuthStore } from "@/store/useAuthStore";
import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Sidebar = ({ show, setter }: { show: boolean; setter: any }) => {
  const navigation = useRouter();

  const translations = useTranslationStore(
    (state) => state.dashboardTranslations
  );

  const singOut = useAuthStore((state) => state.singOut);
  const user = useAuthStore((state) => state.user);

  const handleSingOut = async () => {
    await singOut();
    navigation.push("/login");
  };

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal: boolean) => !oldVal);
      }}
    />
  );

  const className =
    "bg-[#091a7ab3] w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:relative top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  return (
    <>
      <aside className={`${className}${appendClass}`}>
        <Menu />
        <div className="flex flex-col items-center gap-2 absolute w-full  justify-center p-2  bottom-0">
          <span className="font-bold text-white text-small">
            {user?.user.email}
          </span>
          <Tooltip placement="right" content={translations?.logOut}>
            <Button
              isIconOnly
              variant="light"
              radius="full"
              size="sm"
              color="default"
              onClick={handleSingOut}
            >
              <PowerOffIcon size={20} />
            </Button>
          </Tooltip>
        </div>
      </aside>
      {show ? <ModalOverlay /> : <> </>}
    </>
  );
};
