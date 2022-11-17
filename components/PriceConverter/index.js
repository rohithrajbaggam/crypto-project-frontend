import {
  useGetAllCoinsQuery,
  useGetPriceConversionQuery,
} from "../../store/apis/restApis";
import { currencies } from "../../data/crypto";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const PrizeConverter = (props) => {
  const { watch, register, setValue } = useForm();
  const { data: coinsData } = useGetAllCoinsQuery();

  const coinValue = watch("coin", "");
  const currencyValue = watch("currency", "");

  const { data: priceConversionData } = useGetPriceConversionQuery(
    {
      coin: coinValue,
      currency: currencyValue,
    },
    {
      skip: coinValue ? false : true,
    }
  );

  useEffect(() => {
    if (!coinsData) return;

    setValue("coin", coinsData[0]?.coin_id);
  }, [coinsData]);

  return (
    <div className="my-5">
      <div className=" w-full glass1 rounded-md p-2 my-2 grid place-items-center text-white font-extrabold">
        <h3 className="">CRYPTO PRICE CONVERTER</h3>
      </div>

      <div className="mt-5 glass1 p-5 text-center">
        <div className="bg-white w-[320px] p-5 m-auto rounded-md flex flex-col items-center">
          <div className="flex items-center space-x-4">
            <img
              src={priceConversionData?.coin_image}
              alt=""
              className="w-[30px]"
            />
            <p className="uppercase">{priceConversionData?.coin}</p>
            <p> {" in "}</p>
            <p className="uppercase">{priceConversionData?.currencies}</p>
            <img
              src={priceConversionData?.currency_image}
              alt=""
              className="w-[30px]"
            />
          </div>

          <div>
            <p className="text-[20px] mt-3">{priceConversionData?.price}</p>
          </div>
        </div>

        <div className="mt-5 glass1 p-2 rounded-xl overflow-hidden flex justify-between space-x-3">
          <select {...register("coin")} className="flex-1 p-2 rounded-md">
            {coinsData?.map((c) => (
              <option value={c.coin_id} key={c.id}>
                {c.label}
              </option>
            ))}
          </select>

          <select {...register("currency")} className="flex-1 p-2 rounded-md">
            {currencies?.map((c) => (
              <option value={c.value} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PrizeConverter;
