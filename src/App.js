import {
    BaseLine,
    Stepline,
    BaseArea,
    AreaStacked,
    BaseColumn,
    ColumnDataLabels,
    Mixed,
    Candlestick,
    BaseDonut,
    RadialBars,
    RadialBarImage,
    RadialGauge,
    SemiCircleGauge
} from "./charts";

const App = () => {
    return (
        <div className="app">
            <BaseLine />
            <Stepline />
            <BaseArea />
            <AreaStacked />
            <BaseColumn />
            <ColumnDataLabels />
            <Mixed />
            <Candlestick />
            <BaseDonut />
            <RadialBars />
            <RadialBarImage />
            <RadialGauge />
            <SemiCircleGauge />
        </div>
    );
};

export default App;
