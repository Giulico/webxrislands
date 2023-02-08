import { useSelector } from "react-redux";
function Rifle() {
  const { hasGun } = useSelector((state) => state.player);

  return (
    <div
      style={{
        display: hasGun ? "block" : "none",
        position: "fixed",
        top: "calc(50vh - 5px)",
        left: "calc(50vw - 5px)",
        zIndex: 1000,
        borderRadius: "50%",
        border: "1px solid white",
        width: "10px",
        height: "10px",
      }}
    />
  );
}
export default Rifle;
