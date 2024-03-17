import "swiper/css";
import { register } from "swiper/element/bundle";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/couterSlice";

register();

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center text-7xl font-semibold py-16">{counter}</h1>
      <div className="flex justify-center items-center gap-3">
        <button
          className="px-6 py-2 border rounded bg-slate-600 text-white hover:ring-4 "
          onClick={() => dispatch(increment())}
        >
          Inc
        </button>
        <button
          className="px-6 py-2 border rounded bg-slate-600 text-white hover:ring-4 "
          onClick={() => dispatch(decrement())}
        >
          Dec
        </button>
        <button
          className="px-6 py-2 border rounded bg-slate-600 text-white hover:ring-4 "
          onClick={() => dispatch(incrementByAmount(5))}
        >
          By Amount
        </button>
      </div>
    </>
  );
}

export default App;
