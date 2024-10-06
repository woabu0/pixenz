function UserMessage(props) {
  return (
    <div className="w-[251px] h-[64px] m-auto">
      <div className="flex items-start justify-between my-[16px]">
        <div className="flex items-start gap-[7px]">
          <img src={props.user} />
          <div>
            <h3 className="text-[#232A35] text-[14px]">{props.name}</h3>
            <h3 className="text-[#6A6A6A] text-[12px] mt-1">{props.message}</h3>
            <div className="flex items-center gap-4 text-[8px] mt-2">
              <div className="flex items-center gap-1">
                <img src="/assets/img/messenger-date.svg" alt="date" />
                <h5>{props.date}</h5>
              </div>
              <div className="flex items-center gap-1">
                <img src="/assets/img/messenger-time.svg" alt="time" />
                <h5>{props.time}</h5>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/member-dot.svg" />
      </div>
    </div>
  );
}
export default UserMessage;
