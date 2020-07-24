import React from "react"
import Chartjs from 'chart.js'
import classes from "./LineGraph.module.css"

export default function Dashboard() {

  const [state, setState] = React.useState([])
  const chartContainer = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)
  
  useEffect(() => {
    async function getChartData() {
      const response = await fetch('http://localhost:8000/chart');
      const data = await response.json();
      setState(data)
    }
    getChartData()
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(
        chartContainer.current, 
        // chartConfig //TODO: replace node with "data" received from the API
        state[0].charts[0].campaing1
        )
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <>
    <canvas ref={chartContainer} />
    </>
  );
}