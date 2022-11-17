import { useEffect } from "react";
import Chart from "react-apexcharts";
import { useGetAllCoinsQuery } from "../../store/apis/restApis";
import { useForm } from "react-hook-form";
import { currencies, days } from "../../data/crypto";

const CoinGraph = ({ graphDataHook }) => {
  const { watch, register, setValue } = useForm();
  const { data: coinsData } = useGetAllCoinsQuery();

  const coinValue = watch("coin", "");
  const daysValue = watch("days", "");
  const currencyValue = watch("currency", "");

  const { data: graphData } = graphDataHook(
    {
      coin: coinValue,
      days: daysValue,
      currency: currencyValue,
    },
    {
      skip: coinValue && daysValue && currencyValue ? false : true,
    }
  );

  // ** Chart Series
  const series = [
    {
      data: graphData ? graphData : [],
    },
  ];

  useEffect(() => {
    if (!coinsData) return;

    setValue("coin", coinsData[0]?.coin_id);
  }, [coinsData]);

  return (
    <>
      <div className="glass1 rounded-xl text-white p-5">
        <Chart
          options={{
            tooltip: {
              theme: "dark",
            },
            xaxis: {
              type: "datetime",
              labels: {
                style: {
                  colors: "white",
                },
              },
            },

            yaxis: {
              labels: {
                style: {
                  colors: "white",
                },
              },
            },
          }}
          series={series}
          type="candlestick"
          height={400}
        />
      </div>

      <div className="mt-5 glass1 p-2 rounded-xl overflow-hidden flex justify-between space-x-3">
        <select {...register("coin")} className="flex-1 p-2 rounded-md">
          {coinsData?.map((c) => (
            <option value={c.coin_id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>

        <select {...register("days")} className="flex-1 p-2 rounded-md">
          {days?.map((d) => (
            <option value={d.value} key={d.id}>
              {d.name}
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
    </>
  );
};

export default CoinGraph;
