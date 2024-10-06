function Date(props){
    return(
        <div className="h-[115px] border-[1px] border-[#B1B1B1] text-black text-[14px] flex flex-col items-center gap-2 p-3">
            <h3 className="text-[#B1B1B1]">{props.day}</h3>
            <h3>{props.date}</h3>
        </div>
    )
}
export default Date;