function User(props) {
    return (
      <div>
        <div className="flex items-center justify-between my-[16px]">
          <div className="flex items-center gap-[7px]">
            <img src={props.user} />
            <div>
              <h3 className="text-[#232A35] text-[14px]">{props.name}</h3>
              <h3 className="text-[#6A6A6A] text-[12px]">{props.role}</h3>
            </div>
          </div>
          <img src="/assets/img/member-dot.svg" />
        </div>
      </div>
    );
  }
  export default User;