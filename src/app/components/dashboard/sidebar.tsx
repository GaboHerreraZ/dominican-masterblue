import { Menu } from "@/app/components/dashboard/menu";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Sidebar = ({
  lng,
  show,
  setter,
}: {
  lng: string;
  show: boolean;
  setter: any;
}) => {
  const navigation = useRouter();

  const singOut = useAuthStore((state) => state.singOut);

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
        <Menu lng={lng} />
        <div className="flex absolute w-full  justify-center p-2  bottom-0">
          <Button
            variant="ghost"
            radius="none"
            size="sm"
            color="default"
            onClick={handleSingOut}
          >
            Cerrar Sesión
          </Button>
        </div>
      </aside>
      {show ? <ModalOverlay /> : <> </>}
    </>
  );
};
