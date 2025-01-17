import Title from "../component/title/Title";

export default function Main() {
  return (
    <div style={{width:"1280px", height:"100vh", margin:"0 auto", padding:"30px 0px", boxSizing:"border-box",backgroundColor:"#F2E8DC"}}>
      <p style={{width:"300px", height:"300px", margin:"0 auto"}}><img style={{width:"100%"}} src="./img/main/symbol.jpg"/></p>
      <Title defaultTitle={"こんにちは、札幌。"} updatedTitle={"Hello, Sapporo."}/>
    </div>
  )
}
