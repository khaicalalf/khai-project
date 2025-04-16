import "../index.css";

const AnimationBg = () => {
  return (
    <>
      <div className="bg-base-300 text-base-content flex h-64 w-full justify-end items-end">
        <div className="w-1/2 min-h-full flex flex-row justify-end items-end md:w-1/3 overflow-hidden">
          {Array.from({ length: 2 }, (_, colIndex) =>
            colIndex % 2 === 0 ? (
              <div key={colIndex} className="flex flex-col">
                {Array.from({ length: 3 }, (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`square-s bg-blur  ${
                      (Math.floor(rowIndex / 3) + rowIndex) % 2 === 0
                        ? "bg-base-200 square-an"
                        : "bg-base-300"
                    } md:square-l`}
                  ></div>
                ))}
              </div>
            ) : (
              <div key={colIndex} className="flex flex-col">
                {Array.from({ length: 2 }, (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`square-s bg-blur   ${
                      (Math.floor(rowIndex / 2) + rowIndex) % 2 === 0
                        ? "bg-base-200 square-an"
                        : "bg-base-300"
                    } md:square-l`}
                  ></div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AnimationBg;
