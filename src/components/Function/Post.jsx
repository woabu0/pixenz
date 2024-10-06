function Post(props) {
  return (
    <div>
      <div className="border-[#EBEBEB] border-[1px] rounded-[18px] px-[36px] py-[25px]">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[15px]">
              <img src={props.img} alt="profile" />
              <div>
                <h2 className="text-[14px]">{props.name}</h2>
                <h3 className="text-[10px]">{props.role}</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="text-[10px] opacity-[60%]">{props.ago}</h3>
              <div className="w-[24px] h-[24px] border-[1px] border-black border-opacity-[14%] rounded-[50%] flex flex-col items-center justify-between py-[6px]">
                <div className="w-[2px] h-[2px] bg-black rounded-[50%]"></div>
                <div className="w-[2px] h-[2px] bg-black rounded-[50%]"></div>
                <div className="w-[2px] h-[2px] bg-black rounded-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-[14px] leading-[20px]">{props.post}</p>
        </div>
        <div className="flex items-center justify-between mt-5 text-[10px]">
          <div className="flex justify-center items-center bg-[#F9F9F9] hover:bg-[#9FE870] hover:border-none cursor-pointer w-[36px] h-[36px] rounded-[50%] border-[#EBEBEB] border-[.5px]">
            <img src="assets/img/like-icon.svg" alt="like-icon" />
          </div>
          <div className="flex justify-center items-center bg-[#F9F9F9] hover:bg-[#9FE870] hover:border-none cursor-pointer w-[36px] h-[36px] rounded-[50%] border-[#EBEBEB] border-[.5px]">
            <img src="assets/img/send-icon-grey.svg" alt="send-icon" />
          </div>
          <div className="w-[304px] h-[36px] border-[#EBEBEB] border-[1px] rounded-[100px] bg-[#D9D9D9] bg-opacity-[17%] flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <img src="assets/img/comment-icon.svg" alt="comment-icon" />
              <h2 className="text-[10px]">Comment</h2>
            </div>
            <img src="assets/img/send-black.svg" alt="send-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
