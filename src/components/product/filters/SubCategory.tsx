import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Control, Controller } from "react-hook-form";

import { Filter } from "@/domain/model/filter";
import { SubCategory, SUBCATEGORIES } from "@/utils/const";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Props {
  control: Control<Filter, any>;
  onSubmit: () => Promise<void>;
  label?: string;
  path: string;
  labelNoCategory: string;
}

export const SubCategoryFilter = ({
  control,
  onSubmit,
  label,
  path,
  labelNoCategory,
}: Props) => {
  const searchParams = useSearchParams();

  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const category = params.get("categoria");
    const subcategories = SUBCATEGORIES.filter(
      (subcategory) => subcategory.category === category
    );

    setSubcategories(subcategories);
  }, [searchParams]);

  if (subcategories.length === 0)
    return (
      <div className="text-white my-5 ">
        <h3 className="font-bold uppercase">{label}</h3>
        <h5 className="my-2">{labelNoCategory}</h5>
      </div>
    );

  return (
    <Controller
      control={control}
      name="subcategories"
      defaultValue={[]}
      render={({ field: { onChange } }) => (
        <CheckboxGroup
          className="mb-10"
          label={label}
          classNames={{
            label: "text-white font-bold uppercase",
          }}
          radius="none"
          color="primary"
          onChange={(value) => {
            onChange(value);
            onSubmit();
          }}
        >
          {subcategories.map((category: SubCategory, idx: number) => (
            <Checkbox
              classNames={{ label: "text-white" }}
              key={idx}
              value={category.key}
            >
              {path === "en" ? category.englishLabel : category.spanishLabel}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    />
  );
};
