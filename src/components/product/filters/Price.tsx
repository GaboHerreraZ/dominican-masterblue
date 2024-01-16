import { Filter } from "@/domain/model/filter";
import { Control, Controller } from "react-hook-form";
import { Slider } from "@nextui-org/slider";

interface Props {
  control: Control<Filter, any>;
  onSubmit: () => Promise<void>;
  label?: string;
}

export const PriceFilter = ({ control, onSubmit, label }: Props) => {
  return (
    <Controller
      control={control}
      name="price"
      defaultValue={[0, 10000]}
      render={({ field: { onChange, value } }) => (
        <Slider
          onChange={(value) => {
            onChange(value);
            onSubmit();
          }}
          value={value}
          size="sm"
          step={500}
          maxValue={10000}
          minValue={0}
          classNames={{
            label: "text-white font-bold uppercase",
            value: "text-white font-bold uppercase",
          }}
          label={label}
          aria-label={label}
          defaultValue={[0, 10000]}
          formatOptions={{ style: "currency", currency: "USD" }}
          className="w-full"
        />
      )}
    />
  );
};
