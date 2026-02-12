const RestrauntCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"
      ></img>
      <h3>{props?.resData[0]?.data?.name}</h3>
      <h4>Biryani,Buritto</h4>
      <h4>30 Minutes</h4>
    </div>
  );
};
export default RestrauntCard;
