function Task(props) {
  return (
    <div className="p-3 bg-white rounded-[10px] mt-3">
      <div className="flex items-start justify-between">
        <div className="flex gap-2 items-start">
          <img src={props.folder} alt="folder" />
          <div>
            <h1>{props.title}</h1>
            <div className="flex items-center gap-1 text-[8px]">
              <div className="rounded-[50px] px-3 py-1 bg-[#EDEDED]">
                {props.tag1}
              </div>
              <div className="rounded-[50px] px-3 py-1 bg-[#EDEDED]">
                {props.tag2}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="w-[40px] h-[18px] rounded-[50px] flex items-center justify-center text-[6px] border-[1px] border-[#EDEDED]">
            {props.date}
          </h1>
          <img src="/assets/img/dot-icon.svg" alt="dotIcon" />
        </div>
      </div>
      <p className="py-5 text-[13px]">{props.task}</p>
      <img className="rounded-[8px]" src={props.taskImg} />
      <div className="w-full h-px my-3 bg-[#F1F1F1]"></div>
      <h2 className="text-[10px]">Assign to</h2>
      <div className="flex items-center justify-between">
        <img src="/assets/img/profile-icon.svg" alt="profileIcon" />
        <div className="w-[60px] h-[25px] rounded-[50px] bg-[#F3F3F3] border-[#E6E6E6] border-[1px] text-[10px] flex items-center justify-center">
          Open
        </div>
      </div>
    </div>
  );
}
export default Task;
