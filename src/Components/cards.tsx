import "../index.css";

const Cards = () => {
  return (
    <>
      <div className="flex flex-grow flex-col bg-base-100 min-w-full shadow-m z-2 rounded-box md: p-4">
        <div className="grid grid-cols-2 min-w-full">
          <div className="card-body border-r-2 border-l-2 border-t-2 border-white text-center text-4xl md:text-5xl text-right">
            <p>👋</p>
          </div>
          <div className="card-body border-r-2 border-t-2 border-white py-1">
            <p className="flex items-center font-bold text-l md:text-3xl">
              HI COMRADES
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 w-full">
          <div className="card-body border-r-2 border-y-2 border-l-2 border-white col-span-2">
            03
          </div>
          <div className="card-body border-r-2 border-y-2 border-white">04</div>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="card-body border-r-2 border-l-2 border-b-2 border-white">
            05
          </div>
          <div className="card-body border-r-2 border-b-2 border-white">06</div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="card-body w-1/3 text-right text-5xl">
            <p>👋</p>
          </div>
          <div className="card-body w-2/3 text-l font-bold py-1 md:text-3xl">
            <p>HI COMRADES</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
