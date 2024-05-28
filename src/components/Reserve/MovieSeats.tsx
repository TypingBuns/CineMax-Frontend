import {useEffect, useState} from "react";

export const Seat = (
  {
    row,
    col,
    seat,
    handleSeatChange
  } : {
    row: number,
    col: number,
    seat: number,
    handleSeatChange: (row: number, col: number)=>void
  }) => {

  const [status, setStatus] = useState<number>(seat);

  return (
    <div
      className="flex flex-col size-8 xl:size-12 gap-[1px] cursor-pointer"
      onClick={() => {
        handleSeatChange(row, col);
        if (status >= 0) {
          if (status === 0) setStatus(1);
          else setStatus(0);
        }
      }}
    >
      <div className="flex gap-[1px] h-full">
        <div className={`${status !== 0 ?(status > 0?'bg-gray-200':'bg-secondary-800'):'bg-primary-800'} w-2 xl:w-4 h-[80%] rounded-t-md self-end border-[1px] border-black`} />
        <div className={`flex ${status !== 0 ?(status > 0?'bg-gray-200':'bg-secondary-800'):'bg-primary-800'} min-w-3 w-full h-full rounded-t-lg justify-center border-[1px] border-black`} >
          <p className={`self-end text-xl text-primary-800 pointer-events-none`}>{col}</p>
        </div>
        <div className={`${status !== 0 ?(status > 0?'bg-gray-200':'bg-secondary-800'):'bg-primary-800'} w-2 xl:w-4 h-[80%] rounded-t-md self-end border-[1px] border-black`} />
      </div>
      <div className={`${status !== 0 ?(status > 0?'bg-gray-200':'bg-secondary-800'):'bg-primary-800'} h-3 w-full rounded-b-lg border-[1px] border-black`}/>
    </div>
  )
}

const MovieSeats = (
  {
    rows,
    handleSeatChange
  }:{
    rows?:number[][],
    handleSeatChange: (row: number, col: number) =>void
  }) => {

  const [passedRows, setPassedRows] = useState<number[][]>();

  useEffect(() => {
    setPassedRows(rows);
  },[rows])

  return (
    <div className="flex flex-col w-full h-full gap-4 overflow-x-scroll xl:overflow-x-visible">
      {
        passedRows?.map((row, rowNum) => {
        return (
          <div
            key={(rowNum+1) + "seats row"}
            className="flex justify-between gap-x-4"
          >
            <p className={`text-primary-800 self-center font-semibold`}>{rowNum + 1}</p>
            <div className={`w-full h-[2px] bg-secondary-600 self-center`}/>
            <div className={`flex justify-between gap-1 min-w-[80%]`}>
              {
                row.map((seat, colNum) => {
                  return (
                    <Seat
                      key={row.length * (rowNum+1) + (colNum+1)}
                      row={rowNum+1} col={(colNum+1)}
                      handleSeatChange={handleSeatChange}
                      seat={seat}
                    />
                  );
                })
              }
            </div>
            <div className={`w-full h-[2px] bg-secondary-600 self-center`}/>
            <p className={`text-primary-800 self-center font-semibold`}>{rowNum + 1}</p>
          </div>
          )
      })

      }
    </div>
  )
}

export default MovieSeats;



// </div>