function Column(props){
    return(
        <div className="text-[13px] flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-[13px] h-[13px] rounded-[50px] bg-[#C8FFA5]"></div>
                <h3>{props.task}</h3>
            </div>
            <div className="flex items-center gap-1">
                <img src="/assets/img/plus-icon.svg" alt="plusIcon" />
                <h3>Add task</h3>
            </div>
        </div>
    )
}
export default Column