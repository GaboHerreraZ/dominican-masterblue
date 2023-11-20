import { Menu } from "@/app/components/dashboard/menu";

export const Sidebar = ({
  lng,
  show,
  setter,
}: {
  lng: string;
  show: boolean;
  setter: any;
}) => {
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal: boolean) => !oldVal);
      }}
    />
  );

  const className =
    "bg-master-900/70 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  return (
    <>
      <aside className={`${className}${appendClass}`}>
        <Menu lng={lng} />
      </aside>
      {show ? <ModalOverlay /> : <> </>}
    </>
  );
};
