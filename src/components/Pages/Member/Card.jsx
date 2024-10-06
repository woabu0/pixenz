function Card(props) {
  return (
    <div className="px-5 rounded-[8px] flex justify-between items-center bg-[#FAFBFC] w-[173px] h-[57px]">
      <div>
        <h2 className="text-[18px] text-[#000]">{props.number}</h2>
        <h3 className="text-[12px] text-[#6A6A6A]">{props.todo}</h3>
      </div>
      <div className="w-[30px] h-[30px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center border-[#EBEBEB] border-[1px]">
        <img src={props.icon} className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
}
export default Card;
