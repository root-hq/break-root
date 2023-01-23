import axios from "axios";

export function getRandomFromArray(arr) {
    if(arr.length === 0) {
        return null;
    }
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

const getSwapRequest = async(
    side,
    size
) => {
    return axios.post(`https://break-root-server.vercel.app/api/swap?side=${side}&size=${size}`);
};

export const swapOnRoot = async (trade) => {
    try {
        const response = await getSwapRequest(trade.side, trade.size);
        console.log("Returning: ", response.data);
        return response.data;
    }
    catch(err) {
        console.log("Something went wrong placing trade: ", err, " for trade: ", trade);
        return "";
    }
}

export const getLiquidityData = async (depth = 0, dollarify = true) => {
    try {
        const liquiditySeries = await axios.get(`https://break-root-server.vercel.app/api/get-liquidity-map-truncated?depth=${depth}&step=${8}`);
        
        let interestedIn;
        if(dollarify) {
            interestedIn = liquiditySeries.data["dollarValueSeries"];
        }
        else {
            interestedIn = liquiditySeries.data["series"];
        }

        var series = [
            {
                name: " SOL",
                data: interestedIn["numTokenA"]
            },
            {
                name: " USDC",
                data: interestedIn["numTokenB"]
            }
        ];
          
          var options = {
            chart: {
              type: 'bar',
              height: 1000,
              stacked: true
            },
            colors: ['#FF4560', '#008FFB'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '80%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 0,
              colors: ["#fff"]
            },
            yaxis: {
                title: {
                    text: 'Price slot in USDC per SOL'
                },
            },
            grid: {
                show: false,
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return "Price slot: " + val
                }
              },
              y: {
                formatter: function (val) {
                  return "$" + Math.abs(val)
                }
              }
            },
            title: {
              text: dollarify ? `Liquidity in Dollar value` : `Liquidity in num. tokens`
            },
            xaxis: {
              categories: interestedIn["price"],
              title: {
                text: '% Spread from current price'
              },
              labels: {
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
          };

        return {
            series: series,
            options: options
        };
    }
    catch(err) {
        console.log("Something went wrong fetching liquidity map");
        return [];
    }
}